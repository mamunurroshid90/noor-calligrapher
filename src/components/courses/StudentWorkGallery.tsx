// src/components/courses/StudentWorkGallery.tsx - সরলীকৃত ভার্সন
"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { StudentWork } from "@/types/studentWork";

interface StudentWorkGalleryProps {
  works: StudentWork[];
  banglaFont: string;
}

const StudentWorkGallery = ({ works, banglaFont }: StudentWorkGalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(4); // প্রথমে ৪টা দেখাবে

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, works.length));
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
            আমার <span className="text-red-600">শিক্ষার্থীদের</span> কাজ
          </h2>
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            আমাদের শিক্ষার্থীরা যে অসাধারণ কাজ তৈরি করছে তা দেখুন
          </p>
        </div>

        {/* সরলীকৃত গ্যালারি */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={work.src}
                  alt={work.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`Failed to load: ${work.src}`);
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300/cccccc/666666?text=Image+Not+Found";
                  }}
                  onLoad={() => console.log(`Loaded: ${work.src}`)}
                />
              </div>
              <div className="p-4">
                <h3
                  className="font-bold text-gray-900"
                  style={{ fontFamily: banglaFont }}
                >
                  {work.title || work.alt}
                </h3>
                {work.description && (
                  <p
                    className="text-gray-600 text-sm mt-1"
                    style={{ fontFamily: banglaFont }}
                  >
                    {work.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMoreWorks && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              style={{ fontFamily: banglaFont }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              আরও দেখুন ({works.length - visibleCount} টি বাকি)
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default StudentWorkGallery;
