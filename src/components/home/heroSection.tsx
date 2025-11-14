// src/components/home/HeroSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MoveRight,
  Brush,
  Award,
  Languages,
  Star,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  PenTool,
} from "lucide-react";

// ১. Base64 কোডটিকে একটি ভ্যারিয়েবলে রাখুন
const base64Image =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ... (এখানে আপনার কপি করা সম্পূর্ণ কোডটি পেস্ট করুন) ...gA/9k=";

const HeroSection = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";

  const products = [
    {
      id: 1,
      name: "প্রিমিয়াম ক্যালিগ্রাফি পেন সেট",
      description:
        "পেশাদার মানের ১২টি বিভিন্ন নিবের পেন সেট, পারফেক্ট স্ট্রোকের জন্য",
      price: "৳ ১,২৯৯",
      originalPrice: "৳ ১,৯৯৯",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "ক্যালিগ্রাফি ইনক বোতল সেট",
      description: "৬টি ভিন্ন রঙের হাই-কোয়ালিটি ইনক, মসৃণ প্রবাহের জন্য",
      price: "৳ ৮৯৯",
      originalPrice: "৳ ১,৩৯৯",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    },
  ];

  return (
    <>
      {/* আপনার মূল Hero Section */}
      <section
        className="relative w-full min-h-[80vh] md:min-h-[90vh] py-14 flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${base64Image})`,
          backgroundBlendMode: "darken",
        }}
      >
        {/* আনিমেটেড ব্যাকগ্রাউন্ড এলিমেন্টস */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
        </div>

        {/* মেইন কনটেন্ট */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          {/* ব্যাজ */}
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-3 rounded-full text-lg mb-8 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 mr-2" />
            <span style={{ fontFamily: banglaFont }}>
              বাংলাদেশের সেরা ক্যালিগ্রাফি প্রশিক্ষণ
            </span>
          </div>

          {/* মেইন হেডিং */}
          <h1
            style={{ fontFamily: banglaFont }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 animate-fade-in-down"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              শিল্পের ভাষা
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              আপনার হাতের ছোঁয়ায়
            </span>
          </h1>

          {/* সাব হেডিং */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center text-2xl text-gray-300">
              <Brush className="h-8 w-8 mr-4 text-red-400" />
              <span style={{ fontFamily: banglaFont }}>
                আরবি • বাংলা • ইংরেজি ক্যালিগ্রাফি
              </span>
              <PenTool className="h-8 w-8 ml-4 text-red-400" />
            </div>
          </div>

          {/* ডেসক্রিপশন */}
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            "ক্যালিগ্রাফি শুধু লিখনশিল্প নয়, এটি আত্মার সাথে কথোপকথন।
            <span className="block mt-2 text-red-300 font-medium">
              আপনার হাতের লেখাকে পরিণত করুন শিল্পকর্মে"
            </span>
          </p>

          {/* সিটিএ বাটন গ্রুপ */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/courses" className="group">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl font-bold px-12 py-7 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-2xl border-2 border-red-500"
              >
                <span style={{ fontFamily: banglaFont }} className="mr-3">
                  কোর্সে এনরোল করুন
                </span>
                <MoveRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-amber-700 hover:bg-white hover:text-gray-900 text-xl font-bold px-10 py-7 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span style={{ fontFamily: banglaFont }}>পণ্য দেখুন</span>
              </Button>
            </Link>
          </div>

          {/* এক্সট্রা ইনফো */}
          <div
            style={{ fontFamily: banglaFont }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-lg"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              লাইভ ক্লাস ও প্র্যাকটিক্যাল সেশন
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              সার্টিফিকেট সহ কমপ্লিশন
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
              ৬+ বছর অভিজ্ঞতা
            </div>
          </div>
        </div>

        {/* স্ক্রোল ইন্ডিকেটর */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div> */}
      </section>

      {/* Artist Intro Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* মেইন হেডিং */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Brush className="h-12 w-12 text-red-600" />
            </div>
            <h1
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              🖋️ ক্যালিগ্রাফির জগতে স্বাগতম
            </h1>
            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              যেখানে প্রতিটি অক্ষর হয়ে ওঠে শিল্প
            </p>
          </div>

          {/* কোট সেকশন */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-red-600">
            <blockquote className="text-center">
              <p
                style={{ fontFamily: banglaFont }}
                className="text-2xl md:text-3xl italic text-white mb-4 leading-tight"
              >
                "আমি কখনোই বলব না যে ছবি আঁকা সহজ"
              </p>
              <footer
                style={{ fontFamily: banglaFont }}
                className="text-lg text-gray-400"
              >
                কারণ শিল্পের সৌন্দর্য লুকিয়ে থাকে এর চ্যালেঞ্জেই
              </footer>
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* বাম পাশ - আর্টিস্ট ইনফো */}
            <div className="space-y-6">
              {/* নাম এবং এক্সপেরিয়েন্স */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
                <h2
                  style={{ fontFamily: banglaFont }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  নূর মোহাম্মদ সুমন
                </h2>
                <div className="flex items-center text-red-500 mb-4">
                  <Award className="h-5 w-5 mr-2" />
                  <span
                    style={{ fontFamily: banglaFont }}
                    className="text-lg font-semibold"
                  >
                    ৬ বছরের অভিজ্ঞতা নিয়ে আপনার পাশে
                  </span>
                </div>

                {/* ভাষাগুলো */}
                <div className="flex items-center text-gray-300 mb-4">
                  <Languages className="h-5 w-5 mr-2 text-red-500" />
                  <span
                    style={{ fontFamily: banglaFont }}
                    className="font-medium"
                  >
                    আরবি, বাংলা, ইংরেজি - তিন ভাষায় ক্যালিগ্রাফি বিশেষজ্ঞ
                  </span>
                </div>

                {/* রেটিং */}
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400">
                    ৫.০ (১২০+ শিক্ষার্থী)
                  </span>
                </div>
              </div>
            </div>

            {/* ডান পাশ - মোটিভেশনাল টেক্সট */}
            <div className="bg-red-950 text-white rounded-xl shadow-lg p-8 border border-red-500">
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-2xl font-bold mb-4 text-center"
              >
                এসো, একসাথে গড়ে তুলি শিল্পের নতুন দিগন্ত
              </h3>
              <div
                style={{ fontFamily: banglaFont }}
                className="space-y-4 text-lg"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>কঠিনকে করি সহজ</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>সাধারণকে করি অসাধারণ</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>আপনার শিল্পীসত্তাকে জাগ্রত করুন</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>পেশাগত গাইডলাইন ও মেন্টরশিপ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* হেডিং সেকশন */}
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              আমার <span className="text-red-600">ক্যালিগ্রাফি পণ্য</span>
            </h2>

            <p
              style={{ fontFamily: banglaFont }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              পেশাদার ক্যালিগ্রাফি সরঞ্জাম দিয়ে আপনার শিল্পকে করুন আরও পরিপূর্ণ
            </p>
          </div>

          {/* শুধু ২টি প্রোডাক্ট */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 mb-4 text-sm leading-relaxed"
                  >
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-red-500">
                        {product.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    style={{ fontFamily: banglaFont }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    এখনই কিনুন
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* সব প্রোডাক্ট দেখার বাটন */}
          <div className="text-center">
            <Link href="/products">
              <button
                style={{ fontFamily: banglaFont }}
                className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
              >
                সব পণ্য দেখুন
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
