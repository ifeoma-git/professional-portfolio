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
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-2 text-gray-600">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          <a href={project.github} target="_blank" className="text-blue-600">
            GitHub
          </a>
          <a href={project.demo} target="_blank" className="text-blue-600">
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}