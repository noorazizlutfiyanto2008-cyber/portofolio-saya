export default function About() {
  const skills = [
    "Next.js", "React", "Tailwind CSS", "Node.js", 
    "Supabase", "JavaScript", "TypeScript", "Git"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks Perkenalan */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Tentang Saya</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Halo! Saya <span className="text-white font-semibold">Noor Aziz Lutfiyanto</span>. 
            Saya adalah seorang pengembang web dan pembuat bot yang berfokus pada pembuatan solusi digital yang efisien dan bermanfaat.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Saya sangat menyukai tantangan dalam memecahkan masalah menggunakan kode. Salah satu karya favorit saya adalah membuat bot WhatsApp untuk mengatur keuangan, yang membantu banyak orang mencatat pengeluaran dengan lebih mudah.
          </p>
          
          <div className="flex gap-4">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex-1 text-center">
              <h3 className="text-2xl font-bold text-blue-500 mb-1">1+</h3>
              <p className="text-slate-400 text-sm">Tahun Belajar</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex-1 text-center">
              <h3 className="text-2xl font-bold text-blue-500 mb-1">5+</h3>
              <p className="text-slate-400 text-sm">Teknologi Dikuasai</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Skills & Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 p-2 rounded-lg text-sm">💻</span>
              Keahlian Saya (Tech Stack)
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-slate-950 border border-slate-700 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-slate-400 text-sm italic">
                "Kode yang baik bukan hanya tentang bagaimana komputer memahaminya, tapi bagaimana manusia bisa merawatnya."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}