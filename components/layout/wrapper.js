import { isAuthenticated } from "../../services/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SideNav from "./sidebar";
import Nav from "./nav";
import Head from "next/head";

export default function Wrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>TeacherLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <div className="flex h-full">
          {isAuthenticated() && <SideNav />}
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
