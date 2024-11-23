import styled, { css } from "styled-components";

import { useCategories } from "./useCategories";
import Spinner from "../../ui/Spinner";
import HeadingAdmin from "../../ui/HeadingAdmin";
import Button from "../../ui/Button";
import UpdateProduct from "../products/UpdateProduct";

const colors = {
  primary: css`
    background: var(--color-primary-400);
    border-radius: 1rem;
    color: var(--color-primary-50);
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const Table = styled.div`
  margin-top: 1rem;
  height: 50vh;
  overflow: scroll;
  padding-left: 1.5rem;
  padding: 2rem;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: 100rem;
  margin: auto;
  padding: 1rem;
  ${(props) => colors[props.color]}
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
  padding-left: 2rem;

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
  const { isLoading, categories } = useCategories();

  if (isLoading) return <Spinner />;
  return (
    <>
      <HeadingAdmin>Správa produktov</HeadingAdmin>
      <TableRow color="primary">
        <TableHead>fotka</TableHead>
        <TableHead>názov</TableHead>
        <TableHead>akcie</TableHead>
        
      </TableRow>
      <Table>
        {categories.map((category) => (
          <TableRow key={category.name + category.id}>
            <TableColumn>
              <Image src={category.coverImage} />
            </TableColumn>
            <TableName key={category.name}>{category.name}</TableName>
            <Buttons>
              <UpdateProduct productToEdit={category} />
              <Button
                variation="secondary"
                onClick={() => console.log(category.id)}
                // disabled={isDeleting}
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
