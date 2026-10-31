import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-wider text-white">
              Portofolio<span className="text-blue-500">.</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Halaman Utama</Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors">Katalog Proyek</Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Hubungi</Link>
          </div>
          <div>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}