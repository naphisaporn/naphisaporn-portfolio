import { Briefcase, Palette, Code, Star, Mail, Wrench } from "lucide-react";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next()
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [slider])

  return (
    <>
      {/* Responsive Navbar */}
      <nav className="bg-white shadow fixed w-full z-10 top-0 left-0">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-indigo-600 text-lg">Naphisaporn</span>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className="hidden md:flex gap-6 text-sm text-gray-700">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#uxui" className="hover:text-indigo-600">UX/UI</a></li>
            <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
            <li><a href="#coding" className="hover:text-indigo-600">Coding</a></li>
            <li><a href="#review" className="hover:text-indigo-600">Review</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <ul className="flex flex-col gap-2 text-gray-700">
              <li><a href="#about" className="hover:text-indigo-600">About</a></li>
              <li><a href="#uxui" className="hover:text-indigo-600">UX/UI</a></li>
              <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
              <li><a href="#coding" className="hover:text-indigo-600">Coding</a></li>
              <li><a href="#review" className="hover:text-indigo-600">Review</a></li>
              <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      <main className="px-6 py-32 space-y-24 max-w-4xl mx-auto text-gray-800 scroll-smooth">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">Hi, I’m Naphisaporn P.</h1>
          <p className="text-gray-600 text-lg">UX/UI Designer • Developer • Reviewer</p>
        </section>

        {/* About Section */}
        <section id="about">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
            <Briefcase size={20} /> About Me
          </h2>
          <p className="text-gray-600">
            I'm a passionate UX/UI designer and front-end developer who loves blending design and technology. 
            With hands-on experience in research, analysis, and product reviews, I also have strong skills in visual editing, Canva, Power BI, and coding. 
            I enjoy building intuitive, user-friendly interfaces and creating content that inspires.
          </p>
          <a href="/portfolio" className="text-indigo-500 hover:underline">View full portfolio</a>
        </section>

        {/* UX/UI */}
        <section id="uxui">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
            <Palette size={20} /> UX/UI Design
          </h2>
          <p className="text-gray-600">Sample design projects from Figma</p>
          <a href="/uxui" className="text-indigo-500 hover:underline">See more</a>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
            <Wrench size={20} /> Skills
          </h2>
          <p className="text-gray-600 mb-4">Key skills used in my work</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <li className="bg-white shadow p-3 rounded">🎨 Figma / UX Research</li>
            <li className="bg-white shadow p-3 rounded">💻 HTML / CSS / Tailwind</li>
            <li className="bg-white shadow p-3 rounded">⚛️ React / Next.js</li>
            <li className="bg-white shadow p-3 rounded">🧠 Power BI</li>
            <li className="bg-white shadow p-3 rounded">🖌️ Canva & Photo Editing</li>
            <li className="bg-white shadow p-3 rounded">🎞️ Video Editing</li>
          </ul>
        </section>

        {/* Coding */}
        <section id="coding">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
            <Code size={20} /> Coding
          </h2>
          <p className="text-gray-600 mb-4">Projects using Next.js, React, and more</p>

          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide p-4 bg-white rounded shadow">
              <img src="/images/project1.png" alt="Project 1" className="rounded shadow mb-2" />
              <h3 className="font-semibold text-indigo-600">Internal Company Dashboard</h3>
              <p className="text-sm text-gray-500 italic">* Not for public release</p>
            </div>
            <div className="keen-slider__slide p-4 bg-white rounded shadow">
              <img src="/images/project2.png" alt="Project 2" className="rounded shadow mb-2" />
              <h3 className="font-semibold text-indigo-600">Event Registration System</h3>
              <p className="text-sm text-gray-500 italic">* Internal use only</p>
            </div>
          </div>

          <a href="/coding" className="text-indigo-500 hover:underline block mt-4">GitHub</a>
        </section>

        {/* Review */}
        <section id="review">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
            <Star size={20} /> Review
          </h2>
          <p className="text-gray-600">Product reviews I’ve created</p>
          <a href="/review" className="text-indigo-500 hover:underline">See all</a>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-700">
            <Mail size={20} /> Contact / Hire Me
          </h2>
          <p className="text-gray-600">Interested in working together? Let’s connect!</p>
          <a href="/contact" className="text-indigo-500 hover:underline">Get in touch</a>
        </section>

        {/* Footer */}
        <footer className="border-t mt-20 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Naphisaporn P. — All rights reserved.
        </footer>
      </main>
    </>
  );
}
