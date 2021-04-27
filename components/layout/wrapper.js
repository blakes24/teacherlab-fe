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

  const contextClass = {
    success: "bg-green",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-yellow",
    default: "bg-blue",
  };

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
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 pb-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        position="bottom-center"
        autoClose={2000}
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
