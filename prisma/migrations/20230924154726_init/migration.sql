-- CreateEnum
CREATE TYPE "MeasureType" AS ENUM ('REPS', 'CALORIES', 'DISTANCE');

-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('AMRAP', 'EMOM', 'ROUNDS_FOR_TIME', 'ASCENDING_REP', 'DESCENDING_REP');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "measureType" "MeasureType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "type" "WorkoutType" NOT NULL,
    "name" TEXT NOT NULL,
    "rounds" INTEGER,
    "lengthHours" INTEGER,
    "lengthMinutes" INTEGER,
    "lengthSeconds" INTEGER NOT NULL,
    "repScheme" INTEGER[],
    "createdById" INTEGER,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutMovement" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "movementId" INTEGER NOT NULL,
    "reps" INTEGER,
    "calories" INTEGER,
    "distance" INTEGER,
    "weight" INTEGER,
    "timeHours" INTEGER,
    "timeMinutes" INTEGER,
    "timeSeconds" INTEGER,
    "workoutId" INTEGER,

    CONSTRAINT "WorkoutMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EquipmentToMovement" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_name_key" ON "Equipment"("name");

-- CreateIndex
CREATE INDEX "Movement_name_idx" ON "Movement"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_name_key" ON "Workout"("name");

-- CreateIndex
CREATE INDEX "Workout_createdById_idx" ON "Workout"("createdById");

-- CreateIndex
CREATE INDEX "WorkoutMovement_movementId_idx" ON "WorkoutMovement"("movementId");

-- CreateIndex
CREATE INDEX "WorkoutMovement_workoutId_idx" ON "WorkoutMovement"("workoutId");

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentToMovement_AB_unique" ON "_EquipmentToMovement"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentToMovement_B_index" ON "_EquipmentToMovement"("B");
