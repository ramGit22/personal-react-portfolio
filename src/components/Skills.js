import React from "react";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const experiences = [
    {
      company: "TEZTABLE AB",
      location: "SWEDEN",
      period: "FEBRUARY 2023 - JANUARY 2026",
      title: "Software Tester | Remote Work | Freelancer | 3 years",
      description: [
        "Software testing and quality assurance; bug reporting and verification of fixes."
      ]
    },
    {
      company: "BALTICAUTO OY",
      location: "FINLAND",
      period: "SEPTEMBER 2019 - AUGUST 2023",
      title: "Full Stack Developer | Founder | 4 years",
      description: [
        "Built a van rental platform: real-time booking and online payment.",
        "Implemented full-stack features (UI flows, APIs, database operations) and maintained the product end-to-end.",
        "Used Jira for task management and progress tracking; regular syncs and continuous improvement."
      ]
    },
    {
      company: "MIRAGEL / INTEGRIFY OY",
      location: "HELSINKI, FINLAND",
      period: "MAY 2021 - AUGUST 2022",
      title: "Full Stack Developer | 1.5 Years",
      description: [
        "Built an e-commerce application with MERN stack (MongoDB, Express.js, React, Node.js).",
        "Implemented the front page with React and key features such as product search and user login.",
        "Modernized an existing real estate program into a web application, improving usability and expanding accessibility.",
        "Utilized Redux for state management, improving performance and making the codebase easier to maintain."
      ]
    },
    {
      company: "LYYTI OY",
      location: "TURKU, FINLAND",
      period: "MARCH 2023 - JUNE 2023",
      title: "Frontend Developer | Intern | 4 months",
      description: [
        "Developed and improved websites with Next.js.",
        "Built reusable and accessible UI components with Material UI.",
        "Identified and fixed bugs, improving application functionality and user experience.",
        "Participated in design, code review sessions, and daily team meetings (Agile) to support development."
      ]
    }
  ];

  return (
    <section className="skill" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experience</h2>
              {experiences.map((exp, index) => (
                <div className="item" key={index}>
                  <h5>
                    {exp.title} | {exp.company} | {exp.location} | {exp.period}
                    <p>
                      {exp.description.map((bullet, bulletIndex) => (
                        <React.Fragment key={bulletIndex}>
                          - {bullet}
                          {bulletIndex < exp.description.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
