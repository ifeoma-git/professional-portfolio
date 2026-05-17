import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          About Me
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Full-Stack Developer • React • TypeScript • Python • IT Support
        </p>
      </div>

      {/* MAIN */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-2xl font-semibold">
            My Journey
          </h2>

          <p className="mt-4 text-gray-700 leading-8">
            I am a software developer based in Finland with experience building
            web applications using React, TypeScript, Tailwind CSS, Python,
            MySQL, and legacy technologies like Visual Basic .NET.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            My background in IT Support, Project Management, and Customer Service
            has strengthened my ability to communicate clearly, solve problems
            efficiently, and work effectively in team environments.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            After gaining early professional experience in different environments,
            I took a break from active development and have now returned with a
            strong focus on modern full-stack development and continuous growth
            in software engineering.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            I am currently open to opportunities in frontend or full-stack
            development where I can contribute to real-world products and
            collaborate with modern engineering teams.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* PROFILE IMAGE */}
          <div className="flex justify-center mb-8">
            <img
              src={profile}
              alt="Profile"
              className="w-44 h-44 rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* SKILLS */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              Technical Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Python",
                "MySQL",
                "HTML",
                "CSS",
                "Git",
                "VB.NET",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">
              Certifications
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Cisco Certified Network Associate (CCNA)</li>
              <li>• Oracle Certified Associate (OCA)</li>
            </ul>
          </div>

          {/* LANGUAGES */}
          <div>
            <h2 className="text-2xl font-semibold">
              Languages
            </h2>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• English — Fluent</li>
              <li>• Finnish — Conversational / Developing</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}