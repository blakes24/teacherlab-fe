import UserContext from "../components/context/user-context";
import Head from "next/head";
import CoachDashboard from "../components/dashboard/coach-dashboard";

export default function Home() {
  return (
    <>
      <UserContext.Consumer>
        {({ user }) => (
          <>
            {user.admin ? (
              <CoachDashboard></CoachDashboard>
            ) : (
              <div>Teacher Dashboard</div>
            )}
          </>
        )}
      </UserContext.Consumer>
    </>
  );
}
