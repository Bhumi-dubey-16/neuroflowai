"use client";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] px-6 py-10 text-[#1F2933]">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          Submit Your Learning
        </h1>

        <p className="text-[#6B7280] mb-6">
          Type your explanation or record your voice.
        </p>

        <textarea
          placeholder="Type what you learned here..."
          className="w-full h-40 p-4 border border-[#E5E7EB] rounded-xl resize-none focus:outline-none"
        />

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-2 rounded-lg border border-[#E5E7EB]">
            🎤 Record Voice
          </button>

          <button
            className="px-6 py-2 rounded-lg bg-[#5B6EF5] text-white"
            onClick={() => alert("Submitted (UI only)")}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
