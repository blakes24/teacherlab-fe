// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import UserContext from "../components/context/user-context";
import Layout from "../components/layout";
import storage from "../libs/storage";
import store from "../store/index";
import { isAuthenticated, getLoggedInUser } from "../services/auth";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getLoggedInUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
}

export default MyApp;
