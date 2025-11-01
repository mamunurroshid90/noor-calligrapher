import HeroSection from '@/components/home/heroSection'; // ১. হিরো সেকশন কম্পোনেন্ট ইম্পোর্ট করুন

export default function HomePage() {
  return (
    // একটি Fragment (<>) ব্যবহার করে একাধিক সেকশনকে গ্রুপ করা হয়েছে
    <>
      {/* ২. হিরো সেকশন কম্পোনেন্টটি এখানে ব্যবহার করুন */}
      <HeroSection />
      {/* <ArtistIntroSection /> */}
    </>
  );
}