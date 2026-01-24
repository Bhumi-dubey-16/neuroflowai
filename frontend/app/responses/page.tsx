"use client";

import { useState, useEffect } from "react";

interface ResponseType {
  id: number;
  transcript: string;
  feedback: string;
  confidence: number;
  date: string;
  tag?: string;
}

export default function ResponsesPage() {
  const [responses, setResponses] = useState<ResponseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/responses/list/")
      .then((res) => res.json())
      .then((data) => {
        setResponses(data.responses || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch responses:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen text-lg font-semibold text-gray-600 bg-[#FEFCFB]">
        Loading your responses…
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full bg-[#FEFCFB] font-sans">
      
      {/* Soft background gradient */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #EEF2FF 0%, #FEFCFB 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">

        {/* Header */}
        <header className="mb-12 rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Response Archive
          </span>

          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-700">
            My <span className="text-indigo-500">Responses</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-gray-600 leading-relaxed">
            A calm, readable record of your spoken answers and AI feedback —
            designed for reflection, not overload.
          </p>
        </header>

        {/* Responses */}
        <div className="space-y-8">
          {responses.length === 0 && (
            <p className="text-center text-gray-500">
              No responses found yet.
            </p>
          )}

          {responses.map((r) => (
            <div
              key={r.id}
              className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition hover:bg-gray-50"
            >
              {/* Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">
                  {r.tag || "Analysis"}
                </span>
                <p className="text-xs font-medium text-gray-500">
                  {r.date}
                </p>
              </div>

              {/* Transcript */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
                    Transcript
                  </h3>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-700 leading-snug">
                    {r.transcript}
                  </p>
                </div>

                {/* Feedback */}
                <div className="rounded-2xl bg-indigo-50 p-6 border border-indigo-100">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-2">
                    AI Feedback
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                    “{r.feedback}”
                  </p>
                </div>
              </div>

              {/* Confidence */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-4">
                <div className="h-3 w-32 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-700"
                    style={{ width: `${r.confidence}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {r.confidence}% confidence
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
