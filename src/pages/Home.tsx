import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION (your existing component) */}
      <Hero />

      {/* QUICK CTA SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">

        <h2 className="text-2xl font-bold text-gray-900">
          Let’s build something great together
        </h2>

        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          I specialize in building modern web applications with React, TypeScript,
          and Tailwind CSS.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">

          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>

          <a
            href="YOUR_CV_LINK"
            target="_blank"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Download CV
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            className="text-blue-600 hover:underline px-6 py-3"
          >
            LinkedIn
          </a>

        </div>

      </div>

      {/* MINI SKILLS STRIP */}
      <div className="bg-white py-10 border-t">

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-6">

          <p className="text-gray-700 font-medium">React</p>
          <p className="text-gray-700 font-medium">TypeScript</p>
          <p className="text-gray-700 font-medium">Tailwind CSS</p>
          <p className="text-gray-700 font-medium">Node.js (Learning)</p>

        </div>

      </div>

    </div>
  );
}