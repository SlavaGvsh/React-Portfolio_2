import { ImArrowUpRight } from "react-icons/im";
import ServicesModal from "./servicesModal";
import { useState } from "react";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const ServiceItem = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
  };
  const closeModal = () => {
    setActiveIndex(null);
  };
  console.log(services);

  return (
    <>
      {services.map((service, index) => (
        <motion.li
          className="services-container"
          key={index}
          custom={index}
          variants={slideInVariants("top", 0.5, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="service-card">
            <service.icon className="service-icon" />
            <h3>{service.title}</h3>
            <div className="learn-more-btn" onClick={() => openModal(index)}>
              Learn More
              <ImArrowUpRight className="learn-more-icons" />
            </div>
          </div>
          <ServicesModal
            service={service}
            isActive={activeIndex === index}
            closeModal={closeModal}
          />
        </motion.li>
      ))}
    </>
  );
};

export default ServiceItem;
