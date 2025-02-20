import { services } from "../../data/services";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceItem from "./serviceItem";
import "./Services.css";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle title="Services" subTitle="Services" />
        {/* <h2 className="inner-title">Services</h2>
        <h3 className="inner-second-title">Services</h3> */}
        <div className="services-wrapper">
          <motion.h3
            className="services-description"
            custom={0}
            variants={slideInVariants("left", 0.5, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            What I provide
          </motion.h3>
          <ul className="services-list">
            <ServiceItem services={services} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
