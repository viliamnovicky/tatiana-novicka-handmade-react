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

const Image = styled.img`
  width: 6rem;
  margin: auto;
`;

function TableProducts() {
  const { isLoading, products } = useProducts();
  const { isDeleting, deleteProduct } = useDeleteProduct();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading font="hand">Spráava produktov</Heading>

      <TableRow color="primary" grid="filter">
        <TableHead>Zoradiť</TableHead>
        <Button size="medium">
          cena{" "}
          <span>
            <FaLongArrowAltUp />
          </span>
        </Button>
        <Button size="medium">
          cena
          <span>
            <FaLongArrowAltDown />
          </span>
        </Button>
        <TableHead>dostupnosť</TableHead>
        <Button size="medium">na objednávku</Button>
        <Button size="medium">skladom</Button>
      </TableRow>

      <TableRow color="primary" grid="admin">
        <TableHead>fotka</TableHead>
        <TableHead>meno</TableHead>
        <TableHead>cena</TableHead>
        <TableHead>zľava</TableHead>
        <TableHead>dostupnosť</TableHead>
        <TableHead>akcie</TableHead>
      </TableRow>
      <Table margin="left">
        {products.map((product) => (
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
    </>
  );
}

export default TableProducts;
