import Link from "next/link";

const projects = [
  { 
    id: 1, 
    title: "WhatsApp Finance Bot", 
    description: "Bot WhatsApp cerdas untuk mencatat pengeluaran, pemasukan, dan mengatur keuangan pribadi secara otomatis. Dibuat menggunakan Node.js dan berjalan 24/7 di cloud (Render) agar selalu siap menerima pesan.", 
    tech: ["Node.js", "WhatsApp API", "Render"],
    image: "https://picsum.photos/seed/finance/800/400" 
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">Sorotan Proyek</h2>
          <p className="text-slate-400">Karya terbaik yang pernah saya buat.</p>
        </div>
        <Link href="/projects" className="hidden sm:block text-blue-500 hover:text-blue-400 font-medium group">
          Lihat Detail <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col md:flex-row">
            
            {/* Bagian Gambar (Kiri) */}
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative bg-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Bagian Teks (Kanan) */}
            <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, index) => (
                  <span key={index} className="text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-md">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <Link href="/projects" className="text-blue-500 hover:text-blue-400 font-medium">
          Lihat Detail Proyek &rarr;
        </Link>
      </div>
    </section>
  );
}