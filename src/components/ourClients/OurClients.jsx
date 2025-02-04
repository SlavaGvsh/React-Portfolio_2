import { clientsData } from "../../data/clientsData.js";
import SectionTitle from "../sectionTitle/SectionTitle.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ourClients.css";

const ourClients = () => {
  return (
    <section className="section our-client" id="clients">
      <div className="container flex-center">
        <SectionTitle title="Our Clients" subTitle="Our Clients" />
        <div className="our-client-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="client-swiper"
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {clientsData.map((client) => (
              <SwiperSlide key={client.id}>
                <div
                  className="swiper-slide swiper-client-block"
                  key={client.id}
                >
                  <div className="client-img">
                    <img src={client.img} alt="client1" />
                  </div>
                  <div className="client-details">
                    <p>{client.text}</p>
                    <h3>{client.name}</h3>
                    <span>{client.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper client-swiper">
            <div className="swiper-wrapper">
              {/* <div className="swiper-slide swiper-client-block">
                   <div className="client-img">
                       <img src="./img/client2.webp" alt="client1"/>
                   </div>
                   <div className="client-details">
                       <p>Hi, I’m Aria Collins and I am designer & developer who dream making the world
                           better place by products. I am also very active for international clients.</p>
                       <h3>Cillian Metcalfe</h3>
                       <span>Graphic Designer</span>
                   </div>
                 </div>
                 <div className="swiper-slide swiper-client-block">
                   <div className="client-img">
                       <img src="./img/client3.webp" alt="client3">
                   </div>
                   <div className="client-details">
                       <p>Hi, I’m Aria Collins and I am designer & developer who dream making the world
                           better place by products. I am also very active for international clients.</p>
                       <h3>Kianna Baird</h3>
                       <span>App Developer</span>
                   </div>
                 </div> */}
            </div>
            {/* <div className="swiper-button-next">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </div> */}
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </section>
  );
};

export default ourClients;
