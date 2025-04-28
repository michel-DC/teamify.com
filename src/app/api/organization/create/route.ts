import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  // 🔒 Récupère l'utilisateur authentifié depuis le cookie
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { name, bio, profileImage, memberCount, size, mission } =
    await req.json();

  if (!name || !bio || !memberCount || !size || !mission) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    const organization = await prisma.organization.create({
      data: {
        name,
        bio,
        profileImage,
        memberCount: Number(memberCount),
        size,
        mission,
        owner: { connect: { id: user.id } }, // 🔗 relie à l'utilisateur connecté
      },
    });

    return NextResponse.json(
      {
        message: "Organisation créée",
        organization,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[ORGANIZATION_CREATE_ERROR]", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
