"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchMessages();
  }, [router]);

  const fetchMessages = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push("/admin/login");
      return;
    }

    const { data } = await supabase
      .from("message")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus pesan ini?")) return;
    const { error } = await supabase.from("message").delete().eq("id", id);
    if (!error) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  const toggleRead = async (id: number, currentStatus: boolean) => {
    const { error } = await supabase
      .from("message")
      .update({ is_read: !currentStatus })
      .eq("id", id);
      
    if (!error) {
      setMessages(messages.map((msg) => 
        msg.id === id ? { ...msg, is_read: !currentStatus } : msg
      ));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        <p className="animate-pulse text-lg">Memuat data pesan...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Kotak Masuk</h1>
            <div className="flex gap-4 mt-2">
              <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4">
                &larr; Kembali ke Web Utama
              </Link>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="bg-red-600/10 border border-red-600/50 hover:bg-red-600 hover:text-white text-red-500 px-6 py-2 rounded-lg font-medium transition-all"
          >
            Logout
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left text-slate-300">
            <thead className="bg-slate-800/50 text-slate-400 text-sm uppercase tracking-wider">
              <tr>
                <th className="p-4 font-semibold w-12 text-center">Status</th>
                <th className="p-4 font-semibold">Pengirim</th>
                <th className="p-4 font-semibold">Pesan</th>
                <th className="p-4 font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-slate-500">
                    <div className="text-4xl mb-4">📭</div>
                    Belum ada pesan yang masuk.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    className={`border-t border-slate-800 transition-colors ${msg.is_read ? 'bg-slate-900/50 opacity-75' : 'bg-slate-800/20 hover:bg-slate-800/40'}`}
                  >
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => toggleRead(msg.id, msg.is_read)}
                        className={`w-3 h-3 rounded-full transition-colors ${msg.is_read ? 'bg-slate-600' : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]'}`}
                        title={msg.is_read ? "Tandai Belum Dibaca" : "Tandai Sudah Dibaca"}
                      ></button>
                    </td>
                    <td className="p-4">
                      <div className={`font-semibold ${msg.is_read ? 'text-slate-400' : 'text-white'}`}>{msg.name}</div>
                      <a href={`mailto:${msg.email}`} className="text-xs text-blue-400 hover:underline">{msg.email}</a>
                    </td>
                    <td className="p-4">
                      <p className={`text-sm ${msg.is_read ? 'text-slate-500' : 'text-slate-300'}`}>{msg.message}</p>
                      <span className="text-[10px] text-slate-500 mt-2 block">
                        {new Date(msg.created_at).toLocaleString('id-ID')}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDelete(msg.id)}
                        className="text-slate-500 hover:text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
                        title="Hapus Pesan"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
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