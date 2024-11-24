import styled, { css } from "styled-components";

import { useCategories } from "./useCategories";
import Spinner from "../../ui/Spinner";
import HeadingAdmin from "../../ui/HeadingAdmin";
import Button from "../../ui/Button";
import UpdateCategory from "../categories/Updatecategory";
import {useDeleteCategory} from "./useDeleteCategory"
import { Buttons, TableHead, TableRow } from "../../ui/Table";

const Table = styled.div`
  margin-top: 1rem;
  height: 48vh;
  overflow: scroll;
  padding-left: 1.5rem;
  padding: 2rem;
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

const Image = styled.img`
  width: 6rem;
  margin: auto;
`;

function TableProducts() {
  const { isLoading, categories } = useCategories();
  const {isDeleting, deleteCategory} = useDeleteCategory()

  if (isLoading) return <Spinner />;
  return (
    <>
      <HeadingAdmin>Správa produktov</HeadingAdmin>
      <TableRow color="primary" grid="categories">
        <TableHead>fotka</TableHead>
        <TableHead>názov</TableHead>
        <TableHead>akcie</TableHead>
        
      </TableRow>
      <Table>
        {categories.map((category) => (
          <TableRow key={category.name + category.id} grid="categories">
            <TableColumn>
              <Image src={category.coverImage} />
            </TableColumn>
            <TableName key={category.name}>{category.name}</TableName>
            <Buttons>
              <UpdateCategory productToEdit={category} />
              <Button
                variation="secondary"
                size="medium"
                onClick={() => deleteCategory(category.id)}
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
