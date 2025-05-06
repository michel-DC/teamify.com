/*
  Warnings:

  - The values [FÊTE] on the enum `EventCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EventCategory_new" AS ENUM ('REUNION', 'SEMINAIRE', 'CONFERENCE', 'FORMATION', 'ATELIER', 'NETWORKING', 'CEREMONIE', 'EXPOSITION', 'CONCERT', 'SPECTACLE', 'AUTRE');
ALTER TABLE "Event" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Event" ALTER COLUMN "category" TYPE "EventCategory_new" USING ("category"::text::"EventCategory_new");
ALTER TYPE "EventCategory" RENAME TO "EventCategory_old";
ALTER TYPE "EventCategory_new" RENAME TO "EventCategory";
DROP TYPE "EventCategory_old";
ALTER TABLE "Event" ALTER COLUMN "category" SET DEFAULT 'REUNION';
COMMIT;
