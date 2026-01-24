export default function SignupPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#F6F5F2' }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-soft border border-gray-200"
        style={{ backgroundColor: '#FAF9F6' }}
      >
        <h1 className="text-2xl font-bold text-[#374151] text-center mb-2">
          Create an account
        </h1>

        <p className="text-[#4B5563] text-center mb-6">
          Start learning with NeuroFlow AI
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
  )
}
