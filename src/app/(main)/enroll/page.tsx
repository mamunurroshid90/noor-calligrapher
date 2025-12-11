// src/app/(main)/enroll/page.tsx
"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import {
  CheckCircle,
  Phone,
  User,
  MapPin,
  School,
  CreditCard,
  Shield,
} from "lucide-react";

const EnrollPage = () => {
  const banglaFont = "'Hind Siliguri', sans-serif";
  const [formData, setFormData] = useState({
    fullName: "",
    paymentLast4Digits: "",
    address: "",
    mobileNumber: "",
    institutionName: "",
    previousCourse: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      console.log("Form submitted:", formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
              <span style={{ fontFamily: banglaFont }}>
                🎨 অনলাইন কোর্সে ভর্তির নির্দেশিকা
              </span>
            </div>

            <h1
              style={{ fontFamily: banglaFont }}
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            >
              <span className="text-red-600">ক্যালিগ্রাফি কোর্সে</span> ভর্তি
              হোন
            </h1>

            <p
              style={{ fontFamily: banglaFont }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              সহজ ২টি ধাপে ভর্তি সম্পন্ন করুন
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Payment Instructions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Step 1: Payment */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <span className="text-red-600 font-bold text-lg">১</span>
                  </div>
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-xl font-bold text-gray-900"
                  >
                    🔹 ধাপ ১: পেমেন্ট
                  </h3>
                </div>

                <p
                  style={{ fontFamily: banglaFont }}
                  className="text-gray-700 mb-4"
                >
                  Send Money ব্যবহার করে ভর্তি ফি পাঠান
                </p>

                <div className="space-y-4">
                  {/* বিকাশ */}
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CreditCard className="h-5 w-5 text-green-600" />
                      </div>
                      <h4
                        style={{ fontFamily: banglaFont }}
                        className="font-bold text-gray-900"
                      >
                        বিকাশ (Personal)
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-green-700">
                      ০১৮৮৬২৬২৫০১
                    </p>
                  </div>

                  {/* নগদ */}
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                      </div>
                      <h4
                        style={{ fontFamily: banglaFont }}
                        className="font-bold text-gray-900"
                      >
                        নগদ (Personal)
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-blue-700">
                      ০১৬৮৮২৬২৫০১
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-sm text-yellow-800"
                  >
                    💡 পেমেন্টের পর লাস্ট ৪ ডিজিট মনে রাখুন
                  </p>
                </div>
              </div>

              {/* Step 2: Form */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <span className="text-blue-600 font-bold text-lg">২</span>
                  </div>
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-xl font-bold text-gray-900"
                  >
                    🔹 ধাপ ২: ফরম পূরণ করুন
                  </h3>
                </div>

                <p style={{ fontFamily: banglaFont }} className="text-gray-700">
                  ডান পাশের ফরমটি পূরণ করুন
                </p>
              </div>

              {/* Privacy Note */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-xl font-bold text-gray-900"
                  >
                    📌 নোট
                  </h3>
                </div>

                <p style={{ fontFamily: banglaFont }} className="text-gray-700">
                  আপনার তথ্য সম্পূর্ণ গোপন রাখা হবে।
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white">
                <h3
                  style={{ fontFamily: banglaFont }}
                  className="text-xl font-bold mb-4 flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  সাহায্যের জন্য কল করুন
                </h3>
                <p className="text-2xl font-bold">০১৬৮৮২৬২৫০১</p>
                <p
                  style={{ fontFamily: banglaFont }}
                  className="text-sm mt-2 opacity-90"
                >
                  সকাল ১০টা - রাত ১০টা
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-green-200 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3
                    style={{ fontFamily: banglaFont }}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    ✅ আবেদন সফলভাবে জমা হয়েছে!
                  </h3>
                  <p
                    style={{ fontFamily: banglaFont }}
                    className="text-gray-600 mb-6"
                  >
                    আমরা শীঘ্রই আপনার প্রদত্ত মোবাইল নম্বরে যোগাযোগ করব।
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4
                      style={{ fontFamily: banglaFont }}
                      className="font-bold text-gray-900 mb-3"
                    >
                      আপনার তথ্য:
                    </h4>
                    <div className="text-left space-y-2">
                      <p>
                        <strong>নাম:</strong> {formData.fullName}
                      </p>
                      <p>
                        <strong>মোবাইল:</strong> {formData.mobileNumber}
                      </p>
                      <p>
                        <strong>পেমেন্ট ডিজিট:</strong>{" "}
                        {formData.paymentLast4Digits}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        paymentLast4Digits: "",
                        address: "",
                        mobileNumber: "",
                        institutionName: "",
                        previousCourse: "",
                      });
                    }}
                    style={{ fontFamily: banglaFont }}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-lg transition-colors"
                  >
                    নতুন আবেদন করুন
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <User className="h-6 w-6 text-red-600" />
                    </div>
                    <h2
                      style={{ fontFamily: banglaFont }}
                      className="text-2xl font-bold text-gray-900"
                    >
                      ভর্তি ফরম
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        <User className="h-4 w-4 inline mr-2 text-red-500" />
                        পূর্ণ নাম *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                      />
                    </div>

                    {/* Payment Last 4 Digits */}
                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        <CreditCard className="h-4 w-4 inline mr-2 text-red-500" />
                        পেমেন্ট নাম্বারের লাস্ট ৪ ডিজিট *
                      </label>
                      <input
                        type="text"
                        name="paymentLast4Digits"
                        value={formData.paymentLast4Digits}
                        onChange={handleChange}
                        required
                        maxLength={4}
                        pattern="[0-9]{4}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="পেমেন্টের শেষ ৪টি সংখ্যা"
                      />
                      <p
                        className="text-sm text-gray-500 mt-1"
                        style={{ fontFamily: banglaFont }}
                      >
                        বিকাশ/নগদ পেমেন্টের শেষ ৪টি সংখ্যা
                      </p>
                    </div>

                    {/* Address */}
                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        <MapPin className="h-4 w-4 inline mr-2 text-red-500" />
                        ঠিকানা *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="আপনার সম্পূর্ণ ঠিকানা"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        <Phone className="h-4 w-4 inline mr-2 text-red-500" />
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{11}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="০১XXXXXXXXX"
                      />
                    </div>

                    {/* Institution Name */}
                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        <School className="h-4 w-4 inline mr-2 text-red-500" />
                        শিক্ষা প্রতিষ্ঠানের নাম (যদি থাকে)
                      </label>
                      <input
                        type="text"
                        name="institutionName"
                        value={formData.institutionName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="বিদ্যালয়/কলেজ/বিশ্ববিদ্যালয়ের নাম"
                      />
                    </div>

                    {/* Previous Course */}
                    <div>
                      <label
                        className="block text-gray-700 font-medium mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        <School className="h-4 w-4 inline mr-2 text-red-500" />
                        পূর্বে করা কোর্সের নাম (যদি থাকে)
                      </label>
                      <input
                        type="text"
                        name="previousCourse"
                        value={formData.previousCourse}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                        placeholder="আগে করা কোর্সের নাম"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{ fontFamily: banglaFont }}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            সাবমিট হচ্ছে...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-6 w-6" />
                            আবেদন জমা দিন
                          </>
                        )}
                      </button>

                      <p
                        style={{ fontFamily: banglaFont }}
                        className="text-center text-gray-500 text-sm mt-4"
                      >
                        ফরম জমা দিলেই আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ
                        করব
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EnrollPage;
