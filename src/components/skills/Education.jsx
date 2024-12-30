import { education } from "../../data/edutation.js";



const Education = () => {
  return (
    <div className="education">
      <h4 className="label">Education</h4>
      <ul className="education-list">
        {education.map((item, index) => (
          <li className="item" key={index}>
            <span className="year">{item.year}</span>
            <p>
              {item.degree} - {item.institution}
            </p>
          </li>
        ))}
        {/* <li className="item">
          <span className="year">2020-2021</span>
          <p>Ph.D in Horriblensess - Harvard University, Cambridge, MA</p>
        </li>
        <li className="item">
          <span className="year">2018-2019</span>
          <p>Computer Science - Imperialize Technical Institute</p>
        </li>
        <li className="item">
          <span className="year">2016-2018</span>
          <p>Graphic Designer - Web Graphy, Los Angeles, CA</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Education;
