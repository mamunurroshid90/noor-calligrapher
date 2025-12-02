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
  );
};

export default CourseDetailsSection;
