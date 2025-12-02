// src/components/courses/VideoPreviewSection.tsx
"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { CourseVideo } from "@/types/courseVideo";

interface VideoPreviewSectionProps {
  banglaFont: string;
  videos: CourseVideo[];
  onWatchVideo: (videoId: string) => void;
}

const VideoPreviewSection = ({
  banglaFont,
  videos,
  onWatchVideo,
}: VideoPreviewSectionProps) => {
  return (
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
            আমাদের কোর্সের কিছু ফ্রি ডেমো ক্লাস দেখে নিন। ক্লিক করলেই YouTube-এ
            ভিডিও চালু হবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              onClick={() => onWatchVideo(video.youtubeId)}
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
                <p style={{ fontFamily: banglaFont }} className="text-gray-600">
                  সম্পূর্ণ ফ্রি ডেমো ক্লাস - এখনই দেখুন
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VideoPreviewSection;
