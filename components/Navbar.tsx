"use client"; // Wajib ditambahkan karena kita pakai state (useState)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-wider text-white">
              Portofolio<span className="text-blue-500">.</span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Halaman Utama</Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">Katalog Proyek</Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Hubungi</Link>
          </div>

          {/* Tombol Hubungi Desktop */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
              Hubungi Saya
            </Link>
          </div>

          {/* Tombol Hamburger (Khusus Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {/* Ikon Garis Tiga */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Halaman Utama</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Katalog Proyek</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Hubungi</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">Hubungi Saya</Link>
          </div>
        </div>
      )}
    </nav>
  );
}