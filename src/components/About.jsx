import React, { useState } from "react";

const About = () => {
  const [isEducation, setIsEducation] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Tailwind",
  ];
  const education = [
    {
      year: "JUNE 2021-2025",
      name: "Silveroak University | B.tech | Computer Engineering",
      score: "8.23 SPI",
    },
    {
      year: "MAY 2021",
      name: "Gayatri Vidhyalaya | HSC",
      score: "85.90%",
    },
    {
      year: "MARCH 2019",
      name: "Ankur Vidhyalaya | GSEB",
      score: "74.86%",
    },
  ];

  return (
    <div
      id="about"
      className="bg-[#d8d2da] min-h-screen py-4 px-4 md:px-20 lg:px-36 place-content-center"
    >
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <img src="user.png" alt="User Image" className="rounded-lg" />
        </div>
        <div className="sm:w-2/3 sm:px-4 space-y-4">
          <div className="text-3xl md:text-5xl font-semibold">About Me</div>
          <p className="md:w-10/12 text-justify text-[#753842]">
            I am currently pursuing my B.Tech in (3rd year)computer Engineering
            from SilverOak University.I am looking for an internship opportunity
            where I can further expand my practical skills and contribute to
            real-world projects, I am excited to gain hands-on experience and
            make a meaningful impact as a frontend developer intern.
          </p>
          {/* Switch between Education and Skills */}
          <div className="flex gap-4">
            <div
              className={`cursor-pointer hover:text-rose-500 group text-lg ${
                isEducation ? "" : "text-rose-500"
              }`}
              onClick={() => setIsEducation(!isEducation)}
            >
              Skills
              <span
                className={`block ${
                  isEducation ? "w-0" : "w-1/2"
                } transition-all duration-500 delay-100 h-0.5 bg-rose-600 group-hover:w-1/2`}
              ></span>
            </div>
            <div
              className={`cursor-pointer hover:text-rose-500 group text-lg ${
                isEducation ? "text-rose-500" : ""
              }`}
              onClick={() => setIsEducation(!isEducation)}
            >
              Education
              <span
                className={`block ${
                  isEducation ? "w-1/2" : "w-0"
                } transition-all duration-500 delay-100 h-0.5 bg-rose-600 group-hover:w-1/2`}
              ></span>
            </div>
          </div>

          {/* Show Education or Skills */}
          {isEducation ? (
            <>
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="text-lg font-semibold text-[#b54769]">
                    {edu.name}
                  </div>
                  <div className="text-[#753842]">{edu.year}</div>
                  <div className="text-[#753842]">{edu.score}</div>
                </div>
              ))}
            </>
          ) : (
            <>
              {skills.map((skill, index) => (
                <li key={index} className="list-none text-[#b54769]">
                  {skill}
                </li>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
