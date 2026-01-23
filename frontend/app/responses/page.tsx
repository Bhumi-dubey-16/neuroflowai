const responses = [
  {
    id: 1,
    transcript: "Explained Newton’s First Law",
    feedback: "Good understanding, try adding examples.",
    confidence: 82,
    date: "20 Jan 2026",
    tag: "Physics"
  },
  {
    id: 2,
    transcript: "Photosynthesis process explanation",
    feedback: "Clear explanation, well structured.",
    confidence: 90,
    date: "18 Jan 2026",
    tag: "Biology"
  },
];

export default function ResponsesPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#E5E7EB] font-sans selection:bg-stone-200">
      
      {/* --- BACKGROUND EFFECTS (Matching Previous Page) --- */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, #d4d4d8 0%, #e7e5e4 100%)`,
        }}
      />
      
      {/* Moving Background Orbs */}
      <div className="fixed inset-0 z-0 opacity-50">
        <div className="absolute top-[-5%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#94a3b8] blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#a8a29e] blur-[130px]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
        
        {/* Header Section */}
        <header className="mb-12 flex flex-col gap-4 rounded-[2.5rem] border border-white/40 bg-white/20 p-10 backdrop-blur-3xl shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#57534e]">
              Archive v2.0
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-[#1e293b]">
            My <span className="text-[#78716c]">Responses</span>
          </h1>
          <p className="max-w-xl text-lg font-bold text-[#475569] leading-relaxed">
            A secure record of your AI-evaluated transcripts and feedback cycles. 
            Optimized for cognitive recall and visual ease.
          </p>
        </header>

        {/* Responses Feed */}
        <div className="space-y-8">
          {responses.map((r) => (
            <div
              key={r.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-10 backdrop-blur-2xl transition-all duration-500 hover:bg-white/60 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Subtle Decorative Accent */}
              <div className="absolute top-0 right-0 p-8">
                <div className="h-1.5 w-12 rounded-full bg-[#57534e]/20" />
              </div>

              <div className="flex flex-col gap-6">
                {/* Meta Data Row */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#57534e] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                    {r.tag || "Analysis"}
                  </span>
                  <p className="text-xs font-black text-[#78716c] uppercase tracking-widest">
                    {r.date}
                  </p>
                </div>

                {/* Main Content Sections */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#57534e] mb-1">
                      Transcript
                    </h3>
                    <p className="text-2xl font-black text-[#1e293b] leading-tight">
                      {r.transcript}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-stone-100/50 p-6 border border-white/40">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#57534e] mb-2">
                      AI Feedback
                    </h3>
                    <p className="text-[15px] font-bold text-[#475569] leading-relaxed italic">
                      "{r.feedback}"
                    </p>
                  </div>
                </div>

                {/* Footer / Confidence Metric */}
                <div className="flex items-center justify-between pt-4 border-t border-[#57534e]/10">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-32 rounded-full bg-slate-200 overflow-hidden border border-white/50">
                      <div 
                        className="h-full bg-[#57534e] shadow-[0_0_10px_rgba(87,83,78,0.3)]" 
                        style={{ width: `${r.confidence}%` }} 
                      />
                    </div>
                    <span className="text-sm font-black text-[#1e293b]">
                      {r.confidence}% Confidence
                    </span>
                  </div>
                  
                  <button className="text-[11px] font-black uppercase tracking-widest text-[#57534e] hover:text-[#1e293b] transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}