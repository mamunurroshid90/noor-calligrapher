// src/app/(main)/courses/page.tsx
"use client";

import { useState } from "react";
import HeroSection from "@/components/courses/HeroSection";
import CountdownSection from "@/components/courses/CountdownSection";
import VideoPreviewSection from "@/components/courses/VideoPreviewSection";
import CourseDetailsSection from "@/components/courses/CourseDetailsSection";
import CourseModulesSection from "@/components/courses/CourseModulesSection";
import StudentWorkGallery from "@/components/courses/StudentWorkGallery";
import { courseVideos } from "@/data/courseVideos";
import { studentWorks } from "@/data/studentWorks";
import StudentReviewsGallery from "@/components/courses/StudentReviewsGallery";

const CoursesPage = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openYouTubeVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Enroll button click handler
  const handleEnrollClick = () => {
    window.location.href = "/enroll";
  };

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

      {/* Imported Components */}
      <HeroSection
        banglaFont={banglaFont}
        // onWatchVideo={openYouTubeVideo}
        onEnrollClick={handleEnrollClick}
      />

      <CountdownSection banglaFont={banglaFont} />

      {/* <VideoPreviewSection
        banglaFont={banglaFont}
        videos={courseVideos}
        onWatchVideo={openYouTubeVideo}
      /> */}

      <CourseDetailsSection banglaFont={banglaFont} />

      <CourseModulesSection banglaFont={banglaFont} />

      <StudentWorkGallery works={studentWorks} banglaFont={banglaFont} />

      <StudentReviewsGallery banglaFont={banglaFont} />
    </div>
  );
};

export default CoursesPage;
