// src/components/courses/HeroSection.tsx
"use client";

import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";

interface HeroSectionProps {
  banglaFont: string;
  onWatchVideo: (videoId: string) => void;
}

const HeroSection = ({ banglaFont, onWatchVideo }: HeroSectionProps) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-3 rounded-full text-lg font-semibold mb-6 backdrop-blur-sm">
            <span>🎨 অনলাইন ক্যালিগ্রাফি পেইন্টিং কোর্স</span>
          </div>

          <h1
            style={{ fontFamily: banglaFont }}
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              শিল্পের ভাষা
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              শিখুন সহজে
            </span>
          </h1>

          <p
            style={{ fontFamily: banglaFont }}
            className="w-[80%] mx-auto text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            আরবি, বাংলা ও ইংরেজি ক্যালিগ্রাফিতে দক্ষ হয়ে উঠুন।
            <span className="text-red-400 font-semibold">
              {" "}
              পেশাদার প্রশিক্ষকদের গাইডলাইন নিয়ে শুরু করুন আপনার শিল্পযাত্রা।
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/8801688262501?text=হ্যালো!%20আমি%20কোর্স%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।",
                  "_blank"
                )
              }
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-500 text-lg"
            >
              WhatsApp-এ কনসাল্টেশন
            </button>
            <button
              onClick={() => onWatchVideo("dQw4w9WgXcQ")}
              style={{ fontFamily: banglaFont }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
            >
              ফ্রি ভিডিও দেখুন
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
