// src/app/(main)/courses/page.tsx
"use client";

import Image from "next/image";
import {
  Check,
  Star,
  Users,
  Clock,
  Award,
  PlayCircle,
  Calendar,
  Video,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Brush,
  Palette,
  BookOpen,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { useState, useEffect } from "react";

const CoursesPage = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const [visibleImages, setVisibleImages] = useState(8);
  const imagesPerLoad = 8;

  // স্টুডেন্ট কাজ গ্যালারি
  // ইমেজ ডেটা অ্যারে
  const allImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ২",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৩",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৪",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৫",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৬",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৭",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৮",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৯",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১০",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১১",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১২",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৩",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৪",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৫",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৬",
    },
  ];

  const handleSeeMore = () => {
    setVisibleImages((prev) => prev + imagesPerLoad);
  };

  const visibleImagesData = allImages.slice(0, visibleImages);
  const hasMoreImages = visibleImages < allImages.length;

  // Countdown Timer Effect
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

  const openYouTubeVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Demo videos
  const courseVideos = [
    {
      id: 1,
      title: "আরবি ক্যালিগ্রাফি সম্পূর্ণ পরিচিতি",
      duration: "25:30",
      thumbnail:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=800",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "বেসিক স্ট্রোক ও টেকনিক মাস্টারক্লাস",
      duration: "32:15",
      thumbnail:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "নাসখ স্টাইল কমপ্লিট টিউটোরিয়াল",
      duration: "28:45",
      thumbnail:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "সুলুস স্টাইল এডভান্সড টেকনিক",
      duration: "35:20",
      thumbnail:
        "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=800",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  // আপনার কম্পোনেন্টের ভিতরে Student Work Gallery সেকশনে এই কোডটি বসান:

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-red-500 transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
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
                onClick={() => openYouTubeVideo("dQw4w9WgXcQ")}
                style={{ fontFamily: banglaFont }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
              >
                ফ্রি ভিডিও দেখুন
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Countdown Section */}
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
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 md:p-8 border border-white/30 shadow-lg">
                    <div
                      className="text-4xl md:text-6xl font-black text-white mb-2"
                      id="countdown-days"
                    >
                      00
                    </div>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="text-lg md:text-xl font-semibold text-yellow-200"
                    >
                      দিন
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 md:p-8 border border-white/30 shadow-lg">
                    <div
                      className="text-4xl md:text-6xl font-black text-white mb-2"
                      id="countdown-hours"
                    >
                      00
                    </div>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="text-lg md:text-xl font-semibold text-yellow-200"
                    >
                      ঘন্টা
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 md:p-8 border border-white/30 shadow-lg">
                    <div
                      className="text-4xl md:text-6xl font-black text-white mb-2"
                      id="countdown-minutes"
                    >
                      00
                    </div>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="text-lg md:text-xl font-semibold text-yellow-200"
                    >
                      মিনিট
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-2xl p-6 md:p-8 border border-white/30 shadow-lg">
                    <div
                      className="text-4xl md:text-6xl font-black text-white mb-2"
                      id="countdown-seconds"
                    >
                      00
                    </div>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="text-lg md:text-xl font-semibold text-yellow-200"
                    >
                      সেকেন্ড
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between text-sm md:text-base text-red-100 mb-2">
                  <span style={{ fontFamily: banglaFont }}>
                    সিট ফিলিং ফাস্ট!
                  </span>
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

      {/* Video Preview Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              <span className="text-red-600">ডেমো ক্লাস</span> দেখুন
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              আমাদের কোর্সের কিছু ফ্রি ডেমো ক্লাস দেখে নিন। ক্লিক করলেই
              YouTube-এ ভিডিও চালু হবে।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={() => openYouTubeVideo(video.youtubeId)}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={800}
                    height={450}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2"
                  >
                    {video.title}
                  </h3>
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-600"
                  >
                    সম্পূর্ণ ফ্রি ডেমো ক্লাস - এখনই দেখুন
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Course Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
                <span>🎨 অনলাইন ক্যালিগ্রাফি পেইন্টিং কোর্স</span>
              </div>
              <h2
                style={{ fontFamily: banglaFont }}
                className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
              >
                <span className="text-red-600">২৫তম ব্যাচে</span> ভর্তি চলছে!
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Course Image & Highlights */}
              <div>
                {/* Course Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070"
                    alt="ক্যালিগ্রাফি পেইন্টিং কোর্স"
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <span style={{ fontFamily: banglaFont }}>পপুলার</span>
                  </div>
                </div>

                {/* Quick Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-red-100">
                    <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold text-gray-900 text-sm"
                    >
                      ৫ মাস
                    </h4>
                    <p
                      style={{ fontFamily: banglaFont }}
                      className="text-gray-600 text-xs"
                    >
                      মেয়াদ
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-blue-100">
                    <PlayCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold text-gray-900 text-sm"
                    >
                      ৪৫+ ক্লাস
                    </h4>
                    <p
                      style={{ fontFamily: banglaFont }}
                      className="text-gray-600 text-xs"
                    >
                      মোট ক্লাস
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-green-100">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold text-gray-900 text-sm"
                    >
                      সাপ্তাহে ২
                    </h4>
                    <p
                      style={{ fontFamily: banglaFont }}
                      className="text-gray-600 text-xs"
                    >
                      ক্লাস
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg border border-purple-100">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold text-gray-900 text-sm"
                    >
                      সার্টিফিকেট
                    </h4>
                    <p
                      style={{ fontFamily: banglaFont }}
                      className="text-gray-600 text-xs"
                    >
                      ই-সার্টিফিকেট
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Course Details */}
              <div className="space-y-8">
                {/* Course Details */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                  >
                    <BookOpen className="h-6 w-6 text-red-600" />
                    কোর্স বিস্তারিত
                  </h3>
                  <div
                    style={{ fontFamily: banglaFont }}
                    className="space-y-4 text-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>
                        মেয়াদ: <strong>৫ মাস</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>
                        মোট ক্লাস: <strong>৪৫+</strong> (কিছু টিউটোরিয়ালসহ)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>
                        সাপ্তাহিক ক্লাস: <strong>সপ্তাহে ২টি</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recorded Classes */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-blue-200">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                  >
                    <Video className="h-6 w-6 text-blue-600" />
                    ক্লাস মিস হলে চিন্তা নেই
                  </h3>
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-700 leading-relaxed"
                  >
                    প্রতিটি ক্লাসের রেকর্ডেড ভিডিও দেওয়া হবে। পরে দেখে নিজের মতো
                    করে ক্লাস সম্পূর্ণ করতে পারবেন।
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 shadow-2xl text-white">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold mb-6 flex items-center gap-3"
                  >
                    <MessageCircle className="h-6 w-6" />
                    কোর্স ফি
                  </h3>

                  {/* Regular Payment */}
                  <div className="mb-6">
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-semibold mb-3"
                    >
                      মোট ফি: ৪,৯৯৯/- টাকা
                    </h4>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="space-y-2 text-sm bg-red-400/20 rounded-lg p-4"
                    >
                      <div className="flex justify-between">
                        <span>প্রথম ধাপ:</span>
                        <span className="font-bold">২,০০০/- টাকা (অগ্রিম)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>দ্বিতীয় ধাপ:</span>
                        <span className="font-bold">১,৫০০/- টাকা</span>
                      </div>
                      <div className="flex justify-between">
                        <span>তৃতীয় ধাপ:</span>
                        <span className="font-bold">১,৫০০/- টাকা</span>
                      </div>
                    </div>
                  </div>

                  {/* Special Offer */}
                  <div className="bg-yellow-400 text-gray-900 rounded-xl p-4">
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold mb-2 flex items-center gap-2"
                    >
                      <Star className="h-5 w-5 fill-current" />
                      বিশেষ অফার (একবারে পরিশোধ করলে)
                    </h4>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="flex justify-between items-center"
                    >
                      <span>সর্বমোট ফি:</span>
                      <span className="text-xl font-bold">৪,৫০০/- টাকা</span>
                    </div>
                    <p
                      style={{ fontFamily: banglaFont }}
                      className="text-sm mt-1"
                    >
                      ৫০০/- টাকা ছাড়!
                    </p>
                  </div>
                </div>

                {/* Contact & Enrollment */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                  >
                    <Phone className="h-6 w-6 text-green-600" />
                    যোগাযোগ
                  </h3>
                  <div style={{ fontFamily: banglaFont }} className="space-y-4">
                    <p className="text-gray-700 text-lg font-semibold">
                      কল: ☎ ০১৬৮৮২৬২৫০১
                    </p>
                    <p className="text-gray-600 italic">
                      "ক্যালিগ্রাফির সৃজনশীল যাত্রা শুরু হোক এখান থেকেই!"
                    </p>

                    {/* WhatsApp Button */}
                    <button
                      onClick={() =>
                        window.open(
                          "https://wa.me/8801688262501?text=হ্যালো!%20আমি%20ক্যালিগ্রাফি%20পেইন্টিং%20কোর্সে%20ভর্তি%20হতে%20চাই।",
                          "_blank"
                        )
                      }
                      style={{ fontFamily: banglaFont }}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-green-500 text-lg flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="h-6 w-6" />
                      আজই ভর্তি হোন!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 backdrop-blur-sm border border-purple-300/30">
              <span>✨ ক্যালিগ্রাফি ও পেইন্টিং কোর্স মডিউল</span>
            </div>
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              সম্পূর্ণ{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                কোর্স কারিকুলাম
              </span>
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              বেসিক থেকে এডভান্সড পর্যন্ত সম্পূর্ণ গাইডলাইন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 - Font Learning */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-all duration-300">
                  <PenTool className="h-8 w-8 text-purple-300" />
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  ফন্ট শেখা
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <span className="text-purple-100">আরবি সুলুস ও উইসাম</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <span className="text-purple-100">ইংলিশ কার্সিভ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <span className="text-purple-100">
                    বাংলা ফ্রি হ্যান্ড ক্যালিগ্রাফি
                  </span>
                </li>
              </ul>
            </div>

            {/* Module 2 - Drawing & Composition */}
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/30 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300">
                  <Brush className="h-8 w-8 text-blue-300" />
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  ড্রয়িং ও কম্পোজিশন
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">
                    অক্ষর ও যুক্তাক্ষর ড্রয়িং
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">
                    বাক্য গঠন ও কম্পোজিশন টেকনিক
                  </span>
                </li>
              </ul>
            </div>

            {/* Module 3 - Canvas & Techniques */}
            <div className="bg-gradient-to-br from-green-900/50 to-green-700/30 rounded-2xl p-8 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-all duration-300">
                  <Palette className="h-8 w-8 text-green-300" />
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  ক্যানভাস ও টেকনিক
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <span className="text-green-100">
                    ক্যানভাস প্রস্তুত ও টেক্সচার
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <span className="text-green-100">স্টেন্সিল ব্যবহার</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <span className="text-green-100">
                    বড় ও ছোট লেখা লেখার টিপস
                  </span>
                </li>
              </ul>
            </div>

            {/* Module 4 - Color & Background */}
            <div className="bg-gradient-to-br from-orange-900/50 to-orange-700/30 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-xl group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg
                    className="h-8 w-8 text-orange-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  কালার ও ব্যাকগ্রাউন্ড
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <span className="text-orange-100">
                    ব্যাকগ্রাউন্ড ট্রিক্স ও কালার মিক্সিং
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <span className="text-orange-100">
                    কালার গ্রেডিয়েন্ট, ছায়া, থ্রিডি ইফেক্ট
                  </span>
                </li>
              </ul>
            </div>

            {/* Module 5 - Watercolor & Acrylic */}
            <div className="bg-gradient-to-br from-pink-900/50 to-pink-700/30 rounded-2xl p-8 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-pink-500/20 rounded-xl group-hover:bg-pink-500/30 transition-all duration-300">
                  <svg
                    className="h-8 w-8 text-pink-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  ওয়াটারকালার ও অ্যাক্রেলিক
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                  <span className="text-pink-100">
                    ওয়াটারকালার ও অ্যাক্রেলিক ক্যালিগ্রাফি
                  </span>
                </li>
              </ul>
            </div>

            {/* Module 6 - Professional Guidance */}
            <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-700/30 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-xl group-hover:bg-yellow-500/30 transition-all duration-300">
                  <Award className="h-8 w-8 text-yellow-300" />
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  প্রফেশনাল গাইডলাইন
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                  <span className="text-yellow-100">
                    ক্যালিগ্রাফি দিয়ে আর্নিং টিপস
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                  <span className="text-yellow-100">
                    কোর্স শেষে পরীক্ষা ও পুরস্কার
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                  <span className="text-yellow-100">
                    সার্টিফিকেট + লাইফটাইম সাপোর্ট
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/8801688262501?text=হ্যালো!%20আমি%20ক্যালিগ্রাফি%20কোর্সের%20মডিউল%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।",
                  "_blank"
                )
              }
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-purple-300 text-lg"
            >
              সম্পূর্ণ কারিকুলাম জানতে ক্লিক করুন
            </button>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              আমার <span className="text-red-600">শিক্ষার্থীদের</span> কাজ
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              আমাদের শিক্ষার্থীরা যে অসাধারণ কাজ তৈরি করছে তা দেখুন
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {visibleImagesData.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg
                        className="h-6 w-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {hasMoreImages && (
            <div className="text-center">
              <button
                onClick={handleSeeMore}
                style={{ fontFamily: banglaFont }}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-400 text-lg"
              >
                আরও কাজ দেখুন
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default CoursesPage;

// আপনার বর্তমান Course Page কম্পোনেন্টের শুরুতে useState ইম্পোর্ট করুন
// import { useState } from 'react';

// আপনার কম্পোনেন্টের ভিতরে Student Work Gallery সেকশনে এই কোডটি বসান:

const StudentWorkGallery = ({ banglaFont }: { banglaFont: string }) => {
  const [visibleImages, setVisibleImages] = useState(8);
  const imagesPerLoad = 8;

  // ইমেজ ডেটা অ্যারে
  const allImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ২",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৩",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৪",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৫",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৬",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৭",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৮",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ৯",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১০",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১১",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১২",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৩",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৪",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৫",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=500",
      alt: "শিক্ষার্থীর কাজ ১৬",
    },
  ];

  const handleSeeMore = () => {
    setVisibleImages((prev) => prev + imagesPerLoad);
  };

  const visibleImagesData = allImages.slice(0, visibleImages);
  const hasMoreImages = visibleImages < allImages.length;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: banglaFont }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            আমার <span className="text-red-600">শিক্ষার্থীদের</span> কাজ
          </h2>
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            আমাদের শিক্ষার্থীরা যে অসাধারণ কাজ তৈরি করছে তা দেখুন
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleImagesData.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <svg
                      className="h-6 w-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {hasMoreImages && (
          <div className="text-center">
            <button
              onClick={handleSeeMore}
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-400 text-lg"
            >
              আরও কাজ দেখুন
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};
