import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import { useProducts } from "../products/useProducts";
import { useDeleteProduct } from "../products/useDeleteProduct";
import UpdateProduct from "../products/UpdateProduct";

import {
  Buttons,
  Table,
  TableColumn,
  TableDiscount,
  TableHead,
  TableName,
  TablePrice,
  TableRow,
} from "../../ui/Table";

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import ProductsFilter from "../products/ProductsFilter";

const StyledTableProducts = styled.div`
  height: 50rem;
`

const Image = styled.img`
  width: 6rem;
  margin: auto;
`;

function TableProducts() {
  const { isLoading, products } = useProducts();
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("kategória") || "všetky";
  const avail = searchParams.get("filter") || "všetky"

  if (isLoading) return <Spinner />;

  let filteredProducts;
  
  if (category === "všetky") {filteredProducts = products}
  if (category !== "všetky") {filteredProducts = products.filter((product) => product.categoryName === category)}
  
  if(avail === "všetky") {filteredProducts}
  if (avail !== "všetky") {filteredProducts = filteredProducts.filter((product) => product.availability === avail)}

  
  // Sort
  const sortBy = searchParams.get("sort") || "price-asc"
  const [field, direction] = sortBy.split("-")
  const modifier = direction === "asc" ? 1 : -1
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (typeof a[field] === "number" && typeof b[field] === "number") {
      // Numeric comparison
      return (a[field] - b[field]) * modifier;
    } else if (typeof a[field] === "string" && typeof b[field] === "string") {
      // String comparison
      return a[field].localeCompare(b[field]) * modifier;
    } else {
      return 0; // Default case if types don't match
    }
  });

  return (
    <StyledTableProducts>
      <Heading font="hand">Správa produktov</Heading>

      <ProductsFilter/>

      <TableRow color="primary" grid="admin">
        <TableHead>fotka</TableHead>
        <TableHead>meno</TableHead>
        <TableHead>cena</TableHead>
        <TableHead>zľava</TableHead>
        <TableHead>dostupnosť</TableHead>
        <TableHead>akcie</TableHead>
      </TableRow>
      <Table type="manager">
        {sortedProducts.map((product) => (
          <TableRow key={product.name + product.id} grid="admin">
            <TableColumn>
              <Image src={product.coverImage} />
            </TableColumn>
            <TableName key={product.name}>{product.name}</TableName>
            <TablePrice key={product.price}>{product.price} €</TablePrice>
            <TableDiscount key={product.discount}>
              <span>{product.discount} €</span>
            </TableDiscount>
            <TableColumn key={product.availability}>{product.availability}</TableColumn>
            <Buttons>
              <UpdateProduct productToEdit={product} />
              <Button
                variation="secondary"
                size="small"
                onClick={() => deleteProduct(product.id)}
                disabled={isDeleting}
              >
                odstrániť
              </Button>
            </Buttons>
          </TableRow>
        ))}
      </Table>
    </StyledTableProducts>
  );
}

export default TableProducts;
