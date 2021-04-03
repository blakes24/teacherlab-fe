import UserContext from "../components/context/user-context";
import Head from "next/head";
import Dashboard from "../components/dashboard/dashboard";

export default function Home() {
  return (
    <>
      <UserContext.Consumer>
        {({ user }) => (
          <>
            <Dashboard user={user}></Dashboard>
          </>
        )}
      </UserContext.Consumer>
    </>
  );
}
