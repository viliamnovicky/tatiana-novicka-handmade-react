import ProductsList from "./ProductsList";

import { Table } from "../../ui/Table";

import Heading from "../../ui/Heading";
import ProductsFilter from "./ProductsFilter";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { capitalize } from "../../utils/helpers";

const StyledProductsContainer = styled.div`
  max-height: calc(100vh - 24rem);
`;

function ProductsContainer() {
  const [searchParams] = useSearchParams();

  const headingTitle =
    !searchParams.get("kategória") || searchParams.get("kategória") === "všetky"
      ? "Všetky produkty"
      : capitalize(searchParams.get("kategória"));

  return (
    <StyledProductsContainer>
      <Heading as="h1" font="hand">{headingTitle}</Heading>
      <ProductsFilter />
      <Table>
        <ProductsList />
      </Table>
    </StyledProductsContainer>
  );
}

export default ProductsContainer;
