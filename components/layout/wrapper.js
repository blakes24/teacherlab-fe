import SideNav from "./sidebar";
import Nav from "./nav";
import Head from "next/head";

export default function Wrapper({ children }) {
  return (
    <>
      <Head>
        <title>TeacherLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <div className="flex h-full">
          <SideNav />
          <div className="w-full flex flex-col">
            <div>
              <Nav />
            </div>
            <main className="overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
