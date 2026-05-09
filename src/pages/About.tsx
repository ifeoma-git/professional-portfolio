import profile from "../assets/profile.jpg";
export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          About Me
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Full-Stack Developer | Project Management | IT Support
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-semibold">
            My Journey
          </h2>

          <p className="mt-4 text-gray-700 leading-8">
            I am a web developer with over 10 years of experience building
            websites and software solutions using technologies such as
            Visual Basic .NET, JavaScript, React, Tailwind CSS, Python,
            MySQL, HTML, and CSS.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            My professional background also includes experience in
            Project Management, Customer Service, and IT Support,
            which has strengthened my communication, leadership,
            and problem-solving abilities.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            After working within the Nigeria Parliament and later relocating
            to Finland, I paused active software development for some time.
            In 2026, I returned fully to coding with a renewed focus on
            modern web technologies and continuous professional growth.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            I am currently based in Finland and actively seeking opportunities
            where I can contribute technical expertise, business understanding,
            and strong collaboration skills within modern development teams.
          </p>
        </div>

        {/* Right Side */}
        <div>

          {/* Skills */}
          <div className="flex justify-center mb-10">
  <img
    src={profile}
    alt="Profile"
    className="w-48 h-48 rounded-2xl object-cover shadow-lg"
  />
</div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">
              Technical Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Python",
                "MySQL",
                "HTML",
                "CSS",
                "Visual Basic .NET",
                "Git",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">
              Certifications
            </h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Cisco Certified Network Associate (CCNA)</li>
              <li>• Oracle Certified Associate (OCA)</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-2xl font-semibold">
              Languages
            </h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• English — Fluent</li>
              <li>• Finnish — Conversational / Developing Professional Proficiency</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}