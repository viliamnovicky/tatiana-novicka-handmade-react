import ProductsList from "./ProductsList";

import { Table } from "../../ui/Table";

import Heading from "../../ui/Heading";
import ProductsFilter from "./ProductsFilter";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { capitalize } from "../../utils/helpers";

const StyledProductsContainer = styled.div`
  height: 100%;
`;

function ProductsContainer() {
  const [searchParams] = useSearchParams();

  const headingTitle =
    !searchParams.get("kategória") || searchParams.get("kategória") === "všetky"
      ? "Všetky produkty"
      : capitalize(searchParams.get("kategória"));

  return (
    <StyledProductsContainer>
      <Heading font="hand">{headingTitle}</Heading>
      <ProductsFilter />
      <Table>
        <ProductsList />
      </Table>
    </StyledProductsContainer>
  );
}

export default ProductsContainer;
