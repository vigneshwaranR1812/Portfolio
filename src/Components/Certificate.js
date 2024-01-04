import React from "react";

const Certificate = () => {
  const cardsData = [
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      description:
        "The Hong Kong University of Science and Technology. Grade Achieved: 100%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/9095f0a4bebf47f60022800d27ec8d3b",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      description:
        "The Hong Kong University of Science and Technology. Grade Achieved: 100%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/4976e67a32c4d3619c5b07a273bfa25f",
    },
    {
      title: "Front-End Web Development with React",
      description:
        "The Hong Kong University of Science and Technology. Grade Achieved: 100%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/e7ec8ebdb0cccbdf5e120bc789cf0348",
    },
    {
      title: "Introduction to Java",
      description: "LearnQuest. Grade Achieved: 89.90%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/7b683e7936dc70320e47b7244e0767dd",
    },
    {
      title: "Building Web Applications in PHP",
      description: "University of Michigan. Grade Achieved: 96.36%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/a1e7ae1a4774dbe0b70cff8223b1152b",
    },
    {
      title:
        "Programming Foundations with JavaScript, HTML and CSS (With Honors)",
      description: "Duke University. Grade Achieved: 92.50%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/8f8aaffd7e6800472a1e59470b009247",
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      description: "Johns Hopkins University. Grade Achieved: 99.30%",
      tags: ["Coursera"],
      link: "https://coursera.org/share/b44e0f974246c81ed96feb71799db182",
    },
  ];
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };
  const cardRows = chunkArray(cardsData, 4);

  return (
    <div id="certificate" className="py-16 min-h-[75vh] w-full mb-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl  text-header font-bold mt-10 mb-10">
          Certifications
        </h2>
        {cardRows.map((row, rowIndex) => (
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
                  <p className="italic text-gray-500 mb-2">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>
                        {tag}
                        {tagIndex < card.tags.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                </div>
                <button
                  onClick={() => {
                    window.location.href = card.link;
                  }}
                  className="bg-light text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 mt-4"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
