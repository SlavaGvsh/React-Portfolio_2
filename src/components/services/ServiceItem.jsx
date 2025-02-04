import { ImArrowUpRight } from "react-icons/im";
import ServicesModal from "./servicesModal";
import { useState } from "react";

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
        <li className="services-container" key={index}>
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
        </li>
      ))}
    </>
  );
};

export default ServiceItem;
