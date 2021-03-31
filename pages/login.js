import storage from "../libs/storage";
import { login } from "../services/auth";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuthentication(e) {
    e.preventDefault();

    try {
      const { token, error } = await login({
        email,
        password,
      });

      if (error) {
        console.log(error.message);
      } else {
        storage.set("AUTH_TOKEN", token);
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
        <button
          className="w-full bg-green text-white p-3 mt-7 font-semibold text-xl"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
