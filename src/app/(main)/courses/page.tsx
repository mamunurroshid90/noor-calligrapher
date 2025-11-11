// src/app/(main)/courses/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Star, Users, Clock, Award, PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";

const CoursesPage = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";

  const courses = [
    {
      id: 1,
      title: "আরবি ক্যালিগ্রাফি বেসিক কোর্স",
      description:
        "আরবি ক্যালিগ্রাফির বুনিয়াদি নীতিমালা শেখার জন্য সম্পূর্ণ গাইড। নাসখ, সুলুস ও রুক'আহ স্টাইল শিখুন।",
      price: "৳ ২,৯৯৯",
      originalPrice: "৳ ৪,৯৯৯",
      duration: "৮ সপ্তাহ",
      students: "১৫০+",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070",
      features: [
        "লাইভ ক্লাস ও রেকর্ডেড ভিডিও",
        "ব্যক্তিগত ফিডব্যাক",
        "সার্টিফিকেট অব কমপ্লিশন",
        "লাইফটাইম এক্সেস",
      ],
    },
    {
      id: 2,
      title: "বাংলা ক্যালিগ্রাফি মাস্টারক্লাস",
      description:
        "বাংলা হাতের লেখাকে শিল্পে পরিণত করুন। বাংলা টাইপোগ্রাফি ও লেটারিং এর গোপন রহস্য জানুন।",
      price: "৳ ৩,৫৯৯",
      originalPrice: "৳ ৫,৯৯৯",
      duration: "১০ সপ্তাহ",
      students: "২০০+",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2070",
      features: [
        "বাংলা লেটারিং টেকনিক",
        "ডিজিটাল ও ট্রেডিশনাল মেথড",
        "প্রজেক্ট বেজড লার্নিং",
        "ক্যারিয়ার গাইডেন্স",
      ],
    },
    {
      id: 3,
      title: "ইংরেজি ক্যালিগ্রাফি প্রো",
      description:
        "ইংরেজি কপারপ্লেট, গোথিক ও মডার্ন ক্যালিগ্রাফি শিখুন। প্রফেশনাল লেভেলে নিজেকে গড়ে তুলুন।",
      price: "৳ ৪,২৯৯",
      originalPrice: "৳ ৬,৯৯৯",
      duration: "১২ সপ্তাহ",
      students: "১২৫+",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070",
      features: [
        "এডভান্সড টেকনিক",
        "কমার্শিয়াল প্রজেক্ট",
        "ইন্টারন্যাশনাল স্ট্যান্ডার্ড",
        "মেন্টরশিপ প্রোগ্রাম",
      ],
    },
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              আরবি, বাংলা ও ইংরেজি ক্যালিগ্রাফিতে দক্ষ হয়ে উঠুন।
              <span className="text-red-400 font-semibold">
                {" "}
                পেশাদার প্রশিক্ষকদের গাইডলাইন নিয়ে শুরু করুন আপনার শিল্পযাত্রা।
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                style={{ fontFamily: banglaFont }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-500 text-lg"
              >
                কোর্সে এনরোল করুন
              </button>
              <button
                style={{ fontFamily: banglaFont }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
              >
                ফ্রি কনসাল্টেশন
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
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
                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:scale-105"
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
      <section className="py-16 bg-gray-50">
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
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
                  {/* Rating and Students */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(course.rating)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        ({course.rating})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

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

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock className="h-4 w-4" />
                    <span style={{ fontFamily: banglaFont }}>
                      {course.duration}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span
                          style={{ fontFamily: banglaFont }}
                          className="text-gray-600 text-sm"
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Enroll Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-red-600">
                        {course.price}
                      </span>
                      <span className="ml-2 text-gray-500 line-through text-sm">
                        {course.originalPrice}
                      </span>
                    </div>
                    <button
                      style={{ fontFamily: banglaFont }}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border border-red-500"
                    >
                      এনরোল করুন
                    </button>
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
                style={{ fontFamily: banglaFont }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-500 text-lg"
              >
                ফ্রি ক্লাসে জয়েন করুন
              </button>
              <button
                style={{ fontFamily: banglaFont }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <span className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    কল করুন: ০১৭৬১৭০০২৪৪
                  </span>
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
