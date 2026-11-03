import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <About /> {/* Pastikan baris ini ada */}
        <FeaturedProjects />
      </div>
      <Footer />
    </main>
  );
}