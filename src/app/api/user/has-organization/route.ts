// app/api/user/has-organization/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    // Récupère l'email de la requête
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Un email est requis" },
        { status: 400 }
      );
    }

    // Cherche l'utilisateur par son email
    const user = await prisma.user.findUnique({
      where: { email },
      include: { organization: true }, // On inclut l'organisation si elle existe
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    // Vérifie si l'utilisateur a une organisation
    const hasOrganization = user.organization !== null;

    return NextResponse.json({ hasOrganization }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la vérification de l'organisation :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
