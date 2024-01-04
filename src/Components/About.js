import React from "react";
const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Redux",
  "Responsive Design",
  "Java",
  "MongoDB",
  "MySQL",
  "Express Js",
];
const About = () => {
  return (
    <div id="about" className="bg-light py-16 md:min-h-[80vh] lg:min-h-[95vh]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl text-header font-bold mt-10 mb-10">About Me</h2>
        <div className="max-w-7xl mt-10 mx-auto bg-white rounded-lg shadow-md p-6">
          <img
            src="/Assests/about.png" // Replace with the actual path to your image
            alt="Intro_image"
            className="mx-20 max-md:hidden"
            style={{ Width: "21%", height: "30%", margin: "auto" }}
          />
          <p className="text-gray-700 mb-4">
            Hi, I'm passionate about creating web applications that deliver a
            seamless user experience. With expertise in React, JavaScript, and
            other modern technologies, I strive for excellence in every project.
            As a dedicated web developer with a profound passion for crafting
            seamless digital experiences, I bring a blend of creativity and
            technical proficiency to every project. My educational background is
            in
            <b> B.E. Computer Science, Madras Institute of Technology</b>{" "}
            coupled with a keen interest in new technologies related to software
            development positions me as a versatile professional committed to
            pushing the boundaries of innovation in the ever-evolving world of
            technology.
          </p>

          <div className="w-[70%] mx-auto flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-secondary text-white px-4 py-2 rounded-full m-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
