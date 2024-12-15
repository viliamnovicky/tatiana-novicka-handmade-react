// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

const StyledCarousel = styled.div`
  height: 10rem;
  width: 100%;
`;

const CarouselImage = styled.img`
height: 100%;
border-radius: 1rem;
`

function Carousel({ product }) {
  return (
    <StyledCarousel>
      <Swiper
        style={{ height: "100%", width: "45rem" }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <CarouselImage src={product.coverImage} ></CarouselImage>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={product.coverImage} ></CarouselImage>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={product.coverImage} ></CarouselImage>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={product.coverImage} ></CarouselImage>
        </SwiperSlide>
      </Swiper>
    </StyledCarousel>
  );
}

export default Carousel;
