import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getProducts } from "../services/apiProducts";
import Spinner from "./Spinner";
import Button from "./Button";

const Table = styled.table`
  height: 100%;
  margin-top: 2.5rem;
`;

const TableTh = styled.th`
  text-align: center;
`;
const TableTr = styled.tr``;

const TableTd = styled.td`
  text-align: center;
  padding: 0.5rem 0;
  font-weight: 400;
  font-size: 1.6rem;
`;

const TableTdName = styled.td`
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: left;
  padding-left: 2rem;
`;

const TableTdPrice = styled.td`
  text-align: center;
  padding: 2rem 0;
  font-weight: 600;
  font-size: 1.6rem;
`;

const TableTdDiscount = styled.td`
  background: #ceffd7;
  border-radius: 5rem;
  font-size: 1.6rem;
  text-align: center;
  width: 7rem;
  height: 2rem;
  border: 1rem solid var(--color-grey-100);
`;

const Image = styled.img`
  width: 6rem;
  margin: auto;
`;

const Buttons = styled.td`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 30rem;
  height: 100%;

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
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Spinner />;
  return (
    <Table>
      <TableTr>
        <TableTh>fotka</TableTh>
        <TableTh>meno</TableTh>
        <TableTh>kategória</TableTh>
        <TableTh>popis</TableTh>
        <TableTh>cena</TableTh>
        <TableTh>zľava</TableTh>
        <TableTh>dostupnosť</TableTh>
      </TableTr>
      {products.map((product) => (
        <TableTr key={product.name + product.id}>
          <TableTd>
            <Image src={product.coverImage} />
          </TableTd>
          <TableTdName key={product.name}>{product.name}</TableTdName>
          <TableTd key={product.category}>{product.category}</TableTd>
          <TableTd key={product.description}>{product.description}</TableTd>
          <TableTdPrice key={product.price}>{product.price} €</TableTdPrice>
          <TableTdDiscount key={product.discount}>{product.discount} €</TableTdDiscount>
          <TableTd key={product.availability}>{product.availability}</TableTd>
          <Buttons>
            <Button>upraviť</Button>
            <Button variation="secondary">odstrániť</Button>
          </Buttons>
        </TableTr>
      ))}
    </Table>
  );
}

export default TableProducts;
