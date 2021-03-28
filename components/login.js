export default function Login() {
  return (
    <div className="mx-auto mt-40 max-w-sm">
      <h1 className="text-5xl font-serif text-center">Teacher Lab</h1>
      <input
        type="text"
        placeholder="Email or Username"
        className="w-full p-4 bg-gray-100 mt-7"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-4 bg-gray-100 mt-4"
      />
      <button className="w-full bg-green text-white p-3 mt-7 font-semibold text-xl">
        Login
      </button>
    </div>
  )
}