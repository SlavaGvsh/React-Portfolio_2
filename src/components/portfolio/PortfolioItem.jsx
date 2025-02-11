import { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation.js";

const PortfolioItem = ({ item, index }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <motion.div
      className="portfolio-img-card"
      custom={index}
      variants={slideInVariants("top", 0.2, 50, true)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="img-card" onClick={handleModal}>
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imageScr} alt={item.title} />
      </div>
      {isOpenModal && (
        <PortfolioModal
          item={item}
          closeModal={closeModal}
          isOpenModal={isOpenModal}
        />
      )}
    </motion.div>
  );
};

export default PortfolioItem;
