import Head from "next/head";

import { api } from "~/utils/api";
import { Layout } from "~/components/layout";

export default function WorkoutsPage() {
  const { data: workouts, isLoading } = api.workouts.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Workouts</title>
      </Head>
      <Layout>
        <h1 className="my-4 mb-8 text-2xl font-extrabold leading-none text-white sm:text-[3rem]">
          Workouts
        </h1>
        <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
          {workouts?.map((workout) => (
            <li className="py-2 pb-3 sm:pb-4" key={workout.id}>
              <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
                {workout.name}
              </p>
              <p className="truncate text-sm text-gray-900 dark:text-white">
                {workout.lengthMinutes} minutes {workout.type}
                <br />
                {workout.movements.map((workoutMovement) => (
                  <p key={workoutMovement.id}>
                    {workoutMovement.reps}
                    {workoutMovement.movement.name}
                  </p>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
