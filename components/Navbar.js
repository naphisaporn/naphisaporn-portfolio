// components/Navbar.js
import Link from "next/link";
import { Home, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Naphisaporn P.</div>
        <div className="space-x-4 text-sm text-gray-800">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <Home size={20} />
            Home
          </Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/uxui">UX/UI</Link>
          <Link href="/review">Review</Link>
          <Link href="/ratecard">Rate Card</Link>
          {/* <Link href="/coding">Coding</Link> */}
          {/* <Link href="/affiliate">Affiliate</Link> */}
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <Mail size={20} />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
