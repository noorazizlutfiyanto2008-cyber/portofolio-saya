"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetch = async () => {
      // 1. Cek apakah admin sudah login
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Kalau belum login, tendang balik ke halaman login
        router.push("/admin/login"); 
        return;
      }

      // 2. Ambil data pesan dari tabel 'message'
      const { data, error } = await supabase
        .from("message")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setMessages(data);
      setLoading(false);
    };

    checkUserAndFetch();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        <p className="animate-pulse">Memuat data pesan...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Kotak Masuk</h1>
            <p className="text-slate-400 mt-1">Daftar pesan dari pengunjung website.</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-slate-300">
            <thead className="bg-slate-800 text-slate-400 text-sm uppercase">
              <tr>
                <th className="p-4 font-semibold">Tanggal</th>
                <th className="p-4 font-semibold">Nama</th>
                <th className="p-4 font-semibold">Email</th>
                <th className="p-4 font-semibold">Pesan</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    Belum ada pesan yang masuk ke database.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-sm whitespace-nowrap">
                      {new Date(msg.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="p-4 font-semibold text-white">{msg.name}</td>
                    <td className="p-4 text-sm text-blue-400">{msg.email}</td>
                    <td className="p-4 text-sm">{msg.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}