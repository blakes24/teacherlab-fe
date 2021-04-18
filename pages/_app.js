import "../styles/sidebar.scss";
import "tailwindcss/tailwind.css";
import UserContext from "../components/context/user-context";
import Wrapper from "../components/layout/wrapper";
import store from "../store/index";
import { isAuthenticated, getLoggedInUser } from "../services/auth";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";

// need to add this so fontawesome icons render correctly when SSR
// https://github.com/FortAwesome/react-fontawesome/issues/134
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </UserContext.Provider>
    </Provider>
  );
}

export default MyApp;
