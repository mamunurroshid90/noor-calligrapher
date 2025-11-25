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
  ChevronLeft,
  ChevronRight,
  PenTool,
  Brush,
  Ruler,
  Palette,
  BookOpen,
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

interface StudentWork {
  id: number;
  image: string;
  title: string;
  studentName: string;
  course: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
  course: string;
}

interface Material {
  id: number;
  name: string;
  description: string;
  image: string;
  purpose: string;
  essential: boolean;
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

// Student Work Gallery Component
const StudentWorkGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const studentWorks: StudentWork[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=500",
      title: "আরবি ক্যালিগ্রাফি মাস্টারপিস",
      studentName: "আহমেদ হাসান",
      course: "আরবি ক্যালিগ্রাফি বেসিক",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=500",
      title: "নাসখ স্টাইল আর্টওয়ার্ক",
      studentName: "ফাতেমা বেগম",
      course: "এডভান্সড ক্যালিগ্রাফি",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500",
      title: "সুলুস স্টাইল ডিজাইন",
      studentName: "রহমান আলী",
      course: "আরবি ক্যালিগ্রাফি বেসিক",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=500",
      title: "মডার্ন ক্যালিগ্রাফি আর্ট",
      studentName: "সাবরিনা ইসলাম",
      course: "মডার্ন ক্যালিগ্রাফি",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500",
      title: "ট্র্যাডিশনাল ডিজাইন",
      studentName: "ইমরান হোসেন",
      course: "ট্র্যাডিশনাল আর্ট",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % studentWorks.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + studentWorks.length) % studentWorks.length
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            আমাদের <span className="text-red-600">শিক্ষার্থীদের</span> কাজ
          </h2>
          <p
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            আমাদের শিক্ষার্থীরা যে অসাধারণ কাজ তৈরি করছে তা দেখুন
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {studentWorks.map((work) => (
                <div key={work.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div className="relative h-96 rounded-xl overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3
                        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                      >
                        {work.title}
                      </h3>
                      <p
                        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                        className="text-xl text-gray-600 mb-2"
                      >
                        <strong>শিক্ষার্থী:</strong> {work.studentName}
                      </p>
                      <p
                        style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                        className="text-lg text-gray-600 mb-6"
                      >
                        <strong>কোর্স:</strong> {work.course}
                      </p>
                      <div className="flex gap-4">
                        <button
                          onClick={prevSlide}
                          className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {studentWorks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-red-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Reviews Slider Component - Image Only Version (Simple)
const ReviewsSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Review screenshots/images only - no text
  const reviewScreenshots = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1611605698015-18c6e2f4dcd0?q=80&w=800",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewScreenshots.length);
  };

  const prevReview = () => {
    setCurrentReview(
      (prev) => (prev - 1 + reviewScreenshots.length) % reviewScreenshots.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            শিক্ষার্থীদের <span className="text-red-600">রিভিউ</span>
          </h2>
          <p
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            আসল রিভিউগুলোর স্ক্রিনশট দেখুন
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-lg">
            {/* Review Screenshot Image */}
            <div className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="relative h-96 md:h-[500px] w-full">
                <Image
                  src={reviewScreenshots[currentReview].image}
                  alt={`Review ${currentReview + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>

            {/* Navigation and Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={prevReview}
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all shadow-lg flex items-center justify-center"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all shadow-lg flex items-center justify-center"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Review Counter */}
              <div className="text-gray-600 text-sm">
                <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                  {currentReview + 1} / {reviewScreenshots.length}
                </span>
              </div>

              {/* Review Indicators */}
              <div className="flex gap-2">
                {reviewScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentReview ? "bg-red-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Required Materials Section
const RequiredMaterials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            কোর্স <span className="text-red-600">বিস্তারিত</span>
          </h2>
          <p
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            পেন্সিল স্কেচ, জলরঙ ও এক্রেলিক পেইন্টিং কোর্সের সম্পূর্ণ তথ্য
          </p>
        </div>

        {/* Basic Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200 text-center">
            <Users className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="font-bold text-gray-900 mb-2"
            >
              বয়সসীমা
            </h3>
            <p
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-gray-600"
            >
              ১৩ বছর থেকে যে কোনো বয়স
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200 text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="font-bold text-gray-900 mb-2"
            >
              ক্লাস সময়
            </h3>
            <p
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-gray-600"
            >
              বুধবার ও বৃহস্পতিবার
              <br />
              রাত ৯টা - ১০টা
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200 text-center">
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="font-bold text-gray-900 mb-2"
            >
              কোর্স শুরু
            </h3>
            <p
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-gray-600"
            >
              ১১ ডিসেম্বর ২০২৫
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200 text-center">
            <Award className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="font-bold text-gray-900 mb-2"
            >
              ভর্তি শেষ
            </h3>
            <p
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-gray-600"
            >
              ১০ ডিসেম্বর ২০২৫
            </p>
          </div>
        </div>

        {/* Course Topics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
          <h3
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            কোর্সের <span className="text-red-600">টপিকসমূহ</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pencil Sketch */}
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PenTool className="h-8 w-8 text-red-600" />
              </div>
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-xl mb-4"
              >
                পেন্সিল স্কেচ
              </h4>
              <ul
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-600 space-y-2 text-left"
              >
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  জড় জীবন বা স্টিল লাইফ
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  প্রাকৃতিক দৃশ্য বা ল্যান্ডস্কেপ
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  মানুষের ছবি বা পোট্রেট ড্রয়িং
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  শহরের দৃশ্য
                </li>
              </ul>
            </div>

            {/* Water Color */}
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brush className="h-8 w-8 text-blue-600" />
              </div>
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-xl mb-4"
              >
                জলরঙ
              </h4>
              <ul
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-600 space-y-2 text-left"
              >
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  জড় জীবন বা স্টিল লাইফ
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  প্রাকৃতিক দৃশ্য বা ল্যান্ডস্কেপ
                </li>
              </ul>
            </div>

            {/* Acrylic Color */}
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Palette className="h-8 w-8 text-purple-600" />
              </div>
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-xl mb-4"
              >
                এক্রেলিক কালার
              </h4>
              <ul
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-600 space-y-2 text-left"
              >
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  জড় জীবন বা স্টিল লাইফ
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  দৃশ্য বা ল্যান্ডস্কেপ
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  শহরের দৃশ্য
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Course Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2"
              >
                <Video className="h-6 w-6 text-green-600" />
                শেখার পদ্ধতি
              </h4>
              <p
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-600"
              >
                যে কোনো কিছু সরাসরি দেখে কিভাবে আঁকতে হয় ক্লাসে সেই বিষয়টি বেসিক
                থেকে বিস্তারিত শেখানো হবে
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2"
              >
                <PlayCircle className="h-6 w-6 text-blue-600" />
                ক্লাস বিস্তারিত
              </h4>
              <ul
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-600 space-y-2"
              >
                <li>• মোট ক্লাস: ৩০ টি + ১টি ওরিয়েন্টেশন ক্লাস</li>
                <li>• পেন্সিল স্কেচ: ১০ টি ক্লাস</li>
                <li>• জলরঙ: ১০ টি ক্লাস</li>
                <li>• এক্রেলিক কালার: ১০ টি ক্লাস</li>
                <li>• লাইভ ক্লাস শেষে রেকর্ড ভিডিও ১ বছর পর্যন্ত এক্সেস</li>
                <li>• ক্লাস হবে গুগল মিটে</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Pricing & Certificate */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-xl mb-4 flex items-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                কোর্স ফি
              </h4>
              <div
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span>নিয়মিত ফি:</span>
                  <span className="font-bold text-lg">৳৩,৫৭০</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>একবারে পেমেন্ট:</span>
                  <span className="font-bold text-lg">৳৩,০৬০</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>দুই কিস্তিতে:</span>
                  <span className="font-bold text-lg">৳২,০৪০ + ৳১,৫৩০</span>
                </div>
                <div className="text-sm opacity-90 mt-2">
                  * আলাদা কোনো মাসিক ফি বা ভর্তি ফি নেই
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200">
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2"
              >
                <Award className="h-6 w-6 text-yellow-600" />
                সার্টিফিকেট
              </h4>
              <ul
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-600 space-y-2"
              >
                <li>• কোর্স শেষে সার্টিফিকেট প্রদান</li>
                <li>• কোর্স চলাকালীন ১টি পরীক্ষা</li>
                <li>• কোর্স শেষে ১টি ফাইনাল পরীক্ষা</li>
                <li>• সার্টিফিকেটের জন্য উভয় পরীক্ষায় অংশগ্রহণ বাধ্যতামূলক</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
          <div className="flex items-start gap-4">
            <BookOpen className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h4
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="font-bold text-gray-900 text-lg mb-2"
              >
                গুরুত্বপূর্ণ তথ্য
              </h4>
              <p
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                className="text-gray-700"
              >
                কোর্সে এনরোল করার পর আমরা আপনাকে উপকরণ সংগ্রহে সাহায্য করব।
                স্থানীয় দোকান এবং অনলাইন স্টোরের লিঙ্কসহ সম্পূর্ণ গাইডলাইন
                প্রদান করা হবে।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
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

  // Demo videos with bigger thumbnails
  const courseVideos: CourseVideo[] = [
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

      {/* Video Preview Section - Bigger Size */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
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

      {/* Student Work Gallery Section */}
      <StudentWorkGallery />

      {/* Reviews Section */}
      <ReviewsSlider />

      {/* Required Materials Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              <span className="text-red-600">প্রয়োজনীয় উপকরণ</span> তালিকা
            </h2>
            <p
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              কোর্সে অংশগ্রহণের জন্য প্রয়োজনীয় উপকরণসমূহ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* পেন্সিল স্কেচের জন্য */}
            <div className="bg-white rounded-2xl shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-red-100 rounded-t-2xl p-6 border-b border-red-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-red-100">
                    <PenTool className="h-6 w-6 text-red-600" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    className="font-bold text-lg text-red-600"
                  >
                    পেন্সিল স্কেচের জন্য
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="space-y-3"
                >
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-red-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      পেন্সিল (Faber castle or Stradler)-2B, 4B, 6B, 8B
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-red-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      পাইলটের ম্যাকানিকেল পেন্সিল ০.৩ লিড 2B (সাথে লিড বক্স)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-red-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      ইরেজার (Marries 4b off-white)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-red-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      কার্টিজ পেপার স্কেচবুক (A3 size)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-red-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      নিউজপেপার অথবা নিউজপ্রিন্ট পেপার
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-red-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      এন্টিকাটার অথবা শার্পনার
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 bg-red-100 rounded-b-2xl border-t border-red-200">
                <p
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="text-xs text-red-600 text-center"
                >
                  ৬টি উপকরণ
                </p>
              </div>
            </div>

            {/* জলরঙের জন্য */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-blue-100 rounded-t-2xl p-6 border-b border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Brush className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    className="font-bold text-lg text-blue-600"
                  >
                    জলরঙের জন্য
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="space-y-3"
                >
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-blue-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      হ্যান্ডমেড পেপার স্কেচ বুক (A3 size)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-blue-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      ক্যামেল ওয়াটার কালার (5ml or 20 ml)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-blue-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      ফ্ল্যাট প্যালেট
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-blue-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      ওয়াটার কালার ব্রাশ (0,2,8,12,20)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 bg-blue-100 rounded-b-2xl border-t border-blue-200">
                <p
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="text-xs text-blue-600 text-center"
                >
                  ৪টি উপকরণ
                </p>
              </div>
            </div>

            {/* এক্রেলিকের জন্য */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-purple-100 rounded-t-2xl p-6 border-b border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Palette className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    className="font-bold text-lg text-purple-600"
                  >
                    এক্রেলিকের জন্য
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="space-y-3"
                >
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-purple-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      মন্ট মার্টে এক্রেলিক সেট (18shades,36ml)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-purple-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      সিন্থেটিক ব্রাশ সেট
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-purple-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      এক্রেলিক কালার মিক্সিং প্যালেট
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-purple-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      ক্যানভাস পেপার প্যাড (A3 Size)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 bg-purple-100"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      মন্ট মার্টে জেসো
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 bg-purple-100 rounded-b-2xl border-t border-purple-200">
                <p
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="text-xs text-purple-600 text-center"
                >
                  ৫টি উপকরণ
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <BookOpen className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h4
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="font-bold text-gray-900 text-lg mb-2"
                >
                  উপকরণ সম্পর্কিত তথ্য
                </h4>
                <p
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                  className="text-gray-700"
                >
                  কোর্সে এনরোল করার পর আমরা আপনাকে উপকরণ সংগ্রহে সাহায্য করব।
                  স্থানীয় দোকান এবং অনলাইন স্টোরের লিঙ্কসহ সম্পূর্ণ গাইডলাইন
                  প্রদান করা হবে।
                </p>
              </div>
            </div>
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
