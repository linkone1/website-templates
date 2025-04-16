import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Braining Co.",
  description: "The braining company home",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold">
              <span className="text-black">The </span>
              <span className="text-red-500">Braining</span>
              <span className="text-black"> Co.</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/billing" className="text-gray-600 hover:text-gray-900">Billing</Link>
            <Link href="/plans" className="text-gray-600 hover:text-gray-900">Plans</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">The <span className="text-red-400">Braining</span> Co.</h3>
            <p className="text-gray-600">Empowering traders with innovative insights and strategies.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/billing" className="text-gray-600 hover:text-blue-500 transition-colors">Billing</Link></li>
              <li><Link href="/plans" className="text-gray-600 hover:text-blue-500 transition-colors">Plans</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
            <a href="mailto:contact@thebraining.co" className="text-gray-600 hover:text-blue-500 transition-colors">
              contact@thebraining.co
            </a>
            <a href="https://www.google.com/maps/place/350+5th+Ave..." className="text-gray-600 block mt-2">
              350 Fifth Avenue, Suite 3300
            </a>
            <a href="tel:+15063005049" className="text-gray-600">+1 (506) 300-5049</a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} The Braining Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white min-h-screen`}>
        <Navbar />
        <main className="pt-16 bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
