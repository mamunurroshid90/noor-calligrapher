// src/app/(auth)/login/page.tsx
"use client";

import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Login form component
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const banglaFont = "'Hind Siliguri', sans-serif";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("দয়া করে ইমেইল এবং পাসওয়ার্ড দিন");
      setIsLoading(false);
      return;
    }

    try {
      // Demo login - Production e proper authentication implement korben
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Set authentication token
      localStorage.setItem("auth-token", "user-authenticated");

      // Get redirect path
      const redirectPath =
        localStorage.getItem("redirect-after-login") || redirect;
      localStorage.removeItem("redirect-after-login");

      // Show success message
      alert("লগইন সফল!");

      // Redirect to intended page
      window.location.href = redirectPath;
    } catch (error) {
      setError("লগইন ব্যর্থ। দয়া করে আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  // Demo login for testing
  const handleDemoLogin = () => {
    setEmail("demo@example.com");
    setPassword("password123");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-3 rounded-full text-lg mb-6 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 mr-2" />
            <span style={{ fontFamily: banglaFont }}>
              নূর ক্যালিগ্রাফারে স্বাগতম
            </span>
          </div>

          <h1
            className="text-4xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: banglaFont }}
          >
            লগইন করুন
          </h1>

          <p
            className="text-gray-400 text-lg"
            style={{ fontFamily: banglaFont }}
          >
            আপনার অ্যাকাউন্টে অ্যাক্সেস পান
          </p>

          {/* Redirect Hint */}
          {redirect === "/checkout" && (
            <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
              <p
                className="text-yellow-300 text-sm"
                style={{ fontFamily: banglaFont }}
              >
                💡 চেকআউট সম্পূর্ণ করতে লগইন প্রয়োজন
              </p>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
            <p
              className="text-red-300 text-center"
              style={{ fontFamily: banglaFont }}
            >
              {error}
            </p>
          </div>
        )}

        {/* Login Form */}
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 p-8 hover:border-red-500/30 transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-gray-300"
                style={{ fontFamily: banglaFont }}
              >
                ইমেইল এড্রেস
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="আপনার ইমেইল লিখুন"
                  style={{ fontFamily: banglaFont }}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-gray-300"
                style={{ fontFamily: banglaFont }}
              >
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  style={{ fontFamily: banglaFont }}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                />
                <span
                  className="ml-2 text-sm text-gray-400"
                  style={{ fontFamily: banglaFont }}
                >
                  আমাকে মনে রাখুন
                </span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-red-400 hover:text-red-300 transition-colors duration-300"
                style={{ fontFamily: banglaFont }}
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-red-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              style={{ fontFamily: banglaFont }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>লগইন হচ্ছে...</span>
                </>
              ) : (
                <>
                  <span>লগইন করুন</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Login Button (Remove in production) */}
          <div className="mt-4 text-center">
            <button
              onClick={handleDemoLogin}
              className="text-sm text-gray-400 hover:text-gray-300 underline transition-colors duration-300"
              style={{ fontFamily: banglaFont }}
            >
              ডেমো অ্যাকাউন্ট ব্যবহার করুন
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className="px-2 bg-gray-800 text-gray-400"
                style={{ fontFamily: banglaFont }}
              >
                অথবা
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-400" style={{ fontFamily: banglaFont }}>
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/register"
                className="font-semibold text-red-400 hover:text-red-300 transition-colors duration-300 inline-flex items-center gap-1"
                style={{ fontFamily: banglaFont }}
              >
                রেজিস্ট্রেশন করুন
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>

        {/* Extra Info */}
        <div
          className="mt-6 text-center text-gray-500 text-sm"
          style={{ fontFamily: banglaFont }}
        >
          <p>সুরক্ষিত লগইন সিস্টেম</p>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-white">
            <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
              লোড হচ্ছে...
            </p>
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
