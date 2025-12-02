// src/components/courses/CountdownSection.tsx
"use client";

import { useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

interface CountdownSectionProps {
  banglaFont: string;
}

const CountdownSection = ({ banglaFont }: CountdownSectionProps) => {
  useEffect(() => {
    const enrollmentDeadline = new Date("2025-12-10T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = enrollmentDeadline - now;

      if (distance < 0) {
        document.getElementById("countdown-days")!.textContent = "00";
        document.getElementById("countdown-hours")!.textContent = "00";
        document.getElementById("countdown-minutes")!.textContent = "00";
        document.getElementById("countdown-seconds")!.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown-days")!.textContent = days
        .toString()
        .padStart(2, "0");
      document.getElementById("countdown-hours")!.textContent = hours
        .toString()
        .padStart(2, "0");
      document.getElementById("countdown-minutes")!.textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("countdown-seconds")!.textContent = seconds
        .toString()
        .padStart(2, "0");
    };

    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-red-500 to-red-600 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              ⏳{" "}
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                ভর্তি শেষ হতে বাকি
              </span>
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl md:text-2xl text-red-100"
            >
              ২৫তম ব্যাচে সীমিত সংখ্যক সিট, দ্রুত এনরোল করুন!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 md:p-8 border border-white/30 shadow-lg">
                    <div
                      className="text-4xl md:text-6xl font-black text-white mb-2"
                      id={`countdown-${unit}`}
                    >
                      00
                    </div>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="text-lg md:text-xl font-semibold text-yellow-200"
                    >
                      {unit === "days" && "দিন"}
                      {unit === "hours" && "ঘন্টা"}
                      {unit === "minutes" && "মিনিট"}
                      {unit === "seconds" && "সেকেন্ড"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex justify-between text-sm md:text-base text-red-100 mb-2">
                <span style={{ fontFamily: banglaFont }}>সিট ফিলিং ফাস্ট!</span>
                <span style={{ fontFamily: banglaFont }}>৮০% বুকড</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/8801688262501?text=হ্যালো!%20আমি%20ক্যালিগ্রাফি%20কোর্সে%20এনরোল%20করতে%20চাই।%20দ্রুত%20সিট%20বুক%20করুন।",
                  "_blank"
                )
              }
              style={{ fontFamily: banglaFont }}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              এখনই সিট বুক করুন
            </button>
            <button
              style={{ fontFamily: banglaFont }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg flex items-center justify-center gap-3"
            >
              <Phone className="h-6 w-6" />
              কল করুন: ০১৬৮৮২৬২৫০১
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountdownSection;
