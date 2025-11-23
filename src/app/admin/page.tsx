// src/app/admin/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Save,
  Plus,
  Trash2,
  Edit,
  X,
  Book,
  ShoppingBag,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import AdminRoute from "@/components/AdminRoute"; // Import করুন

interface Course {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  duration: string;
  level: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
}

interface ContentData {
  courses: Course[];
  products: Product[];
}

// Supported image formats
const SUPPORTED_FORMATS = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Image compression function
const compressImage = (
  file: File,
  maxWidth = 800,
  quality = 0.8
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    if (!ctx) {
      reject(new Error("Canvas context not available"));
      return;
    }

    img.onload = () => {
      // Calculate new dimensions
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          } else {
            reject(new Error("Compression failed"));
          }
        },
        "image/jpeg",
        quality
      );
    };

    img.onerror = () => {
      reject(new Error("Image loading failed"));
    };

    img.src = URL.createObjectURL(file);
  });
};

function AdminPanelContent() {
  const [data, setData] = useState<ContentData>({ courses: [], products: [] });
  const [activeTab, setActiveTab] = useState<"courses" | "products">("courses");
  const [editingItem, setEditingItem] = useState<Course | Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);

  const banglaFont = "'Hind Siliguri', sans-serif";

  // Load data from JSON file
  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  // Image upload function with compression
  const uploadImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      setUploading(true);

      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        reject(
          new Error(`ফাইলের সাইজ খুব বড়! সর্বোচ্চ 5MB পর্যন্ত অনুমোদিত।`)
        );
        setUploading(false);
        return;
      }

      // Check file format
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        reject(
          new Error(
            `অসমর্থিত ফাইল ফরম্যাট! শুধুমাত্র JPG, PNG, WEBP ফরম্যাট সাপোর্টেড।`
          )
        );
        setUploading(false);
        return;
      }

      // Auto-compress images larger than 1MB
      const processFile =
        file.size > 1 * 1024 * 1024
          ? compressImage(file).catch(() => file)
          : Promise.resolve(file);

      processFile
        .then((processedFile) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            const base64String = e.target?.result as string;
            resolve(base64String);
            setUploading(false);
          };

          reader.onerror = () => {
            reject(new Error("ফাইল পড়তে সমস্যা হয়েছে!"));
            setUploading(false);
          };

          reader.readAsDataURL(processedFile);
        })
        .catch((error) => {
          reject(error);
          setUploading(false);
        });
    });
  };

  // Handle file selection
  const handleFileSelect = async (file: File, item: Course | Product) => {
    try {
      const base64Image = await uploadImage(file);

      // Update the item with base64 image
      const updatedItem = { ...item, image: base64Image };

      if ("title" in item) {
        // It's a course
        setData((prev) => ({
          ...prev,
          courses: prev.courses.map((c) =>
            c.id === item.id ? (updatedItem as Course) : c
          ),
        }));
      } else {
        // It's a product
        setData((prev) => ({
          ...prev,
          products: prev.products.map((p) =>
            p.id === item.id ? (updatedItem as Product) : p
          ),
        }));
      }

      // If editing, update the form data too
      if (isEditing && editingItem?.id === item.id) {
        setEditingItem(updatedItem);
      }

      alert("ইমেজ সফলভাবে আপলোড হয়েছে!");
    } catch (error: any) {
      alert(`আপলোড ব্যর্থ: ${error.message}`);
    }
  };

  // Add new course
  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now(),
      title: "নতুন কোর্স",
      price: 0,
      description: "কোর্সের বিবরণ",
      image: "/images/default-course.jpg",
      duration: "৪ সপ্তাহ",
      level: "শুরু",
    };
    setData((prev) => ({
      ...prev,
      courses: [...prev.courses, newCourse],
    }));
    setEditingItem(newCourse);
    setIsEditing(true);
  };

  // Add new product
  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      name: "নতুন পণ্য",
      price: 0,
      description: "পণ্যের বিবরণ",
      image: "/images/default-product.jpg",
      category: "pens",
      inStock: true,
    };
    setData((prev) => ({
      ...prev,
      products: [...prev.products, newProduct],
    }));
    setEditingItem(newProduct);
    setIsEditing(true);
  };

  // Delete item
  const deleteItem = (id: number, type: "courses" | "products") => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      setData((prev) => ({
        ...prev,
        [type]: prev[type].filter((item) => item.id !== id),
      }));
    }
  };

  // Update item
  const updateItem = (updatedItem: Course | Product) => {
    const type = "title" in updatedItem ? "courses" : "products";
    setData((prev) => ({
      ...prev,
      [type]: prev[type].map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    }));
    setEditingItem(null);
    setIsEditing(false);
  };

  // Download JSON
  const downloadJSON = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-black mb-4"
            style={{ fontFamily: banglaFont }}
          >
            কন্টেন্ট ম্যানেজমেন্ট
          </h1>
          <p className="text-gray-400" style={{ fontFamily: banglaFont }}>
            কোর্স এবং পণ্য ডাটা এডিট করুন
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("courses")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === "courses"
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            style={{ fontFamily: banglaFont }}
          >
            <Book className="h-5 w-5" />
            কোর্স ({data.courses.length})
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === "products"
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            style={{ fontFamily: banglaFont }}
          >
            <ShoppingBag className="h-5 w-5" />
            পণ্য ({data.products.length})
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={activeTab === "courses" ? addCourse : addProduct}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition-all"
            style={{ fontFamily: banglaFont }}
          >
            <Plus className="h-5 w-5" />
            নতুন {activeTab === "courses" ? "কোর্স" : "পণ্য"} যোগ করুন
          </button>

          <button
            onClick={downloadJSON}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold transition-all"
            style={{ fontFamily: banglaFont }}
          >
            <Save className="h-5 w-5" />
            JSON ডাউনলোড করুন
          </button>
        </div>

        {/* Upload Info */}
        <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-4 mb-6">
          <h3
            className="font-bold text-blue-300 mb-2"
            style={{ fontFamily: banglaFont }}
          >
            ইমেজ আপলোড তথ্য:
          </h3>
          <ul className="text-sm text-blue-200 space-y-1">
            <li>✅ সাপোর্টেড ফরম্যাট: JPG, PNG, WEBP</li>
            <li>✅ সর্বোচ্চ সাইজ: 5MB</li>
            <li>✅ রিকমেন্ডেড: 800x600 pixels</li>
            <li>✅ অটো কম্প্রেশন: 1MB-এর উপর ইমেজগুলো অটোমেটিক কম্প্রেস হবে</li>
            <li>⚠️ বড় ইমেজ স্লো লোডিং করতে পারে</li>
          </ul>
        </div>

        {/* Edit Form Modal */}
        {isEditing && editingItem && (
          <EditForm
            item={editingItem}
            onSave={updateItem}
            onCancel={() => {
              setEditingItem(null);
              setIsEditing(false);
            }}
            onImageUpload={handleFileSelect}
            uploading={uploading}
            banglaFont={banglaFont}
          />
        )}

        {/* Content List */}
        <div className="grid gap-4">
          {activeTab === "courses"
            ? data.courses.map((course) => (
                <ContentItem
                  key={course.id}
                  item={course}
                  type="courses"
                  onEdit={() => {
                    setEditingItem(course);
                    setIsEditing(true);
                  }}
                  onDelete={() => deleteItem(course.id, "courses")}
                  onImageUpload={handleFileSelect}
                  uploading={uploading}
                />
              ))
            : data.products.map((product) => (
                <ContentItem
                  key={product.id}
                  item={product}
                  type="products"
                  onEdit={() => {
                    setEditingItem(product);
                    setIsEditing(true);
                  }}
                  onDelete={() => deleteItem(product.id, "products")}
                  onImageUpload={handleFileSelect}
                  uploading={uploading}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

// Content Item Component (আপনার previous code)
function ContentItem({
  item,
  type,
  onEdit,
  onDelete,
  onImageUpload,
  uploading,
}: any) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isCourse = type === "courses";

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file, item);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isBase64Image = item.image?.startsWith("data:image");

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex gap-4">
        <div className="relative group">
          <div
            className="w-24 h-24 bg-gray-700 rounded-lg overflow-hidden cursor-pointer border-2 border-dashed border-gray-600 hover:border-blue-500 transition-all"
            onClick={handleImageClick}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={isCourse ? item.title : item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <ImageIcon className="h-8 w-8" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Upload className="h-6 w-6 text-white" />
            </div>
            {isBase64Image && (
              <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-1 rounded">
                Base64
              </div>
            )}
          </div>
          {uploading && (
            <div className="absolute -bottom-2 left-0 right-0 bg-blue-500 h-1 animate-pulse rounded"></div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/jpeg,image/jpg,image/png,image/webp"
            className="hidden"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {isCourse ? item.title : item.name}
              </h3>
              <p
                className={`font-bold text-lg mb-2 ${
                  isCourse ? "text-red-400" : "text-green-400"
                }`}
              >
                ৳{item.price}
              </p>
              <p
                className="text-gray-400 mb-2"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {item.description}
              </p>
              {isCourse ? (
                <div className="flex gap-4 text-sm text-gray-500">
                  <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    সময়: {item.duration}
                  </span>
                  <span style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                    লেভেল: {item.level}
                  </span>
                </div>
              ) : (
                <div
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  ক্যাটাগরি: {item.category}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={onEdit}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                title="Edit"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={onDelete}
                className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Edit Form Component (আপনার previous code)
function EditForm({
  item,
  onSave,
  onCancel,
  onImageUpload,
  uploading,
  banglaFont,
}: any) {
  const [formData, setFormData] = useState(item);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await onImageUpload(file, item);
      } catch (error) {
        // Error is handled in parent
      }
    }
  };

  const isCourse = "title" in item;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-2xl border border-gray-600 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: banglaFont }}>
            {isCourse ? "কোর্স এডিট করুন" : "পণ্য এডিট করুন"}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label style={{ fontFamily: banglaFont }} className="block mb-2">
              ইমেজ
            </label>
            <div className="flex gap-4 items-start">
              <div
                className="relative group cursor-pointer"
                onClick={handleImageUploadClick}
              >
                <div className="w-32 h-32 bg-gray-700 rounded-lg overflow-hidden border-2 border-dashed border-gray-600 hover:border-blue-500 transition-all">
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                </div>
                {uploading && (
                  <div className="absolute -bottom-2 left-0 right-0 bg-blue-500 h-1 animate-pulse rounded"></div>
                )}
              </div>

              <div className="flex-1">
                <button
                  type="button"
                  onClick={handleImageUploadClick}
                  disabled={uploading}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-4 py-2 rounded-lg transition-all mb-2"
                  style={{ fontFamily: banglaFont }}
                >
                  <Upload className="h-4 w-4" />
                  {uploading ? "আপলোড হচ্ছে..." : "ইমেজ আপলোড করুন"}
                </button>
                <p
                  className="text-sm text-gray-400"
                  style={{ fontFamily: banglaFont }}
                >
                  সাপোর্টেড: JPG, PNG, WEBP | সর্বোচ্চ: 5MB
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  className="hidden"
                />
                <div className="mt-2">
                  <label style={{ fontFamily: banglaFont }} className="text-sm">
                    বা ইমেজ URL দিন:
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1 text-sm"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          {isCourse ? (
            <>
              <div>
                <label style={{ fontFamily: banglaFont }}>কোর্স টাইটেল</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                  required
                  style={{ fontFamily: banglaFont }}
                />
              </div>
              <div>
                <label style={{ fontFamily: banglaFont }}>দাম (৳)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseInt(e.target.value),
                    })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                  required
                />
              </div>
              <div>
                <label style={{ fontFamily: banglaFont }}>বিবরণ</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1 h-20"
                  required
                  style={{ fontFamily: banglaFont }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: banglaFont }}>সময়</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                    style={{ fontFamily: banglaFont }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: banglaFont }}>লেভেল</label>
                  <input
                    type="text"
                    value={formData.level}
                    onChange={(e) =>
                      setFormData({ ...formData, level: e.target.value })
                    }
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                    style={{ fontFamily: banglaFont }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <label style={{ fontFamily: banglaFont }}>পণ্যের নাম</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                  required
                  style={{ fontFamily: banglaFont }}
                />
              </div>
              <div>
                <label style={{ fontFamily: banglaFont }}>দাম (৳)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseInt(e.target.value),
                    })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                  required
                />
              </div>
              <div>
                <label style={{ fontFamily: banglaFont }}>বিবরণ</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1 h-20"
                  required
                  style={{ fontFamily: banglaFont }}
                />
              </div>
              <div>
                <label style={{ fontFamily: banglaFont }}>ক্যাটাগরি</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                  style={{ fontFamily: banglaFont }}
                >
                  <option value="pens">কলম</option>
                  <option value="inks">কালি</option>
                  <option value="papers">কাগজ</option>
                  <option value="kits">কিট</option>
                  <option value="brushes">ব্রাশ</option>
                  <option value="others">অন্যান্য</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) =>
                      setFormData({ ...formData, inStock: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <span style={{ fontFamily: banglaFont }}>স্টকে আছে</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured || false}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  <span style={{ fontFamily: banglaFont }}>ফিচার্ড</span>
                </label>
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-bold transition-all"
              style={{ fontFamily: banglaFont }}
            >
              সেভ করুন
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded-xl font-bold transition-all"
              style={{ fontFamily: banglaFont }}
            >
              বাতিল করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Main Export with AdminRoute
export default function AdminPage() {
  return (
    <AdminRoute>
      <AdminPanelContent />
    </AdminRoute>
  );
}
