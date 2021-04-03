import storage from "../libs/storage";
import UserContext from "../components/context/user-context";
import Button from "../components/common/button";
import { login } from "../services/auth";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  async function handleAuthentication(e) {
    e.preventDefault();

    try {
      const { token, error, user } = await login({
        email,
        password,
      });

      if (error) {
        console.log(error.message);
      } else {
        // set user for UserContext.Provider
        setUser(user);

        // persist token and user in localStorage
        storage.set("AUTH_TOKEN", token);
        storage.set("user", user);

        router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mx-auto mt-40 max-w-sm">
      <h1 className="text-5xl font-serif text-center">Teacher Lab</h1>
      <form onSubmit={handleAuthentication}>
        <input
          type="text"
          placeholder="Email or Username"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-4 bg-gray-100 mt-7"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-4 bg-gray-100 mt-4"
        />
        <Button
          text="Login"
          size="lg"
          classNames="mt-7"
          type="submit"
          full
        ></Button>
      </form>
    </div>
  );
}
