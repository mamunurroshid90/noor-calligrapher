// src/components/AdminRoute.tsx
"use client";

import { useState, useEffect } from "react";
import { Lock } from "lucide-react";

interface AdminRouteProps {
  children: React.ReactNode;
}

// আপনার secret password এখানে set করুন
const ADMIN_PASSWORD = "NijumMamun@7890"; // এই password টি change করুন

export default function AdminRoute({ children }: AdminRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check authentication on component mount
    const checkAuth = async () => {
      const savedAuth = sessionStorage.getItem("adminAuthenticated");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
      setIsChecking(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p
            style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            className="text-gray-300"
          >
            চেকিং...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div>
      {/* Logout Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all text-white text-sm shadow-lg border border-red-500"
          style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
        >
          <Lock className="h-4 w-4" />
          লগআউট
        </button>
      </div>
      {children}
    </div>
  );
}

// Login Form Component
function LoginForm({ onLogin }: { onLogin: (password: string) => boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (onLogin(password)) {
      setError("");
    } else {
      setError("ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।");
      setPassword("");
    }

    setIsLoading(false);
  };

  const banglaFont = "'Hind Siliguri', sans-serif";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md border border-gray-700 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1
            className="text-3xl font-black text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            style={{ fontFamily: banglaFont }}
          >
            অ্যাডমিন এক্সেস
          </h1>
          <p
            className="text-gray-400 text-lg"
            style={{ fontFamily: banglaFont }}
          >
            কন্টেন্ট ম্যানেজমেন্ট প্যানেল
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="text-white mb-3 block text-lg font-semibold"
              style={{ fontFamily: banglaFont }}
            >
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full p-4 bg-gray-700 border-2 border-gray-600 rounded-xl text-white focus:border-red-500 focus:outline-none transition-all text-lg"
              placeholder="পাসওয়ার্ড দিন..."
              required
              disabled={isLoading}
            />
            {error && (
              <p
                className="text-red-400 text-sm mt-3 flex items-center gap-2"
                style={{ fontFamily: banglaFont }}
              >
                <span className="text-lg">⚠️</span> {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-red-500 text-lg shadow-lg"
            style={{ fontFamily: banglaFont }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                লগইন হচ্ছে...
              </div>
            ) : (
              "লগইন করুন"
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/50 rounded-xl">
          <p
            className="text-yellow-200 text-sm text-center"
            style={{ fontFamily: banglaFont }}
          >
            ⚠️ এই পেজটি শুধুমাত্র অথোরাইজড অ্যাডমিনের জন্য
          </p>
        </div>
      </div>
    </div>
  );
}
