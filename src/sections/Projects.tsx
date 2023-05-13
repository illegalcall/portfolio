import { ProjectCard } from "../components/ProjectCard";
import { projects as data } from "../data";
import { useEffect, useState } from "react";
import { FilterButton } from "../components/FilterButton";
import { IProject } from "../types";
import { tags } from "../data";

export const Projects = () => {
  const [tag, setTag] = useState<string>("all");
  const [projects, setProjects] = useState<IProject[]>(data);

  useEffect(() => {
    setProjects(
      data.filter((project) => {
        return project.tags.includes(tag);
      })
    );
  }, [tag]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center px-8 py-24 snap-start snap-always add-bg md:px-32 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center max-w-xl">
        <p className="mb-6 text-3xl font-bold md:text-4xl">Projects</p>
        <FilterButton selectedTag={tag} tags={tags} setTag={setTag} />
        <div className="flex w-full">
          <div className="mr-4 border border-gray-400 border-2-2"></div>
          <div className="w-full">
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
