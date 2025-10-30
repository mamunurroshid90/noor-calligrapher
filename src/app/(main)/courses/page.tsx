export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ডামি কোর্স কার্ড */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Next.js for Beginners</h2>
          <p className="text-gray-600">Learn the fundamentals of Next.js.</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Advanced Tailwind CSS</h2>
          <p className="text-gray-600">Master responsive design with Tailwind.</p>
        </div>
      </div>
    </div>
  );
}