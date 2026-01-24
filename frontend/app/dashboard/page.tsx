const responses = [
  { id: 1, confidence: 82, date: 'Monday, Jan 20', type: 'Focus Session' },
  { id: 2, confidence: 74, date: 'Wednesday, Jan 18', type: 'Analysis' },
  { id: 3, confidence: 90, date: 'Friday, Jan 15', type: 'Retention Test' },
]

const averageConfidence =
  responses.length > 0
    ? Math.round(
        responses.reduce((total, r) => total + r.confidence, 0) /
          responses.length,
      )
    : 0

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FEFCFB] font-sans">

      {/* --- SOFT BACKGROUND --- */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #FEFCFB 100%)',
        }}
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12">

        {/* Header */}
        <header className="mb-10 flex flex-col gap-4 rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Learning Insights
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-700">
            Performance <span className="text-indigo-500">Overview</span>
          </h1>

          <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
            A calm, distraction-free view of your learning progress.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Main Metric */}
          <section className="col-span-1 rounded-3xl border border-gray-100 bg-white p-10 shadow-sm md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Average Focus
            </h3>

            <div className="mt-6 flex items-end gap-4">
              <div className="text-6xl font-bold text-gray-700">
                {averageConfidence}%
              </div>
              <span className="mb-2 text-sm text-gray-500">
                Confidence Score
              </span>
            </div>

            <div className="mt-6 h-3 w-full rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-700"
                style={{ width: `${averageConfidence}%` }}
              />
            </div>
          </section>

          {/* Environment */}
          <section className="rounded-3xl border border-gray-100 bg-indigo-50 p-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Environment
            </p>

            <div className="mt-8 space-y-6">
              {[
                { label: 'Mode', status: 'Deep Focus' },
                { label: 'Light', status: 'Soft' },
                { label: 'Focus', status: 'High' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-xs text-gray-500">{item.label}</span>
                  <span className="text-lg font-semibold text-gray-700">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Logs */}
          <section className="col-span-1 rounded-3xl border border-gray-100 bg-white p-10 shadow-sm md:col-span-3">
            <h2 className="mb-8 text-2xl font-bold text-gray-700">
              Activity Log
            </h2>

            <div className="space-y-4">
              {responses.map((r) => (
                <div
                  key={r.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-gray-100 p-6 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white font-semibold">
                      {r.confidence}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        {r.type}
                      </p>
                      <p className="text-sm text-gray-500">
                        {r.date}
                      </p>
                    </div>
                  </div>

                  <button className="rounded-lg border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-500 hover:bg-indigo-50 transition">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
