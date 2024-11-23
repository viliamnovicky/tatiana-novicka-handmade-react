import styled from "styled-components";
import { useCategories } from "../categories/useCategories";
import ProductBox from "./ProductBox";
import Spinner from "../../ui/Spinner";

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  max-width: 130rem;
  gap: 1rem;
  height: auto;
  justify-content: center;
`;

function ProductsContainer({ children }) {
  const { isLoading, categories } = useCategories();

  if (isLoading) return <Spinner />;
  return (
    <StyledProductsContainer>
      {categories.map((category) => (
        <ProductBox src={category.coverImage} category={category.name} key={category.id} />
      ))}
    </StyledProductsContainer>
  );
}

export default ProductsContainer;
