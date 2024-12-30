import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ServicesModal = ({ service, isActive, closeModal }) => {
  return (
    <>
      <div className={`service-modal ${isActive ? "active" : ""}`}>
        <div className="service-modal-body">
          <FaXmark className="modal-close-btn" onClick={closeModal} />

          <h3>{service.title}</h3>
          <h4>{service.subtitle}</h4>
          <p>{service.description}</p>
          <h4>What I provide</h4>
          <ul>
            {service.list.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="service-check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServicesModal;
