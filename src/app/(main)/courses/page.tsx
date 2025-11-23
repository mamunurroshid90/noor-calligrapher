// src/app/(main)/courses/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import Container from "@/components/ui/Container";
import { useState, useEffect } from "react";

// Types
interface Course {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  duration: string;
  level: string;
}

interface CourseVideo {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
}

// Countdown Timer Component
const CountdownTimer = ({ targetDate }: { targetDate: string | Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 mb-4 border border-red-200">
      <h4
        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        className="font-semibold text-gray-900 mb-4 flex items-center gap-2"
      >
        <Clock className="h-5 w-5 text-red-500" />
        এনরোলমেন্ট শেষ হতে বাকি
      </h4>

      <div className="grid grid-cols-3 gap-3 text-sm">
        <div className="text-center bg-white rounded-lg p-3 border border-red-200 shadow-sm">
          <div className="text-2xl font-black text-red-600 mb-1">
            {timeLeft.days}
          </div>
          <div
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-gray-600 text-xs"
          >
            দিন
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-3 border border-red-200 shadow-sm">
          <div className="text-2xl font-black text-red-600 mb-1">
            {timeLeft.hours}
          </div>
          <div
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-gray-600 text-xs"
          >
            ঘন্টা
          </div>
        </div>

        <div className="text-center bg-white rounded-lg p-3 border border-red-200 shadow-sm">
          <div className="text-2xl font-black text-red-600 mb-1">
            {timeLeft.minutes}
          </div>
          <div
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-gray-600 text-xs"
          >
            মিনিট
          </div>
        </div>
      </div>
    </div>
  );
};

