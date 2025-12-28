// src/components/courses/CourseDetailsSection.tsx
"use client";

import Image from "next/image";
import {
  Check,
  Star,
  Users,
  Clock,
  Award,
  PlayCircle,
  Video,
  MessageCircle,
  Phone,
  BookOpen,
  Calendar,
  Percent,
  AlertCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";

interface CourseDetailsSectionProps {
  banglaFont: string;
}

const CourseDetailsSection = ({ banglaFont }: CourseDetailsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header with Special Offer */}
          <div className="text-center mb-16">
            {/* Special Offer Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg animate-pulse">
              <Star className="h-5 w-5 mr-2" />
              <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                ✨ নতুন বছরের বিশেষ অফার!
              </span>
            </div>

            {/* Main Title */}
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-5xl md:text-6xl font-black text-gray-900 mb-4"
            >
              অনলাইন ক্যালিগ্রাফি পেইন্টিং কোর্স
            </h2>
            <h3
              style={{ fontFamily: banglaFont }}
              className="text-3xl md:text-4xl font-bold text-red-600 mb-6"
            >
              ২৫তম ব্যাচে ভর্তি চলছে!
            </h3>

            {/* Countdown Timer */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg mb-6">
              <Clock className="h-5 w-5 mr-2" />
              <span style={{ fontFamily: banglaFont }}>
                ⏰ ভর্তি শেষ: ১২ জানুয়ারি
              </span>
            </div>

            <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Course Details */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  {/* Header with Start Date */}
                  <div className="mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-7 w-7 text-red-600" />
                        <h3
                          style={{ fontFamily: banglaFont }}
                          className="text-2xl font-bold text-gray-900"
                        >
                          কোর্সের বিবরণ
                        </h3>
                      </div>
                      <div className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-md font-medium">
                        <Calendar className="h-4 w-4 inline mr-1" />
                        <span style={{ fontFamily: banglaFont }}>
                          ক্লাস শুরু: <span className="font-serif">১৩</span>{" "}
                          জানুয়ারি
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Course Details List */}
                  <div style={{ fontFamily: banglaFont }} className="space-y-5">
                    {/* List Items */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">
                          মেয়াদ: ৫ মাস
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <BookOpen className="h-6 w-6 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">
                          মোট ক্লাস: ৪৫+ (টিউটোরিয়ালসহ)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Calendar className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">
                          সাপ্তাহিক ক্লাস: সপ্তাহে ২টি
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          (শনিবার ও মঙ্গলবার রাত ৮টা)
                        </p>
                      </div>
                    </div>

                    {/* Certificate Section */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Award className="h-5 w-5 text-purple-600" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">
                          কোর্স শেষে
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <Check className="h-5 w-5 text-purple-600" />
                        <p className="text-gray-700">
                          প্রদান করা হবে{" "}
                          <strong className="text-purple-600">
                            ই-সার্টিফিকেট
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recorded Classes */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                  >
                    <Video className="h-6 w-6 text-blue-600" />
                    ক্লাস মিস হলেও চিন্তার কিছু নেই
                  </h3>
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    • প্রতিটি ক্লাসের রেকর্ডেড ভিডিও দেওয়া হবে
                    <br />• নিজের সুবিধামতো সময়ে দেখে কোর্স সম্পূর্ণ করতে
                    পারবেন
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Pricing Section */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 shadow-2xl text-white hover:shadow-3xl transition-all duration-300">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold mb-6 flex items-center gap-3"
                  >
                    {/* <MessageCircle className="h-6 w-6" /> */}
                    💰 কোর্স ফি
                  </h3>

                  {/* Regular Fee */}
                  <div className="mb-6">
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-semibold mb-3 text-lg"
                    >
                      মূল ফি: ৪,৯৯৯/- টাকা
                    </h4>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="space-y-2 text-md bg-red-400/20 rounded-lg p-4"
                    >
                      <div className="flex justify-between">
                        <span>প্রথম ধাপ:</span>
                        <span className="font-bold">২,০০০/- টাকা (অগ্রিম)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>দ্বিতীয় ধাপ:</span>
                        <span className="font-bold">১,৫০০/- টাকা</span>
                      </div>
                      <div className="flex justify-between">
                        <span>তৃতীয় ধাপ:</span>
                        <span className="font-bold">১,৫০০/- টাকা</span>
                      </div>
                    </div>
                  </div>

                  {/* Special Offer */}
                  <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-gray-900 rounded-xl p-4 hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold mb-2 flex items-center gap-2 text-lg"
                    >
                      {/* <Star className="h-5 w-5 fill-current" /> */}
                      🎉 নতুন বছরের অফার (প্রথম ১০ জনের জন্য)
                    </h4>
                    <div
                      style={{ fontFamily: banglaFont }}
                      className="flex justify-between items-center mb-2"
                    >
                      <span className="text-lg">বিশেষ মূল্য:</span>
                      <span className="text-2xl font-bold">৩,৭৫০/- টাকা</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-red-600 line-through">
                        ৪,৯৯৯/- টাকা
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-bold">
                        ২৫% ছাড়!
                      </span>
                    </div>
                  </div>

                  {/* One-time Payment Offer */}
                  <div className="mt-4 bg-green-500 text-white rounded-xl p-4 border border-green-300/30">
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold mb-2 flex items-center gap-2"
                    >
                      <Check className="h-5 w-5" />
                      একবারে পরিশোধ করলে
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
                      className="text-sm mt-1 text-white font-bold"
                    >
                      ৫০০/- টাকা অতিরিক্ত ছাড়!
                    </p>
                  </div>
                </div>

                {/* Contact & Enrollment */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                  >
                    <Phone className="h-6 w-6 text-green-600" />
                    যোগাযোগ
                  </h3>
                  <div style={{ fontFamily: banglaFont }} className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-gray-700 text-lg font-semibold text-center">
                        ☎️ 01688262501
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-600 italic text-lg mb-4">
                        "🌟 নতুন বছরে নতুন দক্ষতা শিখুন ক্যালিগ্রাফির মাধ্যমে!"
                      </p>
                      <p className="text-gray-700 font-medium mb-6">
                        📲 আজই ভর্তি হোন — সুযোগ সীমিত!
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        window.open(
                          "https://wa.me/8801886262501?text=হ্যালো!%20আমি%20ক্যালিগ্রাফি%20পেইন্টিং%20কোর্সে%20ভর্তি%20হতে%20চাই।%20নতুন%20বছরের%2025%%20ডিসকাউন্ট%20অফার%20সম্পর্কে%20জানতে%20চাই।",
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
        </div>
      </Container>
    </section>
  );
};

export default CourseDetailsSection;
