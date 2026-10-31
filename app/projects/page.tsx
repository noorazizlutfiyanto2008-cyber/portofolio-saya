import Navbar from "@/components/Navbar";
import Link from "next/link";

// Data dummy (nanti kita tambah lebih banyak)
const allProjects = [
  { id: 1, title: "Website E-Commerce", description: "Platform jual beli online dengan fitur keranjang belanja dan payment gateway.", tech: ["Next.js", "Tailwind", "Stripe"] },
  { id: 2, title: "Company Profile Startup", description: "Desain web responsif dan modern untuk perusahaan teknologi finansial.", tech: ["React", "Figma", "Framer Motion"] },
  { id: 3, title: "Aplikasi Manajemen Tugas", description: "Aplikasi produktivitas untuk melacak tugas harian dengan antarmuka bersih.", tech: ["Vue.js", "Firebase", "Tailwind"] },
  { id: 4, title: "Desain UI Aplikasi Kasir", description: "Merancang antarmuka aplikasi kasir untuk UMKM agar mudah digunakan.", tech: ["Figma", "UI/UX"] },
  { id: 5, title: "Sistem Informasi Sekolah", description: "Web untuk mengelola data siswa, guru, dan jadwal pelajaran.", tech: ["Laravel", "MySQL", "Bootstrap"] },
  { id: 6, title: "Landing Page Produk", description: "Halaman promosi produk digital dengan animasi yang interaktif.", tech: ["HTML", "CSS", "JavaScript"] },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header Halaman */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Katalog Proyek</h1>
          <p className="text-slate-400 text-lg">
            Kumpulan proyek dan karya yang pernah saya kerjakan. Mulai dari website, aplikasi, hingga desain antarmuka.
          </p>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group flex flex-col"
            >
              <div className="w-full h-48 bg-slate-800 rounded-lg mb-6 flex items-center justify-center text-slate-600">
                [Gambar Proyek]
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, index) => (
                  <span key={index} className="text-xs font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}