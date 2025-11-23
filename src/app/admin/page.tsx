"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2, Edit, X, Book, ShoppingBag } from "lucide-react";

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
}

interface ContentData {
  courses: Course[];
  products: Product[];
}

export default function AdminPanel() {
  const [data, setData] = useState<ContentData>({ courses: [], products: [] });
  const [activeTab, setActiveTab] = useState<"courses" | "products">("courses");
  const [editingItem, setEditingItem] = useState<Course | Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const banglaFont = "'Hind Siliguri', sans-serif";

  // Load data from JSON file
  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  // Add new course
  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now(),
      title: "নতুন কোর্স",
      price: 0,
      description: "কোর্সের বিবরণ",
      image: "/images/default-course.jpg",
      duration: "4 weeks",
      level: "Beginner",
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
      category: "Pens",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
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

        {/* Edit Form Modal */}
        {isEditing && editingItem && (
          <EditForm
            item={editingItem}
            onSave={updateItem}
            onCancel={() => {
              setEditingItem(null);
              setIsEditing(false);
            }}
            banglaFont={banglaFont}
          />
        )}

        {/* Content List */}
        <div className="grid gap-4">
          {activeTab === "courses"
            ? data.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        {course.title}
                      </h3>
                      <p className="text-red-400 font-bold text-lg mb-2">
                        ৳{course.price}
                      </p>
                      <p className="text-gray-400 mb-2">{course.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>Duration: {course.duration}</span>
                        <span>Level: {course.level}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(course);
                          setIsEditing(true);
                        }}
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteItem(course.id, "courses")}
                        className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : data.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: banglaFont }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-green-400 font-bold text-lg mb-2">
                        ৳{product.price}
                      </p>
                      <p className="text-gray-400 mb-2">
                        {product.description}
                      </p>
                      <div className="text-sm text-gray-500">
                        Category: {product.category}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(product);
                          setIsEditing(true);
                        }}
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteItem(product.id, "products")}
                        className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

// Edit Form Component
function EditForm({ item, onSave, onCancel, banglaFont }: any) {
  const [formData, setFormData] = useState(item);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const isCourse = "title" in item;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-2xl border border-gray-600">
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
                />
              </div>
              <div>
                <label style={{ fontFamily: banglaFont }}>ক্যাটাগরি</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
                />
              </div>
            </>
          )}

          <div>
            <label style={{ fontFamily: banglaFont }}>ইমেজ URL</label>
            <input
              type="text"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mt-1"
            />
          </div>

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
