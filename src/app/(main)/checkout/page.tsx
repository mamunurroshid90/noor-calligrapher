import CheckoutClient from "@/components/checkout/CheckoutClient";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10">Checkout</h1>
        <CheckoutClient />
      </div>
    </div>
  );
}