import styled from "styled-components";
import { Buttons } from "../../ui/Table";
import Button from "../../ui/Button";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TagColors } from "../../styles/Colors";
import ProductItemActions from "./ProductItemActions";

const StyledProductItem = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: white;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
`;

const Description = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 800;
`;

const Tag = styled.p`
    position: absolute;
    padding: .3rem .8rem;
    right: 2rem;
    top: 2rem;
    border-radius: 50rem;
    font-size: 1.2rem;
    ${(props) => TagColors[props.color]}
`

function ProductItem({ product }) {
  
  return (
    <StyledProductItem>
        <Tag color={product.availability === "skladom" ? "green" : "red"}>{product.availability}</Tag>
      <Image src={product.coverImage} alt={product.name} />
      <Description>
        <p>{product.name}</p>
        <p>{product.price}€</p>
      </Description>
      <ProductItemActions product={product}/>
    </StyledProductItem>
  );
}

export default ProductItem;
