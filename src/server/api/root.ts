import { createTRPCRouter } from "~/server/api/trpc";
import { usersRouter } from "./routers/users";
import { workoutsRouter } from "./routers/workouts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: usersRouter,
  workouts: workoutsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
