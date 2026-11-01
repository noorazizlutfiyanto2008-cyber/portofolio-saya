import Navbar from "@/components/Navbar";
import Link from "next/link";

const allProjects = [
  { id: 1, title: "WhatsApp Automation Bot", description: "Bot WhatsApp cerdas untuk membalas pesan otomatis, dibuat menggunakan Node.js dan berjalan 24/7 di cloud (Render).", tech: ["Node.js", "WhatsApp API", "Render"], image: "https://picsum.photos/seed/botwa/600/400" },
  { id: 2, title: "Company Profile Startup", description: "Desain web responsif dan modern untuk perusahaan teknologi finansial.", tech: ["React", "Figma", "Framer Motion"], image: "https://picsum.photos/seed/kantor/600/400" },
  { id: 3, title: "Aplikasi Manajemen Tugas", description: "Aplikasi produktivitas untuk melacak tugas harian dengan antarmuka bersih.", tech: ["Vue.js", "Firebase", "Tailwind"], image: "https://picsum.photos/seed/aplikasi/600/400" },
  { id: 4, title: "Desain UI Aplikasi Kasir", description: "Merancang antarmuka aplikasi kasir untuk UMKM agar mudah digunakan.", tech: ["Figma", "UI/UX"], image: "https://picsum.photos/seed/kasir/600/400" },
  { id: 5, title: "Sistem Informasi Sekolah", description: "Web untuk mengelola data siswa, guru, dan jadwal pelajaran.", tech: ["Laravel", "MySQL", "Bootstrap"], image: "https://picsum.photos/seed/sekolah/600/400" },
  { id: 6, title: "Landing Page Produk", description: "Halaman promosi produk digital dengan animasi yang interaktif.", tech: ["HTML", "CSS", "JavaScript"], image: "https://picsum.photos/seed/landing/600/400" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Katalog Proyek</h1>
          <p className="text-slate-400 text-lg">
            Kumpulan proyek dan karya yang pernah saya kerjakan. Mulai dari website, aplikasi, hingga desain antarmuka.
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
        </div>
      </section>
    </main>
  );
}