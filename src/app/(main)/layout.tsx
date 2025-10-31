// ফাইল: app/(main)/layout.tsx

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SideCart from "@/components/cart/slideCart";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        {children}
        <SideCart />
      </main>
      <Footer />
    </div>
  );
}