// src/components/courses/HeroSection.tsx
"use client";

import { MessageCircle, PlayCircle, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { useState, useRef } from "react";

interface HeroSectionProps {
  banglaFont: string;
  onEnrollClick: () => void;
}

const HeroSection = ({ banglaFont, onEnrollClick }: HeroSectionProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Local video path (public folder e video rakhben)
  const videoPath = "/video/noor calligraphy video.mp4"; // 🔴 Apnar video file path
  const videoThumbnail = "/thumbnail.jpeg";

  const handlePlayVideo = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
      <Container>
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-3 rounded-full text-lg font-semibold mb-6 backdrop-blur-sm">
            <span style={{ fontFamily: banglaFont }}>
              🎨 অনলাইন ক্যালিগ্রাফি পেইন্টিং কোর্স
            </span>
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
            className="w-[60%] mx-auto text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            আরবি, বাংলা ও ইংরেজি ক্যালিগ্রাফিতে দক্ষ হয়ে উঠুন।
            <span className="text-red-400 font-semibold">
              {" "}
              পেশাদার প্রশিক্ষকের গাইডলাইন নিয়ে শুরু করুন আপনার শিল্পযাত্রা।
            </span>
          </p>

          {/* Video Section - Full Width */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              {showVideo ? (
                // Local Video Player
                <div className="relative aspect-video w-full bg-black">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted={false}
                  >
                    <source
                      className="w-full h-full"
                      src={videoPath}
                      type="video/mp4"
                    />
                    আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                  </video>

                  {/* Close Button */}
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full z-10"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              ) : (
                // Video Thumbnail with Play Button
                <div
                  className="relative aspect-video w-full cursor-pointer group"
                  onClick={handlePlayVideo}
                >
                  {/* Thumbnail Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${videoThumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4">
                        <PlayCircle className="h-20 w-20 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mx-auto" />
                      </div>
                      <p
                        style={{ fontFamily: banglaFont }}
                        className="text-white text-xl font-semibold"
                      >
                        কোর্স ইন্ট্রোডাকশন ভিডিও দেখুন
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp Consultation Button */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/8801886262501?text=হ্যালো!%20আমি%20কোর্স%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।",
                  "_blank"
                )
              }
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-500 text-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp-এ যোগাযোগ করুন
            </button>

            {/* Enroll Now Button */}
            <button
              onClick={onEnrollClick}
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-500 text-lg flex items-center justify-center gap-3"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              কোর্সে এনরোল করুন
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
