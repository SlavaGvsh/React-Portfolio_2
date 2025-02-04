import {useState} from "react";
import PortfolioModal from "./PortfolioModal";  

const PortfolioItem = ({ item }) => {
   const [isOpenModal, setIsOpenModal] = useState(false)
   const handleModal = () => {
       setIsOpenModal(!isOpenModal);
   }
   const closeModal = () => {
       setIsOpenModal(false);
   }
  return (
    <div className="portfolio-img-card" >
      <div className="img-card" onClick={handleModal}>
        <div className="overlay"></div>
        <div className="info">
          <h3>{item.title}</h3>
          <span>{item.category}</span>
        </div>
        <img src={item.imageScr} alt={item.title} />
      </div>
      {isOpenModal && <PortfolioModal item={item} closeModal={closeModal} isOpenModal={isOpenModal} />}
    </div>
  );
};

export default PortfolioItem;
