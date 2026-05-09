import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Full-Stack Developer
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          10+ years of experience building scalable web applications.
          Currently focused on React, Tailwind, and Python.
          Based in Finland and open to opportunities.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            LinkedIn
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Download CV
          </a>

          <Link
            to="/projects"
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Contact Me
          </Link>

        </div>

      </div>
    </section>
  );
}