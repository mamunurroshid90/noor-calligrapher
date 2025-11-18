// src/app/(auth)/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements - Layout e rakhi */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-3/4 left-1/3 w-56 h-56 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
