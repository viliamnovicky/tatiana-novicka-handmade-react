import styled from "styled-components";
import Button from "../../ui/Button";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../ui/Heading";
import { useGetProduct } from "./useGetProduct";
import Spinner from "../../ui/Spinner";
import Carousel from "../../ui/Carousel";
import { SwiperSlide } from "swiper/react";
import { Buttons } from "../../ui/Table";

const StyledProductDetail = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-left: 1rem;

  h1:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
`;

const DetailsCont = styled.div`
  border-radius: 1rem;
  width: 100%;
`;

function ProductDetail() {
  const { productName } = useParams();
  console.log(productName);
  const { product, isLoading } = useGetProduct(productName);
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  return (
    <>
      <StyledProductDetail>
        <Heading font="hand" type="name">
          {product.name}
        </Heading>
        <Button variation="back" onClick={() => navigate(-1)}>
          <FaLongArrowAltLeft />
        </Button>
        <div>
          <CoverImage src={product.coverImage}></CoverImage>
          <Carousel product={product} />
        </div>
        <DetailsCont>
          <p>{product.description}</p>
          <p>{product.availability}</p>
          <p>{product.price}€</p>
          <Buttons>
            <Button variation="primary">Pridať do košíka</Button>
            <Button variation="secondary">dostupnosť</Button>
          </Buttons>
        </DetailsCont>
      </StyledProductDetail>
    </>
  );
}

export default ProductDetail;
