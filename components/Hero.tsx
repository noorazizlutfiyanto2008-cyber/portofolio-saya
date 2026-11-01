import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
      <span className="bg-slate-800 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-slate-700">
        👋 Selamat Datang di Portofolio Saya
      </span>
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white">
        Halo, saya <span className="text-blue-500">Noor Aziz Lutfiyanto</span>
        <br />
        Seorang Web Developer & Bot Creator
      </h1>
      <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
        Saya membantu bisnis dan individu menciptakan pengalaman digital yang menarik, 
        fungsional, dan berpusat pada pengguna. Spesialisasi saya adalah membangun web modern dan bot otomatis.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
          Lihat Karya Saya
        </Link>
        <Link href="/contact" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
          Hubungi Saya
        </Link>
      </div>
    </section>
  );
}