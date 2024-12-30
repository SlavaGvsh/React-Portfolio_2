import SectionTitle from "../../components/sectionTitle/SectionTitle.jsx";
import Education from "./Education.jsx";
import Awords from "./Awords.jsx";
import Skills from "./Skills.jsx";

import WorkExperience from "./WorkExperience.jsx";
import "./Skills.css";

const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subTitle="Skills" />
        {/* <h2 className="inner-title">Skills</h2>
        <h3 className="inner-second-title">Skills</h3> */}
        <div className="inner-content">
          <div className="skills-description">
            <h3>Education & Skills</h3>
            <p>
              For more than 5 years our experts have been accomplishing enough
              with modern Web Development, new generation web and app
              programming language.
            </p>
          </div>
          <div className="skills-info education-all">
          <Education/>
          <Skills/>
            {/* <div className="education">
              <h4 className="label">Education</h4>
              <ul className="education-list">
                <li className="item">
                  <span className="year">2020-2021</span>
                  <p>
                    Ph.D in Horriblensess - Harvard University, Cambridge, MA
                  </p>
                </li>
                <li className="item">
                  <span className="year">2018-2019</span>
                  <p>Computer Science - Imperialize Technical Institute</p>
                </li>
                <li className="item">
                  <span className="year">2016-2018</span>
                  <p>Graphic Designer - Web Graphy, Los Angeles, CA</p>
                </li>
              </ul>
            </div> */}
            {/* <div className="education">
              <h4 className="label">Skills</h4>
              <ul className="bars">
                <li className="bar">
                  <div className="info">
                    <span>html</span>
                    <span>95%</span>
                  </div>
                  <div className="line html"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>css</span>
                    <span>85%</span>
                  </div>
                  <div className="line css"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Javascript</span>
                    <span>85%</span>
                  </div>
                  <div className="line javascript"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Jquery</span>
                    <span>80%</span>
                  </div>
                  <div className="line jquery"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>php</span>
                    <span>75%</span>
                  </div>
                  <div className="line php"></div>
                </li>
              </ul>
            </div> */}
            {/* <div className="education">
              <h4 className="label">Awards</h4>
              <ul className="education-list">
                <li className="item">
                  <span className="year">2021</span>
                  <p>
                    <span>Best Developer</span> - University Of Melbourne, NA
                  </p>
                </li>
                <li className="item">
                  <span className="year">2020</span>
                  <p>
                    <span>Best Writter</span> - Online Typodev Soluation Ltd.
                  </p>
                </li>
                <li className="item">
                  <span className="year">2019</span>
                  <p>
                    <span>Best Freelancer</span> - Fiver & Upwork Level 2 & Top
                    Rated
                  </p>
                </li>
              </ul>
            </div> */}
            <Awords/>
          </div>
          <div className="education work-exp">
            <h3 className="work-exp-title">Work & Experience</h3>
            <div className="skills-info">
              <WorkExperience/>
              {/* <div className="experience-card">
                <div className="upper">
                  <h3>Sr. Graphic Designer</h3>
                  <h5>Part Time | Office</h5>
                  <span>2020 - 2021</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Avada Theme.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Cr. Web Developer</h3>
                  <h5>Full Time | InHouse</h5>
                  <span>2019 - 2020</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">ib-themes ltd.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Jr. Web Developer</h3>
                  <h5>Full Time | Remote</h5>
                  <span>2018 - 2019</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Creative Gigs.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
