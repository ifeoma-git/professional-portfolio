type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-3">

          <a
            href={project.demo}
            target="_blank"
            className="flex-1 text-center bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="flex-1 text-center border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}