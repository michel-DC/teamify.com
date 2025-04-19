import { PrismaClient } from "@prisma/client";

// Déclaration d'une instance globale de Prisma pour éviter de créer plusieurs instances en mode développement
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// En mode développement, on attribue l'instance Prisma à `globalForPrisma.prisma`
// Cela permet de ne pas créer une nouvelle instance à chaque rechargement du serveur
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
