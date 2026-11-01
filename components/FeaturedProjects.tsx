import Link from "next/link";

const projects = [
  { 
    id: 1, 
    title: "Website E-Commerce", 
    description: "Platform jual beli online dengan fitur keranjang belanja dan payment gateway.", 
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Company Profile Startup", 
    description: "Desain web responsif dan modern untuk perusahaan teknologi finansial.", 
    tech: ["React", "Figma", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "Aplikasi Manajemen Tugas", 
    description: "Aplikasi produktivitas untuk melacak tugas harian dengan antarmuka bersih.", 
    tech: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">Sorotan Proyek</h2>
          <p className="text-slate-400">Beberapa karya terbaik yang pernah saya buat.</p>
        </div>
        <Link href="/projects" className="hidden sm:block text-blue-500 hover:text-blue-400 font-medium group">
          Lihat Semua <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col"
          >
            {/* Gambar Proyek */}
            <div className="w-full h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, index) => (
                  <span key={index} className="text-xs font-medium bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center sm:hidden">
        <Link href="/projects" className="text-blue-500 hover:text-blue-400 font-medium">
          Lihat Semua Proyek &rarr;
        </Link>
      </div>
    </section>
  );
}