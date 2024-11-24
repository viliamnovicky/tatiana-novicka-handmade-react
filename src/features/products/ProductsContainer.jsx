import styled from "styled-components";
import ProductList from "./ProductList";

import { Table, TableHead, TableRow } from "../../ui/Table";
import Button from "../../ui/Button";

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";


function ProductsContainer({ children }) {

  return (
    <>
    <Table>
      <TableRow color="primary" grid="sort">
        <TableHead>Zoradiť</TableHead>
        <Button size="medium">cena <span><FaLongArrowAltUp /></span>
        </Button>
        <Button size="medium">cena<span><FaLongArrowAltDown /></span></Button>
        <TableHead>dostupnosť</TableHead>
        <Button size="medium">na objednávku</Button>
        <Button size="medium">skladom</Button>
      </TableRow>
      <ProductList/>
    </Table>
    </>
  );
}

export default ProductsContainer;
