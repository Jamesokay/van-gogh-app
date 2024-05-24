-- CreateEnum
CREATE TYPE "GenerationStatus" AS ENUM ('COMPLETE', 'IN_PROGRESS', 'FAILED');

-- CreateEnum
CREATE TYPE "PresetStyle" AS ENUM ('LEONARDO', 'NONE', 'DYNAMIC');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "tokenRenewalDate" TIMESTAMP,
    "paidTokens" INTEGER,
    "subscriptionTokens" INTEGER,
    "subscriptionGptTokens" INTEGER,
    "subscriptionModelTokens" INTEGER,
    "apiConcurrencySlots" INTEGER,
    "apiPaidTokens" INTEGER,
    "apiSubscriptionTokens" INTEGER,
    "apiPlanTokenRenewalDate" TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP,
    "generated_images" JSONB,
    "generation_elements" JSONB,
    "guidanceScale" DOUBLE PRECISION,
    "imageHeight" INTEGER,
    "imageWidth" INTEGER,
    "inferenceSteps" INTEGER,
    "initStrength" DOUBLE PRECISION,
    "modelId" TEXT,
    "negativePrompt" TEXT,
    "photoReal" BOOLEAN,
    "photoRealStrength" DOUBLE PRECISION,
    "presetStyle" TEXT,
    "prompt" TEXT,
    "promptMagic" BOOLEAN,
    "promptMagicStrength" DOUBLE PRECISION,
    "promptMagicVersion" TEXT,
    "public" BOOLEAN,
    "scheduler" TEXT,
    "sdVersion" TEXT,
    "seed" INTEGER,
    "status" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Generation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Generation" ADD CONSTRAINT "Generation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
