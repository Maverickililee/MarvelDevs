import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BotBot from "@/components/BotBot";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <BotBot />
      <Integrations />
      <Footer />
    </main>
  );
}
