import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact">
      {" "}
      <footer className="bg-header  text-white py-12">
        <div className="container  w-[70%] mx-auto flex flex-wrap items-center justify-between">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
            <p className="text-white-500 mb-2">
              Let's build something amazing together!
            </p>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <p className="text-white-500">(+91) 7305152540</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <p className="text-white-500">
                Vigneshwaran.viacky1812@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <FaLinkedinIn className="mr-2" />
              <a
                href="https://www.linkedin.com/in/vigneshwaran-rajeshkumar-97a53b1ba/"
                className="text-white-500 no-underline"
              >
                linkedin.com/Vigneshwaran Rajeshkumar
              </a>
            </div>
            {/* <div className="flex items-center">
              <FaTwitter className="mr-2" />
              <p className="text-white-500">@yourtwitterhandle</p>
            </div> */}
            <div className="flex items-center">
              <FaGithub className="mr-2" />
              <a
                href="https://github.com/vigneshwaranR1812"
                className="text-white-500 no-underline"
              >
                github.com/vignwshwaranR
              </a>
            </div>
          </div>

          <div className="text-right max-md:hidden">
            <div className="flex items-center mb-4">
              <p className="text-2xl font-bold mr-2">🚀</p>
              <p className="text-white-500">
                "Innovation distinguishes between a leader and a follower."
              </p>
            </div>
            <p className="text-white-500">
              Designed and built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
