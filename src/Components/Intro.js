import React from "react";

const Intro = () => {
  return (
    <div className=" mt-32 py-16 md:min-h-[60vh] lg:min-h-[78vh]" id="home">
      <div className="container mx-auto flex items-center my-auto">
        {/* Left Column - Text */}
        <div className="lg:w-1/2 lg:pr-16 text-left my-auto max-lg:text-center ">
          <h1
            className="text-7xl font-bold text-primary mb-4"
            style={{ fontFamily: "Lato" }}
          >
            I'm <span className="text-primary">Vigneshwaran Rajesh Kumar</span>
          </h1>
          <p className="text-2xl text-dark" style={{ fontFamily: "Lato" }}>
            A passionate creator crafting seamless applications with innovation
            and precision for transformative user experiences..
          </p>
          <div className="flex mt-5 max-lg:justify-center">
            <a
              href="https://www.linkedin.com/in/vigneshwaran-rajeshkumar-97a53b1ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-4 py-2 mr-3 hover:bg-dark hover:border-secondary transition-all duration-400 rounded-full"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vigneshwaranR1812"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-4 py-2  hover:bg-dark hover:border-secondary transition-all duration-400 rounded-full"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2">
          <img
            src="/Assests/Intro.png" // Replace with the actual path to your image
            alt="Intro_image"
            className="mx-auto max-lg:hidden"
            style={{ Width: "90%", margin: "auto" }} // Set a maximum width for the image
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
