import { type PropsWithChildren } from "react";

export const Layout = (props: PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-black">
      <div className="w-full min-w-[320px] max-w-[500px] p-2 px-4">
        {props.children}
      </div>
    </main>
  );
};
