export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* ডামি প্রোডাক্ট কার্ড */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">E-book: Mastering React</h2>
          <p className="text-gray-800 font-bold">$19.99</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">UI Kit Pro</h2>
          <p className="text-gray-800 font-bold">$49.00</p>
        </div>
      </div>
    </div>
  );
}