"use client"; // <--- INI OBATNYA

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-400 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Noor Aziz Lutfiyanto. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}