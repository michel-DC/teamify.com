import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    include: { organization: true },
  });

  const data = users.map((user) => ({
    id: user.id,
    name: [user.firstname, user.lastname].filter(Boolean).join(" "),
    email: user.email,
    profilePicture: user.organization?.profileImage || null,
    organization: user.organization
      ? {
          name: user.organization.name,
          profileImage: user.organization.profileImage,
          size: user.organization.size,
          memberCount: user.organization.memberCount,
          mission: user.organization.mission,
        }
      : null,
  }));

  return NextResponse.json(data);
}
