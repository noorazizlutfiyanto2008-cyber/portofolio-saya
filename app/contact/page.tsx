"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const { error } = await supabase
      .from("message")
      .insert([{ name: name, email: email, message: message }]);

    if (error) {
      console.error(error);
      setError("Gagal mengirim pesan. Silakan coba lagi.");
    } else {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }
    
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Hubungi Saya</h1>
          <p className="text-slate-400 text-lg">
            Punya proyek menarik atau ingin berkolaborasi? Silakan isi form di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kolom Kiri: Info Kontak */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Informasi Kontak</h3>
              <p className="text-slate-400 mb-2">Silakan hubungi saya melalui:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✉️</span> 
                  <a href="mailto:noorazizlutfiyanto2008@gmail.com" className="hover:text-blue-400 transition-colors">
                    noorazizlutfiyanto2008@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">📱</span> 
                  {/* WA SUDAH DIUBAH KE FORMAT 62 */}
                  <a href="https://wa.me/62882020821793" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                    +62 882-0208-21793
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">📍</span> Indonesia
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Media Sosial</h3>
              <div className="flex gap-4">
                <a href="#" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-all border border-slate-700">LinkedIn</a>
                <a href="https://github.com/noorazizlutfiyanto2008-cyber" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-all border border-slate-700">GitHub</a>
                {/* LINK IG SUDAH DIMASUKKAN */}
                <a href="https://www.instagram.com/azzltfy" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-all border border-slate-700">Instagram</a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {success && (
                <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-sm">
                  Pesan berhasil dikirim! Terima kasih sudah menghubungi.
                </div>
              )}
              {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Masukkan nama kamu"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tulis pesanmu di sini..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full font-bold py-3 px-4 rounded-lg transition-all text-white ${loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}