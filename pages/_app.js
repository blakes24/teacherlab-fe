// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import UserContext from "../components/user-context";
import Layout from "../components/layout";
import storage from "../libs/storage";
import { isAuthenticated, getLoggedInUser } from "../services/auth";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if(isAuthenticated()) {
      setUser(getLoggedInUser());
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
