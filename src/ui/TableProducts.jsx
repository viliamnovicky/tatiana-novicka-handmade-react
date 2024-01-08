import styled from "styled-components";
import Spinner from "./Spinner";
import Button from "./Button";
import HeadingAdmin from "./HeadingAdmin";

import { useProducts } from "../features/products/useProducts";
import { useDeleteProduct } from "../features/products/useDeleteProduct";

const Table = styled.div`
  margin-top: 1rem;
  height: 50vh;
  overflow: scroll;
  padding-left: 1.5rem;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 2fr;
  align-items: center;
  max-width: 150rem;
  margin: auto;
`;

const TableColumn = styled.div`
  text-align: center;
  border-right: 1px solid var(--color-grey-300);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableHead = styled.div`
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 1rem;
  font-weight: 500;
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

const Buttons = styled.td`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: auto;
  height: 7rem;

  & button {
    height: 4rem;
    width: 13rem;
    display: flex;
    align-self: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

function TableProducts() {
  const {isLoading, products} = useProducts()
  const {isDeleting, deleteProduct} = useDeleteProduct()

  if (isLoading) return <Spinner />;
  return (
    <>
      <HeadingAdmin>Správa produktov</HeadingAdmin>
      <TableRow>
        <TableHead>fotka</TableHead>
        <TableHead>meno</TableHead>
        <TableHead>cena</TableHead>
        <TableHead>zľava</TableHead>
        <TableHead>dostupnosť</TableHead>
        <TableHead></TableHead>
      </TableRow>
    <Table>
      {products.map((product) => (
        <TableRow key={product.name + product.id}>
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
            <Button>upraviť</Button>
            <Button variation="secondary" onClick={() => deleteProduct(product.id)} disabled={isDeleting}>
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
