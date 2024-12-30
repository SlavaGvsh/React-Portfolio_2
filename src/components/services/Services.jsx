import { services } from "../../data/services";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceItem from "./serviceItem";
import "./Services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
      <SectionTitle title="Services" subTitle="Services" />
        {/* <h2 className="inner-title">Services</h2>
        <h3 className="inner-second-title">Services</h3> */}
        <div className="services-wrapper">
          <h3 className="services-description">What I provide</h3>
          <ul className="services-list">
            <ServiceItem services={services} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
