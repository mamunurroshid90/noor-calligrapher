"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Container from "@/components/ui/Container"; // Container import করুন

const Footer = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white border-t border-gray-700">
      <Container>
        {" "}
        {/* Container ব্যবহার করুন */}
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Noor Calligrapher Logo"
                  width={180}
                  height={70}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p
                style={{ fontFamily: banglaFont }}
                className="text-gray-300 mb-6 leading-relaxed text-lg"
              >
                শিল্পের ভাষা আপনার হাতের ছোঁয়ায়। আরবি, বাংলা ও ইংরেজি
                ক্যালিগ্রাফিতে পেশাদার প্রশিক্ষণ ও সরঞ্জাম।
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3"
              >
                দ্রুত লিঙ্ক
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    হোম
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    কোর্সসমূহ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    পণ্যসমূহ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/achievement"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    অর্জনসমূহ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3"
              >
                যোগাযোগ
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span style={{ fontFamily: banglaFont }}>০১৭৬১৭০০২৪৪</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span>contact@noorcalligrapher.com</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-red-400 mt-1" />
                  <span style={{ fontFamily: banglaFont }}>ঢাকা, বাংলাদেশ</span>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div>
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3"
              >
                নীতিমালা
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    গোপনীয়তা নীতি
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    সেবার শর্তাবলী
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    কুকি নীতি
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund"
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    রিফান্ড নীতি
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800/50 rounded-2xl p-8 mb-8 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  নিউজলেটার সাবস্ক্রাইব করুন
                </h3>
                <p style={{ fontFamily: banglaFont }} className="text-gray-300">
                  নতুন কোর্স ও অফার সম্পর্কে সর্বপ্রথম জানতে সাবস্ক্রাইব করুন
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  style={{ fontFamily: banglaFont }}
                  className="flex-1 bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                />
                <button
                  style={{ fontFamily: banglaFont }}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-red-500"
                >
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p
                style={{ fontFamily: banglaFont }}
                className="text-gray-400 text-center md:text-left"
              >
                &copy; {new Date().getFullYear()} নূর ক্যালিগ্রাফার। সকল অধিকার
                সংরক্ষিত।
              </p>
              <div className="flex items-center gap-6">
                <span
                  style={{ fontFamily: banglaFont }}
                  className="text-gray-400 text-sm"
                >
                  তৈরি হয়েছে ❤️ দিয়ে
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>{" "}
      {/* Container close */}
    </footer>
  );
};

export default Footer;
