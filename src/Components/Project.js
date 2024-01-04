import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Kanban",
      description:
        "A todo List with many feature to manage work and provide dynamic summary of the task",
      githubLink: "https://github.com/vigneshwaranR1812/Kanban",
      tags: ["Vue Js", "Node Js", "API", "Responsive", "Flask", "SQLite"],
      store: "Github",
    },
    {
      title: "Scanteen App",
      description:
        "A application to order food and pay using UPI. Provide money less and paper less transactions",
      githubLink: "https://github.com/vigneshwaranR1812/Scanteen-Backend",
      tags: [
        "API",
        "Node.js",
        "Express",
        "MongoDB",
        "Authentication",
        "Razor Pay",
      ],
      store: "Github",
    },
    {
      title: "MedHelp",
      description:
        "A application which recommends the required medicine based on user's condition and their personnel details",
      githubLink: "https://github.com/vigneshwaranR1812/MedHelp",
      tags: ["Java", "JSP", "MYSQL", "Servlet"],
      store: "Github",
    },
    {
      title: "LVEF",
      description:
        "Predicts the ejection fraction  (EF) of the person with the help of Echo cardiogram of the heart",
      githubLink:
        "https://colab.research.google.com/drive/1K-RR8afq3pdkLsiecBhqtMdihtU7cdyK?usp=sharing",
      tags: ["ML", "DL", "Video Processing", "Open CV"],
      store: "Colab",
    },
    {
      title: "Tea Leaf Disease Detection",
      description:
        "A application which detect the disease of the leaf with the help of leaf image and hosted in IBM cloud",
      githubLink:
        "https://github.com/naanmudhalvan-SI/PBL-NT-GP--8034-1681102989/tree/main/Final%20Deliverables",
      tags: ["Flask", "ML", "Python", "IBM Cloud"],
      store: "Github",
    },
    {
      title: "Blog Website",
      description:
        "A application where user can post blog, follow and un-follow other users to get respective feed",
      githubLink: "https://github.com/vigneshwaranR1812/Blog-Backend",
      tags: ["Node.js", "SQLite", "Vue Js", "Flask"],
      store: "Github",
    },

    // Add more projects as needed
  ];

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunkedProjects = chunkArray(projects, 4);
  return (
    <div id="project">
      <div className="py-16 min-h-[75vh] w-full mt-7 mb-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold  mt-10 mb-10 text-center text-header">
            My Projects
          </h2>
          {chunkedProjects.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-around mb-8">
              {row.map((card, index) => (
                <div
                  key={index}
                  className="bg-white m-4 p-6 rounded-md border-[0px] shadow-md sm:w-[80%] md:w-[40%] lg:w-[20%] flex flex-col justify-between transition-all duration-300 "
                >
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-primary">
                      {card.title}
                    </h2>
                    <div className="flex flex-wrap">
                      {card.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-light text-dark px-2 py-1 rounded-full text-xs mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{card.description}</p>
                  </div>
                  <button className="bg-light text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 mt-4">
                    View {card.store}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
