// pages/index.js

import { Github, Instagram} from "lucide-react";


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 text-center space-y-4">
      <h1 className="text-4xl font-bold">Naphisaporn P.</h1>
      <p className="text-lg text-gray-600">
        UX/UI Designer & Content Creator who loves pets, code & creative
        storytelling 🐾
      </p>
      <div className="flex justify-center space-x-3 mt-4">
        <a
          href="https://github.com/naphisaporn"
          target="_blank"
          className="underline text-blue-600"
        >
         <Github size={20} /> GitHub
        </a>
        <a
          href="https://www.instagram.com/pewpew.npsp/"
          target="_blank"
          className="underline text-pink-500"
        >
         <Instagram size={20} /> Instagram
        </a>
        <a
          href="https://www.tiktok.com/@pewpew.n"
          target="_blank"
          className="underline text-black"
        >
          TikTok
        </a>
      </div>
    </main>
  );
}
