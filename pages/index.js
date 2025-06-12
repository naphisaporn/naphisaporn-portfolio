// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Naphisaporn P.</h1>
          <p className="text-lg text-gray-600">
            UX/UI Designer & Content Creator with a passion for pets,
            storytelling, and smart design.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mb-12">
          {[
            "Portfolio",
            "UX/UI Design",
            "Review",
            "Rate Card",
            "Coding",
            "Affiliate",
            "Contact / Hire Me",
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="bg-white shadow-md rounded-xl py-4 px-6 hover:bg-gray-200 transition"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500">
          <p className="mb-2">Follow me on:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://www.facebook.com/npsppewpew/"
              target="_blank"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/pewpew.npsp/"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@pewpew.n"
              target="_blank"
              className="hover:underline"
            >
              TikTok
            </a>
            <a
              href="https://www.lemon8-app.com/@pewpew.n"
              target="_blank"
              className="hover:underline"
            >
              Lemon8
            </a>
            <a
              href="https://github.com/naphisaporn"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
