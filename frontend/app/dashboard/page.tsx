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
    <main className="relative min-h-screen w-full overflow-hidden bg-[#E5E7EB] font-sans">
      
      {/* --- BACKGROUND EFFECTS SECTION --- */}
      {/* Effect 1: The Base Gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, #d4d4d8 0%, #e7e5e4 100%)`,
        }}
      />
      
      {/* Effect 2: High-Visibility Mesh Orbs (The "High-End" Glow) */}
      <div className="fixed inset-0 z-0 opacity-60">
        <div className="absolute top-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#94a3b8] blur-[120px] animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#a8a29e] blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-[#cbd5e1] blur-[80px]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12">
        
        {/* Header: Deep Graphite (#334155) & Smoked Sand (#57534e) */}
        <header className="mb-10 flex flex-col gap-4 rounded-[2.5rem] border border-white/40 bg-white/30 p-10 backdrop-blur-3xl shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#57534e]">
              <span className="h-2 w-2 animate-ping rounded-full bg-white" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#57534e]">
              Neural Analytics v4.0
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-[#1e293b]">
            Performance <span className="text-[#78716c]">Metrics</span>
          </h1>
          <p className="max-w-xl text-lg font-bold text-[#475569] leading-relaxed">
            A high-fidelity view of your progress, rendered with zero-harshness 
            tonality for focused cognitive processing.
          </p>
        </header>

        {/* Bento Grid: Glass Effect highlighted with Borders */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Main Display: Uses a heavier glass reflection */}
          <section className="relative col-span-1 overflow-hidden rounded-[3rem] border border-white/60 bg-gradient-to-br from-white/40 to-white/10 p-10 backdrop-blur-2xl shadow-xl md:col-span-2">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#57534e]">Cognitive Load</h3>
                <p className="mt-2 text-3xl font-black text-[#1e293b]">Efficient Flow</p>
              </div>
              <div className="mt-12 flex items-end gap-4">
                <div className="text-6xl font-black text-[#1e293b]">{averageConfidence}%</div>
                <div className="mb-2 text-sm font-bold text-[#78716c]">Average Accuracy</div>
              </div>
              {/* Visual Effect: The "Glass Shine" bar */}
              <div className="mt-6 h-3 w-full rounded-full bg-slate-400/20 overflow-hidden">
                <div 
                  className="h-full bg-[#57534e] shadow-[0_0_20px_rgba(87,83,78,0.5)] transition-all duration-1000" 
                  style={{ width: `${averageConfidence}%` }} 
                />
              </div>
            </div>
          </section>

          {/* Side Status: Dark Beige Theme */}
          <section className="rounded-[3rem] border border-[#a8a29e]/30 bg-[#57534e] p-10 shadow-2xl">
            <p className="text-[10px] font-black uppercase tracking-widest text-stone-300">Environment</p>
            <div className="mt-8 space-y-6">
              {[
                { label: 'Audio', status: 'Muted' },
                { label: 'Light', status: 'Soft' },
                { label: 'Focus', status: 'High' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-white/10 pb-2">
                  <span className="text-[10px] font-bold text-stone-400">{item.label}</span>
                  <span className="text-xl font-black text-white">{item.status}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Activity Logs: Row Hover Effects */}
          <section className="col-span-1 rounded-[3rem] border border-white/50 bg-white/20 p-10 backdrop-blur-xl shadow-2xl md:col-span-3">
            <h2 className="mb-8 text-2xl font-black text-[#1e293b]">Log History</h2>
            <div className="space-y-3">
              {responses.map((r) => (
                <div 
                  key={r.id} 
                  className="group flex flex-col justify-between gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 transition-all hover:bg-white/40 hover:scale-[1.01] hover:shadow-lg sm:flex-row sm:items-center"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#57534e] text-white shadow-lg font-black">
                      {r.confidence}
                    </div>
                    <div>
                      <p className="text-lg font-black text-[#1e293b]">{r.type}</p>
                      <p className="text-sm font-bold text-[#78716c]">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-white/40 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-[#1e293b]">Verified</span>
                    <button className="rounded-xl bg-[#57534e] px-6 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#334155]">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}