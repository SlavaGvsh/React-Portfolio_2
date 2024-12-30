import { FaXmark } from "react-icons/fa6";

const PortfolioModal = ({ item, closeModal, isOpenModal }) => {
  // console.log(item);

  return (
    <div
      onClick={closeModal}
      className={`portfolio-model ${isOpenModal ? "active" : ""}`}
    >
      <div
        className="portfolio-model-body"
        onClick={(e) => e.stopPropagation()}
      >
        <FaXmark className="portfolio-close-btn" onClick={closeModal} />
        <h3>{item.title}</h3>
        <img src={item.imageScr} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default PortfolioModal;
