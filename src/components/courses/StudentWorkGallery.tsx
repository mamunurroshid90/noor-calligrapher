// src/components/courses/StudentWorkGallery.tsx
"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { StudentWork } from "@/types/studentWork";

interface StudentWorkGalleryProps {
  works: StudentWork[];
  banglaFont: string;
  title?: string;
  description?: string;
}

const StudentWorkGallery = ({
  works,
  banglaFont,
  title = "আমার শিক্ষার্থীদের কাজ",
  description = "আমাদের শিক্ষার্থীরা যে অসাধারণ কাজ তৈরি করছে তা দেখুন",
}: StudentWorkGalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const itemsPerLoad = 4;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + itemsPerLoad);
  };

  const visibleWorks = works.slice(0, visibleCount);
  const hasMoreWorks = visibleCount < works.length;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: banglaFont }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            <span className="text-red-600">শিক্ষার্থীদের</span> কাজ
          </h2>
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleWorks.map((work) => (
            <div
              key={work.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={work.src}
                alt={work.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
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

        {/* Load More Button */}
        {hasMoreWorks && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-400 text-lg"
            >
              আরও কাজ দেখুন ({works.length - visibleCount} টি বাকি)
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default StudentWorkGallery;
