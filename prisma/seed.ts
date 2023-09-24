import { db } from "../src/server/db";

async function main() {
  // Equipment seeding
  const barbell = await db.equipment.create({ data: { name: "Barbell" } });
  const pullUpBar = await db.equipment.create({
    data: { name: "Pull-up Bar" },
  });
  const weightVest = await db.equipment.create({
    data: { name: "Weight Vest" },
  });
  const kettlebell = await db.equipment.create({
    data: { name: "Kettlebell" },
  });

  // Movements seeding
  const movements = {
    thrusters: await db.movement.create({
      data: {
        name: "Thrusters",
        description: "A full squat clean into a push press.",
        measureType: "REPS",
        equipment: { connect: [{ id: barbell.id }] },
      },
    }),
    burpees: await db.movement.create({
      data: {
        name: "Burpees",
        description:
          "From a standing position, drop to the ground, then return to standing.",
        measureType: "REPS",
      },
    }),
    pullUps: await db.movement.create({
      data: {
        name: "Pull-ups",
        description: "Starting from a dead hang, pull yourself up to the bar.",
        measureType: "REPS",
        equipment: { connect: [{ id: pullUpBar.id }] },
      },
    }),
    pushUps: await db.movement.create({
      data: {
        name: "Push-ups",
        description:
          "Starting in a plank position, lower yourself to the ground and push back up.",
        measureType: "REPS",
      },
    }),
    squats: await db.movement.create({
      data: {
        name: "Squats",
        description:
          "Standing upright, bend at the knees and hips, keeping your back straight, then return to standing.",
        measureType: "REPS",
      },
    }),
    handstandPushUps: await db.movement.create({
      data: {
        name: "Handstand Push-ups",
        description:
          "Begin in a handstand position against a wall, lower your head to the ground and push back up.",
        measureType: "REPS",
      },
    }),
    kettlebellSwings: await db.movement.create({
      data: {
        name: "Kettlebell Swings",
        description: "Swing a kettlebell from between the knees to eye level.",
        measureType: "REPS",
        equipment: { connect: [{ id: kettlebell.id }] },
      },
    }),
    kneesToElbows: await db.movement.create({
      data: {
        name: "Knees-to-Elbows",
        description:
          "Hang from a pull-up bar and bring your knees to your elbows.",
        measureType: "REPS",
        equipment: { connect: [{ id: pullUpBar.id }] },
      },
    }),
    deadlifts: await db.movement.create({
      data: {
        name: "Deadlifts",
        description:
          "Lift a loaded barbell off the ground to a standing position, then return it.",
        measureType: "REPS",
        equipment: { connect: [{ id: barbell.id }] },
      },
    }),
    run: await db.movement.create({
      data: {
        name: "Run",
        description: "Run for a specified distance or time.",
        measureType: "DISTANCE",
      },
    }),
  };

  // Workouts and their associated WorkoutMovements seeding
  // Fran
  const fran = await db.workout.create({
    data: {
      name: "Fran",
      type: "ROUNDS_FOR_TIME",
      rounds: 3,
      movements: {
        create: [
          { movementId: movements.thrusters.id, reps: 21, weight: 95 },
          { movementId: movements.pullUps.id, reps: 21 },
          { movementId: movements.thrusters.id, reps: 15, weight: 65 },
          { movementId: movements.pullUps.id, reps: 15 },
          { movementId: movements.thrusters.id, reps: 9 },
          { movementId: movements.pullUps.id, reps: 9 },
        ],
      },
    },
  });

  // Murph
  const murph = await db.workout.create({
    data: {
      name: "Murph",
      type: "ROUNDS_FOR_TIME",
      rounds: 1,
      movements: {
        create: [
          { movementId: movements.run.id, distance: 1609.34 }, // 1 mile in meters
          { movementId: movements.pullUps.id, reps: 100 },
          { movementId: movements.pushUps.id, reps: 200 },
          { movementId: movements.squats.id, reps: 300 },
          { movementId: movements.run.id, distance: 1609.34 }, // 1 mile in meters
        ],
      },
    },
  });
  // ... [Remaining code for disconnecting from db] ...
  // ... [Previous seeding code for Equipment and Movements] ...

  // The Seven
  const theSeven = await db.workout.create({
    data: {
      name: "The Seven",
      type: "ROUNDS_FOR_TIME",
      rounds: 7,
      movements: {
        create: [
          { movementId: movements.handstandPushUps.id, reps: 7 },
          { movementId: movements.thrusters.id, reps: 7, weight: 135 },
          { movementId: movements.kneesToElbows.id, reps: 7 },
          { movementId: movements.deadlifts.id, reps: 7, weight: 245 },
          { movementId: movements.burpees.id, reps: 7 },
          {
            movementId: movements.kettlebellSwings.id,
            reps: 7,
            weight: 2 * 16.38,
          }, // 2 pood in kgs
          { movementId: movements.pullUps.id, reps: 7 },
        ],
      },
    },
  });

  // Helen
  const helen = await db.workout.create({
    data: {
      name: "Helen",
      type: "ROUNDS_FOR_TIME",
      rounds: 3,
      movements: {
        create: [
          { movementId: movements.run.id, distance: 400 },
          { movementId: movements.kettlebellSwings.id, reps: 21, weight: 24 },
          { movementId: movements.pullUps.id, reps: 12 },
        ],
      },
    },
  });

  // Diane
  const diane = await db.workout.create({
    data: {
      name: "Diane",
      type: "ROUNDS_FOR_TIME",
      rounds: 3,
      movements: {
        create: [
          { movementId: movements.deadlifts.id, reps: 21, weight: 225 },
          { movementId: movements.handstandPushUps.id, reps: 21 },
          { movementId: movements.deadlifts.id, reps: 15, weight: 225 },
          { movementId: movements.handstandPushUps.id, reps: 15 },
          { movementId: movements.deadlifts.id, reps: 9, weight: 225 },
          { movementId: movements.handstandPushUps.id, reps: 9 },
        ],
      },
    },
  });
}

main()
  .then(() => db.$disconnect())
  .catch((e) => {
    console.error(e);
    void db.$disconnect();
    process.exit(1);
  });
