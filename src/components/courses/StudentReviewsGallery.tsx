// src/components/courses/StudentReviewsGallery.tsx
"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const StudentReviewsGallery = ({ banglaFont }: { banglaFont: string }) => {
  // শুধু ফটো ডেটা - কোন টেক্সট নেই
  const reviewPhotos = [
    { id: 1, src: "/students-review/review1.jpg" },
    { id: 2, src: "/students-review/review2.jpg" },
    { id: 3, src: "/students-review/review3.jpg" },
    { id: 4, src: "/students-review/review4.jpg" },
    { id: 5, src: "/students-review/review5.jpg" },
    { id: 6, src: "/students-review/review6.jpg" },
    { id: 7, src: "/students-review/review7.jpg" },
    { id: 8, src: "/students-review/review8.jpg" },
    { id: 9, src: "/students-review/review9.jpg" },
    { id: 10, src: "/students-review/review10.jpg" },
    { id: 11, src: "/students-review/review11.jpg" },
    { id: 12, src: "/students-review/review12.jpg" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, reviewPhotos.length));
  };

  const visiblePhotos = reviewPhotos.slice(0, visibleCount);
  const hasMorePhotos = visibleCount < reviewPhotos.length;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <Container>
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: banglaFont }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            শিক্ষার্থীদের{" "}
            <span className="text-yellow-400">রিভিও গ্যালারি</span>
          </h2>
        </div>

        {/* Pure Photo Gallery - Vertical Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Vertical Photo Container */}
              <div className="relative h-96 overflow-hidden bg-gray-800">
                <img
                  src={photo.src}
                  alt={`Review Photo ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                          <div class="text-4xl text-gray-400">📸</div>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Simple Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

                {/* Photo Number (Optional) */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #{photo.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePhotos && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              style={{ fontFamily: banglaFont }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              আরও ফটো দেখুন ({reviewPhotos.length - visibleCount} টি বাকি)
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default StudentReviewsGallery;
