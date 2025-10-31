// ফাইল: src/app/(main)/achievement/page.tsx

import Image from 'next/image';

// তুমি তোমার আসল ছবির তথ্য এখানে যোগ করতে পারো
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "A group of students collaborating on a project.",
    caption: "Successful Team Collaboration Workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    alt: "A person receiving an award on stage.",
    caption: "Annual Excellence Award Ceremony"
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    alt: "Students celebrating their graduation.",
    caption: "Graduation Day for the 2023 Batch"
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    alt: "A team brainstorming with sticky notes.",
    caption: "Innovative Project Pitch Competition"
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    alt: "A professional woman presenting in a meeting.",
    caption: "Keynote Speaker at Tech Conference"
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    alt: "A modern office with people working.",
    caption: "Our New State-of-the-Art Campus"
  },
];

export default function AchievementPage() {
  return (
    <div className="w-full py-16">
      {/* হেডিং এবং প্যারাগ্রাফ */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Journey of Success
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
          We believe every milestone is a testament to our community's hard work and dedication. Here, we celebrate the moments that define us and inspire us to reach for greater heights.
        </p>
      </div>

      {/* ফটো গ্যালারি */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={350}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-70">
              <p className="text-white font-semibold text-lg">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}