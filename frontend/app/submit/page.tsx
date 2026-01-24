"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [transcript, setTranscript] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/responses/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript }),
      });

      const data = await res.json();
      console.log("SUBMIT RESPONSE:", data);
      alert("Submitted successfully!");
      setTranscript("");
    } catch (err) {
      console.error("FETCH ERROR:", err);
      alert("Submit failed — check console");
    }
  };

  return (
    <main className="min-h-screen bg-[#FEFCFB] px-6 py-14 font-sans">
      <div className="mx-auto max-w-xl">

        {/* Header */}
        <header className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500 mb-2">
            Reflection
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
            Submit Your Learning
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
            Explain what you understood in your own words.  
            No pressure — clarity over perfection.
          </p>
        </header>

        {/* Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">

          {/* Textarea */}
          <div className="mb-6">
            <label
              htmlFor="transcript"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your explanation
            </label>

            <textarea
              id="transcript"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Type what you learned here…"
              className="
                w-full h-44 resize-none rounded-2xl border border-gray-300 
                px-4 py-3 text-base text-gray-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:border-indigo-500 transition
              "
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Your response will be evaluated by AI
            </p>

            <button
              onClick={handleSubmit}
              disabled={!transcript.trim()}
              className="
                w-full sm:w-auto px-8 py-3 rounded-xl
                bg-indigo-500 text-white font-semibold
                hover:bg-indigo-600 transition-colors
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Submit Response
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
