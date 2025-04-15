import { PrismaClient } from "@prisma/client";

declare global {
  // Permet d'utiliser une variable globale "prisma" typée avec PrismaClient
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
