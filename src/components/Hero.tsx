import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-white">

      <div className="text-center max-w-3xl">

        {/* BADGE */}
        <div className="inline-block mb-4 px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
          Frontend Developer • React • TypeScript • Tailwind
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Building Modern Web Apps That Feel Fast, Clean & Scalable
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          I’m a frontend developer based in Finland, focused on building
          responsive and user-friendly web applications using React,
          TypeScript, and Tailwind CSS. I enjoy turning ideas into real,
          working products.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/ifeoma-git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ifeomaonyenwenwankwo"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Download CV
          </a>

          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>

        </div>

        {/* SMALL SOCIAL PROOF LINE */}
        <p className="mt-10 text-sm text-gray-400">
          Open to Frontend / Full-Stack opportunities in Europe 🇫🇮
        </p>

      </div>
    </section>
  );
}