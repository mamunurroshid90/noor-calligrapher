import HeroSection from '@/components/home/heroSection'; // ১. হিরো সেকশন কম্পোনেন্ট ইম্পোর্ট করুন

export default function HomePage() {
  return (
    // একটি Fragment (<>) ব্যবহার করে একাধিক সেকশনকে গ্রুপ করা হয়েছে
    <>
      {/* ২. হিরো সেকশন কম্পোনেন্টটি এখানে ব্যবহার করুন */}
      <HeroSection />

      {/* হিরো সেকশনের পরে আপনার হোমপেজের অন্যান্য সেকশনগুলো এখানে যোগ করতে পারেন */}
      {/* যেমন: ফিচারড কোর্স, প্রশংসাপত্র (Testimonials), আমাদের সম্পর্কে ইত্যাদি */}
      <div className="container mx-auto px-4">
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">What You Will Learn</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Our courses cover everything from basic strokes and letterforms to advanced flourishing and composition techniques. Start your creative journey with us today!
          </p>
          {/* এখানে ফিচারড কোর্স কার্ডগুলো দেখানো যেতে পারে */}
        </div>
      </div>
    </>
  );
}