import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Layout } from "~/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1 className="my-4 mb-8 text-2xl font-extrabold leading-none text-white sm:text-[3rem]">
          Home page (stuff here...)
        </h1>
      </Layout>
    </>
  );
}
