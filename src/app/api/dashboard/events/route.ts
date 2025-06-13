import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { writeFile } from "fs/promises";
import { join } from "path";
import { EventCategory, EventStatus } from "@prisma/client";

export async function POST(req: Request) {
  // 🔒 Récupère l'utilisateur authentifié depuis le cookie
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const formData = await req.formData();

  // Debug logs
  console.log("FormData received:", {
    title: formData.get("title"),
    description: formData.get("description"),
    date: formData.get("date"),
    location: formData.get("location"),
    capacity: formData.get("capacity"),
    status: formData.get("status"),
    budget: formData.get("budget"),
    category: formData.get("category"),
    isPublic: formData.get("isPublic"),
    isCancelled: formData.get("isCancelled"),
    orgId: formData.get("orgId"),
    hasFile: !!formData.get("file"),
  });

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = new Date(formData.get("date") as string);
  const location = formData.get("location") as string;
  const capacity = formData.get("capacity") as string;
  const status = formData.get("status") as EventStatus;
  const budget = formData.get("budget")
    ? parseFloat(formData.get("budget") as string)
    : null;
  const category = formData.get("category") as EventCategory;
  const isPublic = formData.get("isPublic") === "true";
  const isCancelled = formData.get("isCancelled") === "false";
  const file = formData.get("file") as File;
  const orgId = parseInt(formData.get("orgId") as string);

  // Debug logs for parsed values
  console.log("Parsed values:", {
    title,
    description,
    date,
    location,
    capacity,
    status,
    budget,
    category,
    isPublic,
    isCancelled,
    orgId,
    hasFile: !!file,
  });

  // Validation checks
  const missingFields = [];
  if (!title) missingFields.push("title");
  if (!description) missingFields.push("description");
  if (!date) missingFields.push("date");
  if (!location) missingFields.push("location");
  if (!capacity) missingFields.push("capacity");
  if (!status) missingFields.push("status");
  if (!budget) missingFields.push("budget");
  if (!category) missingFields.push("category");
  if (!orgId || isNaN(orgId)) missingFields.push("orgId");

  if (missingFields.length > 0) {
    console.log("Missing fields:", missingFields);
    return NextResponse.json(
      { error: "Champs manquants", missingFields },
      { status: 400 }
    );
  }

  try {
    let imageUrl = null;

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const path = join(
        process.cwd(),
        "public/uploads/organizations/events",
        fileName
      );

      await writeFile(path, buffer);
      imageUrl = `/uploads/organizations/events/${fileName}`;
    }

    const event = await prisma.event.create({
      data: {
        owner: { connect: { id: user.id } },
        title,
        description,
        date,
        location,
        imageUrl,
        capacity: Number(capacity),
        status,
        budget,
        category,
        isPublic,
        isCancelled,
        organization: { connect: { id: orgId } },
      },
    });

    return NextResponse.json(
      {
        message: "Événement créé",
        event,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[EVENT_CREATE_ERROR]", error);
    return NextResponse.json(
      {
        error: "Erreur serveur",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
