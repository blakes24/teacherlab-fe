import UserContext from "../components/user-context";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserContext.Consumer>
        {({ user }) => (
          <>
            <div>dashboard {user.email}</div>
          </>
        )}
      </UserContext.Consumer>
    </>
  );
}
