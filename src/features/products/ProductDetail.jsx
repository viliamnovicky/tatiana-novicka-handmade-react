import styled from "styled-components";
import Button from "../../ui/Button";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import { useGetProduct } from "./useGetProduct";
import Spinner from "../../ui/Spinner";
import Carousel from "../../ui/Carousel";
import { SwiperSlide } from "swiper/react";

const StyledProductDetail = styled.div`
  position: relative;
`;

function ProductDetail() {
  const { productName } = useParams();
  console.log(productName);
  const { product, isLoading } = useGetProduct(productName);
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  return (
    <StyledProductDetail>
      <Button variation="back" onClick={() => navigate(-1)}>
        <FaLongArrowAltLeft />
      </Button>
      <Heading font="hand">{product.name}</Heading>
      <p>{product.description}</p>
      <p>{product.availability}</p>
      <p>{product.price}€</p>
      <Carousel>
        <SwiperSlide>
          <img src={product.coverImage} width="100%"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.coverImage} width="100%"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.coverImage} width="100%"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product.coverImage} width="100%"></img>
        </SwiperSlide>
      </Carousel>
    </StyledProductDetail>
  );
}

export default ProductDetail;
