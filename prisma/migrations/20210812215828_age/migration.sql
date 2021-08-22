/*
  Warnings:

  - Added the required column `age` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "age" INTEGER NOT NULL;
