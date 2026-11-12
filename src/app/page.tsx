"use client";

import HeroSection from "@/components/Common/HeroSection";
import MainContent from "@/components/Common/main";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#141414] flex flex-col selection:bg-[#E7000C] selection:text-white">
      <HeroSection />
      <MainContent />
    </div>
  );
}
