import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experience</h2>
              {/* <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p> */}
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
              <div className="item">
                {/* <img src={meter1} alt="Image" /> */}
                <h5>
                  Full Stack Developer | Integrify | Helsinki, Finland | May
                  2021 – December 2021
                  <p>
                    - Architected and developed a full-stack e-commerce
                    application utilizing the MERN stack (MongoDB, Express.js,
                    React.js, Node.js), resulting in a seamless, scalable, and
                    high-performing user experience.
                    <br />
                    - Engineered the front-end using React.js, implementing
                    features such as product search, user authentication, and
                    real-time updates for an interactive user interface.
                    <br />
                    - Leveraged Redux for state management, enhancing the
                    application's efficiency and maintainability.
                    <br />
                    - Developed a RESTful API using Node.js and Express.js,
                    facilitating functionalities like user authentication, order
                    management, and payment processing.
                    <br />- Utilized MongoDB for the database layer,
                    implementing efficient schemas and queries for fast
                    retrieval and storage of data.
                  </p>
                </h5>
                ----------------------------------------------------------------
              </div>
              <div className="item">
                {/* <img src={meter2} alt="Image" /> */}
                <h5>
                  Full Stack Developer | Miragel Oy | Helsinki, Finland |
                  January 2022 – August 2022
                  <p>
                    - Took the initiative in transforming an existing real
                    estate software solution into a web-based platform,
                    enhancing accessibility and user engagement.
                    <br />
                    - Utilized React.js and Redux.js for front-end development,
                    implementing a responsive and dynamic user interface that
                    improved user experience and interaction. <br />
                    - Employed TypeScript to bring strong typing and improved
                    maintainability to the front-end codebase, resulting in more
                    robust and error-free code.
                    <br />- Conducted regular code reviews and bug fixes.
                  </p>
                </h5>
                --------------------------------------------------------------------------------------------------------------------------------
              </div>
              <div className="item">
                {/* <img src={meter3} alt="Image" /> */}
                <h5>
                  CTO | Full Stack Developer, Board Member | Balticauto Oy |
                  Turku, Finland | September 2019 – Present
                  <p>
                    - Developed a van renting platform using MERN stack,
                    TypeScript, and Redux, enabling real-time booking and online
                    payments. <br />
                    - Integrated secure payment gateways and developed RESTful
                    APIs for seamless user experience.
                    <br />
                    - Utilized CI/CD pipelines and Agile workflow, managing
                    tasks and sprints via Jira.
                    <br />
                    - Collaborated with UI/UX designers to deliver a robust and
                    user-friendly application.
                    <br />- Conducted regular sprint reviews and agile
                    ceremonies, fostering a culture of continuous improvement
                    and adaptation to changing business requirements.
                  </p>
                </h5>
              </div>

              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
