import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import HeadingAdmin from "../../ui/HeadingAdmin";

import { useProducts } from "./useProducts";
import { useDeleteProduct } from "./useDeleteProduct";
import { useCategories } from "../categories/useCategories";
import UpdateProduct from "./UpdateProduct";
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

const Image = styled.img`
  width: 6rem;
  margin: auto;
`;

function TableProducts() {
  const { isLoading, products } = useProducts();
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const { isLoading: isLoadingCategories, categories } = useCategories();

  if (isLoading) return <Spinner />;
  return (
    <>
      <HeadingAdmin>Správa produktov</HeadingAdmin>

      <TableRow color="primary" grid="sort">
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

      <TableRow color="primary" grid="products">
        <TableHead>fotka</TableHead>
        <TableHead>meno</TableHead>
        <TableHead>cena</TableHead>
        <TableHead>zľava</TableHead>
        <TableHead>dostupnosť</TableHead>
        <TableHead>akcie</TableHead>
      </TableRow>
      <Table margin="left">
        {products.map((product) => (
          <TableRow key={product.name + product.id} grid="products">
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
