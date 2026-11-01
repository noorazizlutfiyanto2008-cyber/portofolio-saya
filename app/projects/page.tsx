"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const allProjects = [
  { 
    id: 1, 
    title: "WhatsApp Finance Bot", 
    description: "Bot WhatsApp cerdas untuk mencatat pengeluaran, pemasukan, dan mengatur keuangan pribadi secara otomatis. Dibuat menggunakan Node.js dan berjalan 24/7 di cloud (Render).", 
    tech: ["Node.js", "WhatsApp API", "Render"], 
    images: [
      "https://i.imgur.com/0t4cp5O.jpg", 
      "https://i.imgur.com/GLlaEVZ.jpg", 
      "https://i.imgur.com/PuUCPcL.jpg", 
      "https://i.imgur.com/gRgweSh.jpg"  
    ]
  },
];

export default function ProjectsPage() {
  // State untuk Modal Galeri
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
    <main className="min-h-screen bg-slate-950 relative">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Katalog Proyek</h1>
          <p className="text-slate-400 text-lg">
            Kumpulan proyek dan karya yang pernah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Render Proyek Asli */}
          {allProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)} // <--- Ini yang bikin bisa diklik
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="w-full h-48 overflow-hidden relative bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg text-sm">Lihat Galeri</span>
                </div>
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

          {/* Kotak Coming Soon */}
          <div className="border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center opacity-70 hover:opacity-100 transition-opacity min-h-[300px]">
            <span className="text-5xl mb-4">🚧</span>
            <h3 className="text-xl font-bold text-slate-300 mb-2">Proyek Selanjutnya</h3>
            <p className="text-slate-500 text-sm">Sedang dalam proses pembuatan. Nantikan karya terbaru saya!</p>
          </div>

        </div>
      </section>

      {/* ================= MODAL / POPUP GALLERY ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Tombol Close */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Gambar Utama */}
            <div className="w-full h-[50vh] md:h-[60vh] bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeImage} alt="Gallery" className="w-full h-full object-contain" />
            </div>

            {/* Thumbnail Gambar */}
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

    </main>
  );
}