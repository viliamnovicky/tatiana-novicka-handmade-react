import { MdAddShoppingCart } from "react-icons/md";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";


const StyledProductItemActions = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

function ProductItemActions({ product }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("kategória") || "všetky";

  return (
    <StyledProductItemActions>
      <Button
        id={product.id}
        size="medium"
        key={product.name + "details"}
        onClick={() => navigate(`${product.slug}?kategória=${category}`)}
      >
        Detaily
      </Button>
      <Button size="medium" variation={product.availability === "skladom" ? "cart" : "disabled"} key={product.name + "cart"}>
        <MdAddShoppingCart />
      </Button>
      <Button size="medium" variation="secondary" key={product.name + "cart"}>
      <FaQuestion />

      </Button>
    </StyledProductItemActions>
  );
}

export default ProductItemActions;
