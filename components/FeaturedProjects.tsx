"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  { 
    id: 1, 
    title: "WhatsApp Finance Bot", 
    description: "Bot WhatsApp cerdas untuk mencatat pengeluaran, pemasukan, dan mengatur keuangan pribadi secara otomatis. Dibuat menggunakan Node.js dan berjalan 24/7 di cloud (Render).", 
    tech: ["Node.js", "WhatsApp API", "Render"],
    // 4 GAMBAR ASLI DARI IMGUR SUDAH DIMASUKKAN DI SINI
    images: [
      "https://i.imgur.com/0t4cp5O.jpg", // Gambar Cover (Tampil di depan)
      "https://i.imgur.com/GLlaEVZ.jpg", // Gambar 2
      "https://i.imgur.com/PuUCPcL.jpg", // Gambar 3
      "https://i.imgur.com/gRgweSh.jpg"  // Gambar 4
    ]
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  const openModal = (project: any) => {
    setSelectedProject(project);
    setActiveImage(project.images[0]);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImage("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
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
          <div 
            key={project.id} 
            onClick={() => openModal(project)}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col md:flex-row cursor-pointer"
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative bg-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg">Lihat Gambar Lainnya</span>
              </div>
            </div>
            
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

      {/* MODAL / POPUP GALLERY */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="w-full h-[50vh] md:h-[60vh] bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeImage} alt="Gallery" className="w-full h-full object-contain" />
            </div>

            <div className="p-4 bg-slate-900 flex gap-4 overflow-x-auto">
              {selectedProject.images.map((img: string, idx: number) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${activeImage === img ? 'border-blue-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}