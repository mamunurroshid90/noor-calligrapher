// ফাইল: src/app/(main)/achievement/page.tsx

import Image from "next/image";
import { Award, Trophy, Users, Star, Target, Heart } from "lucide-react";

// তুমি তোমার আসল ছবির তথ্য এখানে যোগ করতে পারো
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "A group of students collaborating on a project.",
    caption: "সফল টিম কোলাবরেশন ওয়ার্কশপ",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    alt: "A person receiving an award on stage.",
    caption: "বাৎসরিক এক্সিলেন্স অ্যাওয়ার্ড সেরিমনি",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    alt: "Students celebrating their graduation.",
    caption: "২০২৩ ব্যাচের গ্র্যাজুয়েশন ডে",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    alt: "A team brainstorming with sticky notes.",
    caption: "ইনোভেটিভ প্রজেক্ট পিচ কম্পিটিশন",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    alt: "A professional woman presenting in a meeting.",
    caption: "টেক কনফারেন্সে কীনোট স্পিকার",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    alt: "A modern office with people working.",
    caption: "আমাদের নতুন স্টেট-অফ-দ্য-আর্ট ক্যাম্পাস",
  },
];

const achievements = [
  { icon: Users, number: "500+", text: "সন্তুষ্ট শিক্ষার্থী" },
  { icon: Trophy, number: "6+", text: "বছরের অভিজ্ঞতা" },
  { icon: Award, number: "50+", text: "প্রশংসাপত্র" },
  { icon: Star, number: "98%", text: "সাফল্যের হার" },
  { icon: Target, number: "1000+", text: "সম্পন্ন প্রজেক্ট" },
  { icon: Heart, number: "100%", text: "গ্রাহক সন্তুষ্টি" },
];

export default function AchievementPage() {
  const banglaFont = "'Hind Siliguri', sans-serif";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* হেডিং সেকশন */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-3 rounded-full text-lg font-semibold mb-6 backdrop-blur-sm">
            <Trophy className="h-5 w-5 mr-2" />
            <span style={{ fontFamily: banglaFont }}>
              আমাদের গৌরবময় যাত্রা
            </span>
          </div>

          <h1
            style={{ fontFamily: banglaFont }}
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              আমাদের সাফল্যের
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              গল্পসমূহ
            </span>
          </h1>

          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            প্রতিটি মাইলফলক আমাদের কমিউনিটির কঠোর পরিশ্রম ও নিষ্ঠার প্রমাণ।
            <span className="text-red-400 font-semibold">
              {" "}
              আমরা সেই মুহূর্তগুলো উদযাপন করি যা আমাদেরকে সংজ্ঞায়িত করে এবং আরও
              বড় লক্ষ্যে পৌঁছাতে অনুপ্রাণিত করে।
            </span>
          </p>
        </div>

        {/* অ্যাচিভমেন্ট স্ট্যাটস */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-red-600 rounded-full">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                {achievement.number}
              </div>
              <div
                style={{ fontFamily: banglaFont }}
                className="text-gray-300 text-sm font-medium"
              >
                {achievement.text}
              </div>
            </div>
          ))}
        </div>

        {/* ফটো গ্যালারি হেডিং */}
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: banglaFont }}
            className="text-4xl font-black text-white mb-4"
          >
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              স্মরণীয় মুহূর্তসমূহ
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          </div>
        </div>

        {/* ফটো গ্যালারি */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 hover:scale-105"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* গ্রেডিয়েন্ট ওভারলে */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* ক্যাপশন */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-white font-bold text-lg text-center"
                  >
                    {image.caption}
                  </p>
                </div>

                {/* হোভার ইফেক্ট */}
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* ফ্লোটিং ইন্ডিকেটর */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span style={{ fontFamily: banglaFont }}>দেখুন</span>
              </div>
            </div>
          ))}
        </div>

        {/* ক্যাল টু অ্যাকশন */}
        <div className="text-center mt-16 pt-12 border-t border-gray-700">
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-300 mb-6"
          >
            আমাদের সাফল্যের গল্পে যোগ দিন
          </p>
          <button
            style={{ fontFamily: banglaFont }}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-500 text-lg"
          >
            আমাদের সাথে যুক্ত হোন
          </button>
        </div>
      </div>
    </div>
  );
}
