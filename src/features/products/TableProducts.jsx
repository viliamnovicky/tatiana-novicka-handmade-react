import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import HeadingAdmin from "../../ui/HeadingAdmin";

import { useProducts } from "./useProducts";
import { useDeleteProduct } from "./useDeleteProduct";
import { useCategories } from "../categories/useCategories";
import UpdateProduct from "./UpdateProduct";
import { Buttons, TableHead, TableRow } from "../../ui/Table";

const Table = styled.div`
  margin-top: 1rem;
  height: 50vh;
  overflow: scroll;
  padding-left: 1.5rem;
`;

const TableColumn = styled.div`
  text-align: center;
  border-right: 1px solid var(--color-grey-300);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableName = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: left;
  padding-left: 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-grey-300);
`;

const TablePrice = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--color-grey-300);
`;

const TableDiscount = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-grey-300);
  & span {
    display: flex;
    background: #ceffd7;
    border-radius: 5rem;
    font-size: 1.6rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    margin: auto;
  }
`;

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
      <TableRow color="primary" grid="products">
        <TableHead>fotka</TableHead>
        <TableHead>meno</TableHead>
        <TableHead>cena</TableHead>
        <TableHead>zľava</TableHead>
        <TableHead>dostupnosť</TableHead>
        <TableHead>akcie</TableHead>
      </TableRow>
      <Table>
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