// WhatsApp Enrollment Button Component
const WhatsAppEnrollButton = ({
  courseTitle,
  coursePrice,
}: {
  courseTitle: string;
  coursePrice: number;
}) => {
  const handleWhatsAppEnroll = () => {
    const message = `হ্যালো! আমি "${courseTitle}" কোর্সে এনরোল করতে চাই। কোর্স ফি: ৳${coursePrice}। দয়া করে আমাকে এনরোলমেন্ট প্রসেস সম্পর্কে জানান।`;
    const whatsappUrl = `https://wa.me/8801761700244?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppEnroll}
      style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-green-500 flex items-center justify-center gap-2"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp-এ এনরোল করুন
    </button>
  );
};

const CoursesPage = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // Enrollment deadline - 7 days from now
  const enrollmentDeadline = new Date();
  enrollmentDeadline.setDate(enrollmentDeadline.getDate() + 7);

  // Demo videos (static - apni chaile admin panel e add korte paren)
  const courseVideos: CourseVideo[] = [
    {
      id: 1,
      title: "আরবি ক্যালিগ্রাফি পরিচিতি",
      duration: "15:30",
      thumbnail:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=500",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "বেসিক স্ট্রোক ও টেকনিক",
      duration: "22:15",
      thumbnail:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "নাসখ স্টাইল টিউটোরিয়াল",
      duration: "18:45",
      thumbnail:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "সুলুস স্টাইল বেসিক",
      duration: "25:20",
      thumbnail:
        "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=500",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  // Load courses from JSON
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch("/data/content.json");
        const data = await response.json();
        setCourses(data.courses || []);
      } catch (error) {
        console.error("Error loading courses:", error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const features = [
    {
      icon: Users,
      title: "ব্যক্তিগত মনোযোগ",
      description: "ছোট ব্যাচে শিক্ষার্থীদের ব্যক্তিগত মনোযোগ",
    },
    {
      icon: Clock,
      title: "লাইফটাইম এক্সেস",
      description: "কোর্স সম্পূর্ণ করার পরও লাইফটাইম এক্সেস",
    },
    {
      icon: Award,
      title: "সার্টিফিকেট",
      description: "কোর্স শেষে প্রফেশনাল সার্টিফিকেট",
    },
    {
      icon: PlayCircle,
      title: "লাইভ ক্লাস",
      description: "সাপ্তাহিক লাইভ ইন্টারেক্টিভ ক্লাস",
    },
  ];

  const openYouTubeVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Demo data for courses (fallback)
  const demoCourses: Course[] = [
    {
      id: 1,
      title: "আরবি ক্যালিগ্রাফি বেসিক কোর্স",
      description:
        "আরবি ক্যালিগ্রাফির বুনিয়াদি নীতিমালা শেখার জন্য সম্পূর্ণ গাইড। নাসখ, সুলুস ও রুক'আহ স্টাইল শিখুন।",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070",
      duration: "৮ সপ্তাহ",
      level: "Beginner",
    },
  ];

  const displayCourses = courses.length > 0 ? courses : demoCourses;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p style={{ fontFamily: banglaFont }} className="text-gray-600">
            লোড হচ্ছে...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
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
              <span>🎨 প্রিমিয়াম ক্যালিগ্রাফি কোর্স</span>
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
                    "https://wa.me/8801761700244?text=হ্যালো!%20আমি%20কোর্স%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।",
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

      {/* Video Preview Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              <span className="text-red-600">ফ্রি ভিডিও</span> দেখুন
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              আমাদের কোর্সের কিছু ফ্রি ভিডিও দেখে নিন। ক্লিক করলেই YouTube-এ
              ভিডিও চালু হবে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={() => openYouTubeVideo(video.youtubeId)}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300"
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              কেন আমাদের কোর্সে{" "}
              <span className="text-red-600">জয়েন করবেন?</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <feature.icon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-xl font-bold text-gray-900 mb-2"
                >
                  {feature.title}
                </h3>
                <p style={{ fontFamily: banglaFont }} className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Courses Grid Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              আমাদের <span className="text-red-600">কোর্সসমূহ</span>
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              আপনার দক্ষতা এবং আগ্রহ অনুযায়ী সেরা কোর্স নির্বাচন করুন
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {displayCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <span style={{ fontFamily: banglaFont }}>পপুলার</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Course Title */}
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-600 mb-4 leading-relaxed"
                  >
                    {course.description}
                  </p>

                  {/* Course Duration & Level */}
                  <div className="flex items-center justify-between text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span style={{ fontFamily: banglaFont }}>
                        {course.duration}
                      </span>
                    </div>
                    <span
                      style={{ fontFamily: banglaFont }}
                      className="text-sm bg-gray-100 px-2 py-1 rounded"
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <CountdownTimer targetDate={enrollmentDeadline} />

                  {/* Course Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span
                        style={{ fontFamily: banglaFont }}
                        className="text-gray-600 text-sm"
                      >
                        লাইভ ক্লাস ও রেকর্ডেড ভিডিও
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span
                        style={{ fontFamily: banglaFont }}
                        className="text-gray-600 text-sm"
                      >
                        ব্যক্তিগত ফিডব্যাক
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span
                        style={{ fontFamily: banglaFont }}
                        className="text-gray-600 text-sm"
                      >
                        সার্টিফিকেট অব কমপ্লিশন
                      </span>
                    </div>
                  </div>

                  {/* Price and WhatsApp Enroll Button */}
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-red-600">
                        ৳{course.price}
                      </span>
                    </div>
                    <WhatsAppEnrollButton
                      courseTitle={course.title}
                      coursePrice={course.price}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              আপনার <span className="text-red-400">শিল্পীসত্তাকে</span> জাগ্রত
              করুন
            </h2>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              আজই শুরু করুন আপনার ক্যালিগ্রাফি যাত্রা। আমাদের এক্সপার্ট মেন্টররা
              আপনাকে গাইড করবে প্রতিটি ধাপে।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/8801761700244?text=হ্যালো!%20আমি%20কোর্স%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।",
                    "_blank"
                  )
                }
                style={{ fontFamily: banglaFont }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-500 text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp-এ কনসাল্টেশন
              </button>
              <button
                style={{ fontFamily: banglaFont }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  কল করুন: ০১৭৬১৭০০২৪৪
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CoursesPage;
