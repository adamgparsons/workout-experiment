import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const workoutsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.workout.findMany({
      include: { movements: { include: { movement: true } } },
    });
  }),
});
