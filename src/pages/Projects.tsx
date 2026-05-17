import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-50 py-16">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold text-gray-900">
          Featured Projects
        </h1>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A collection of real-world applications showcasing my experience in
          frontend development, UI design, and full project delivery.
        </p>

      </div>

      {/* PROJECT GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid gap-8 md:grid-cols-2">

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

      </div>

    </section>
  );
}