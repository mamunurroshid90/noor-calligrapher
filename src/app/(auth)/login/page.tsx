import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Log in to your account
        </h1>
        {/* এখানে লগইন ফর্ম কম্পোনেন্ট বসবে */}
        <form className="space-y-6">
           <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input id="email" name="email" type="email" required className="w-full mt-1 p-2 border rounded-md"/>
           </div>
           <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" required className="w-full mt-1 p-2 border rounded-md"/>
           </div>
           <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign in
           </button>
        </form>
         <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}