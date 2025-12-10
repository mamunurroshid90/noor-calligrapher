// src/components/courses/CourseModulesSection.tsx
"use client";

import {
  PenTool,
  Brush,
  Palette,
  Award,
  BookOpen,
  Layers,
  Droplets,
} from "lucide-react";
import Container from "@/components/ui/Container";

interface CourseModulesSectionProps {
  banglaFont: string;
}

const CourseModulesSection = ({ banglaFont }: CourseModulesSectionProps) => {
  const modules = [
    {
      id: 1,
      title: "ফন্ট শেখা",
      icon: <PenTool className="h-8 w-8 text-purple-300" />,
      color: "from-purple-900/50 to-purple-700/30",
      borderColor: "border-purple-500/20",
      hoverBorderColor: "hover:border-purple-400/40",
      iconBg: "bg-purple-500/20",
      iconHoverBg: "group-hover:bg-purple-500/30",
      dotColor: "bg-purple-400",
      textColor: "text-purple-100",
      items: [
        "আরবি সুলুস ও উইসাম",
        "ইংলিশ কার্সিভ",
        "বাংলা ফ্রি হ্যান্ড ক্যালিগ্রাফি",
      ],
    },
    {
      id: 2,
      title: "ড্রয়িং ও কম্পোজিশন",
      icon: <Brush className="h-8 w-8 text-blue-300" />,
      color: "from-blue-900/50 to-blue-700/30",
      borderColor: "border-blue-500/20",
      hoverBorderColor: "hover:border-blue-400/40",
      iconBg: "bg-blue-500/20",
      iconHoverBg: "group-hover:bg-blue-500/30",
      dotColor: "bg-blue-400",
      textColor: "text-blue-100",
      items: ["অক্ষর ও যুক্তাক্ষর ড্রয়িং", "বাক্য গঠন ও কম্পোজিশন টেকনিক"],
    },
    {
      id: 3,
      title: "ক্যানভাস ও টেকনিক",
      icon: <Palette className="h-8 w-8 text-green-300" />,
      color: "from-green-900/50 to-green-700/30",
      borderColor: "border-green-500/20",
      hoverBorderColor: "hover:border-green-400/40",
      iconBg: "bg-green-500/20",
      iconHoverBg: "group-hover:bg-green-500/30",
      dotColor: "bg-green-400",
      textColor: "text-green-100",
      items: [
        "ক্যানভাস প্রস্তুত ও টেক্সচার",
        "স্টেন্সিল ব্যবহার",
        "বড় ও ছোট লেখা লেখার টিপস",
        "ব্রাশ কন্ট্রোল টেকনিক",
      ],
    },
    {
      id: 4,
      title: "কালার ও ব্যাকগ্রাউন্ড",
      icon: <Layers className="h-8 w-8 text-orange-300" />,
      color: "from-orange-900/50 to-orange-700/30",
      borderColor: "border-orange-500/20",
      hoverBorderColor: "hover:border-orange-400/40",
      iconBg: "bg-orange-500/20",
      iconHoverBg: "group-hover:bg-orange-500/30",
      dotColor: "bg-orange-400",
      textColor: "text-orange-100",
      items: [
        "ব্যাকগ্রাউন্ড ট্রিক্স ও কালার মিক্সিং",
        "কালার গ্রেডিয়েন্ট, ছায়া, থ্রিডি ইফেক্ট",
        "টেক্সচার ও প্যাটার্ন",
        "লাইটিং এন্ড শেডিং",
      ],
    },
    {
      id: 5,
      title: "ওয়াটারকালার ও অ্যাক্রেলিক",
      icon: <Droplets className="h-8 w-8 text-pink-300" />,
      color: "from-pink-900/50 to-pink-700/30",
      borderColor: "border-pink-500/20",
      hoverBorderColor: "hover:border-pink-400/40",
      iconBg: "bg-pink-500/20",
      iconHoverBg: "group-hover:bg-pink-500/30",
      dotColor: "bg-pink-400",
      textColor: "text-pink-100",
      items: ["ওয়াটারকালার ক্যালিগ্রাফি", "অ্যাক্রেলিক পেইন্টিং টেকনিক"],
    },
    {
      id: 6,
      title: "প্রফেশনাল গাইডলাইন",
      icon: <Award className="h-8 w-8 text-yellow-300" />,
      color: "from-yellow-900/50 to-yellow-700/30",
      borderColor: "border-yellow-500/20",
      hoverBorderColor: "hover:border-yellow-400/40",
      iconBg: "bg-yellow-500/20",
      iconHoverBg: "group-hover:bg-yellow-500/30",
      dotColor: "bg-yellow-400",
      textColor: "text-yellow-100",
      items: [
        "ক্যালিগ্রাফি দিয়ে আর্নিং টিপস",
        "কোর্স শেষে পরীক্ষা ও পুরস্কার",
        "সার্টিফিকেট + লাইফটাইম সাপোর্ট",
        "ক্লায়েন্ট ম্যানেজমেন্ট",
      ],
    },
    {
      id: 7,
      title: "টুলস ও ম্যাটেরিয়ালস",
      icon: <BookOpen className="h-8 w-8 text-cyan-300" />,
      color: "from-cyan-900/50 to-cyan-700/30",
      borderColor: "border-cyan-500/20",
      hoverBorderColor: "hover:border-cyan-400/40",
      iconBg: "bg-cyan-500/20",
      iconHoverBg: "group-hover:bg-cyan-500/30",
      dotColor: "bg-cyan-400",
      textColor: "text-cyan-100",
      items: [
        "প্রফেশনাল ব্রাশ সিলেকশন",
        "কালি ও পেইন্টের প্রকারভেদ",
        "কাগজ ও ক্যানভাস সিলেকশন",
        "টুলস মেইনটেনেন্স",
      ],
    },
  ];

  return (
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
            বেসিক থেকে এডভান্সড পর্যন্ত সম্পূর্ণ গাইডলাইন - ৮টি মডিউল
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`bg-gradient-to-br ${module.color} rounded-2xl p-8 backdrop-blur-sm border ${module.borderColor} ${module.hoverBorderColor} transition-all duration-300 hover:scale-105 group`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 ${module.iconBg} rounded-xl ${module.iconHoverBg} transition-all duration-300`}
                >
                  {module.icon}
                </div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white"
                >
                  {module.title}
                </h3>
              </div>
              <ul style={{ fontFamily: banglaFont }} className="space-y-3">
                {module.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${module.dotColor} mt-2 flex-shrink-0`}
                    ></div>
                    <span className={module.textColor}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
  );
};

export default CourseModulesSection;
