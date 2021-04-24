import { isAuthenticated } from "../../services/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../store/user-slicer";
import { ToastContainer } from "react-toastify";
import SideNav from "./sidebar";
import Nav from "./nav";
import Head from "next/head";

export default function Wrapper({ children }) {
  const isUserAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }

    dispatch(setIsAuthenticated(isAuthenticated()));
  }, []);

  return (
    <>
      <Head>
        <title>TeacherLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer
        className="text-center"
        position="bottom-center"
        autoClose={3000}
        pauseOnHover={false}
      />

      <div className="h-screen">
        <div className="flex h-full">
          {isUserAuthenticated && <SideNav />}
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
