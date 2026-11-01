import Navbar from "@/components/Navbar";
import Link from "next/link";

const allProjects = [
  { 
    id: 1, 
    title: "WhatsApp Finance Bot", 
    description: "Bot WhatsApp cerdas untuk mencatat pengeluaran, pemasukan, dan mengatur keuangan pribadi secara otomatis. Dibuat menggunakan Node.js dan berjalan 24/7 di cloud (Render).", 
    tech: ["Node.js", "WhatsApp API", "Render"], 
    image: "https://i.imgur.com/0t4cp5O.jpg" // Cukup pakai gambar pertama sebagai cover
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Katalog Proyek</h1>
          <p className="text-slate-400 text-lg">
            Kumpulan proyek dan karya yang pernah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {allProjects.map((project) => (
            <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col">
              <div className="w-full h-48 overflow-hidden relative bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center opacity-70 hover:opacity-100 transition-opacity min-h-[300px]">
            <span className="text-5xl mb-4">🚧</span>
            <h3 className="text-xl font-bold text-slate-300 mb-2">Proyek Selanjutnya</h3>
            <p className="text-slate-500 text-sm">Sedang dalam proses pembuatan. Nantikan karya terbaru saya!</p>
          </div>

        </div>
      </section>
    </main>
  );
}