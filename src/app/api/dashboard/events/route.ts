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
  const orgId = formData.get("orgId") as string;

  if (
    !title ||
    !description ||
    !date ||
    !location ||
    !capacity ||
    !status ||
    !budget ||
    !category ||
    !isPublic ||
    !isCancelled ||
    !orgId
  ) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
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
        organization: { connect: { id: Number(orgId) } },
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
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
