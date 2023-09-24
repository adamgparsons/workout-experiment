import Head from "next/head";
import Image from "next/image";

import { api } from "~/utils/api";
import { Layout } from "~/components/layout";

export default function UsersPage() {
  const { data: users, isLoading } = api.users.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Layout>
        <h1 className="my-4 mb-8 text-2xl font-extrabold leading-none text-white sm:text-[3rem]">
          Users
        </h1>
        <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
          {users?.map((user) => (
            <li className="py-2 pb-3 sm:pb-4" key={user.id}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-8 w-8 rounded-full bg-white"
                    src="https://robohash.org/82.132.235.62.png"
                    alt="profile image"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
