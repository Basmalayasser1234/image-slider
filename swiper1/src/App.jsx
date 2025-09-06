import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <div style={{ width: "800px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Clothes Slider</h2>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img 
            src="\photo14.jpg"
            alt="dress" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </SwiperSlide>

        <SwiperSlide>
          <img 
            src="\photo38.jpg" 
            alt="Dress" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </SwiperSlide>

        <SwiperSlide>
          <img 
            src="\photo18.jpg" 
            alt="long dress" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </SwiperSlide>

        <SwiperSlide>
          <img 
            src="\photo25.jpg" 
            alt="short dress" 
            style={{ width: "100%", borderRadius: "10px" }} 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;