import React from "react";

const Project = () => {
  const projects = [
    {
      name: "Amazon Clone",
      image: "amazonclone.png",
      link: "https://amazonclone12x.netlify.app/",
    },
    {
      name: "Form Validation",
      image: "formvalidation.jpg",
      link: "https://formvalidationx2.netlify.app/",
    },
    {
      name: "Text to Speech converter",
      image: "text-to-speech.jpeg",
      link: "https://text-to-speech-converterx2.netlify.app/",
    },
  ];
  return (
    <div
      id="project"
      className="bg-[#d8d2da] py-8 sm:py-20 px-4 md:px-20 lg:px-36 space-y-8"
    >
      <div className="text-3xl md:text-5xl font-semibold">My Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-16">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={index}
            className="p-8 rounded-lg h-full bg-cover bg-center bg-no-repeat aspect-video group overflow-hidden relative"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <span className="block absolute -bottom-4 transition-all duration-500 delay-100 bg-rose-600  group-hover:h-full text-center place-content-center w-full left-0 group-hover:bottom-0 h-0 bg-opacity-80">
              {project.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
