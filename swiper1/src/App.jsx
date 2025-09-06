import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  return (
    <div 
      style={{ 
        width: "850px", 
        margin: "50px auto", 
        padding: "20px",
        border: "3px solid #333",       
        borderRadius: "15px",           
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)", 
        backgroundColor: "#fff"         
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Clothes Slider</h2>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img src="\photo14.jpg" alt="Dress" style={{ width: "100%", borderRadius: "10px" }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="\photo18.jpg" alt="Dress" style={{ width: "100%", borderRadius: "10px" }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="\photo25.jpg" alt="Dress" style={{ width: "100%", borderRadius: "10px" }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="\photo38.jpg" alt="Dress" style={{ width: "100%", borderRadius: "10px" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;