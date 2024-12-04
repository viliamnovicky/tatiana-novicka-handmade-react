import styled from "styled-components";

import { useCategories } from "./useCategories";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import UpdateCategory from "../categories/Updatecategory";
import {useDeleteCategory} from "./useDeleteCategory"
import { Buttons, Table, TableColumn, TableHead, TableRow } from "../../ui/Table";
import Heading from "../../ui/Heading";

const TableName = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: left;
  padding-left: 2rem;
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
  const {isDeleting, deleteCategory, error} = useDeleteCategory()

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading font="hand">Správa kategórií</Heading>
      <TableRow color="primary" grid="categories">
        <TableHead>fotka</TableHead>
        <TableHead>názov</TableHead>
        <TableHead>akcie</TableHead>
        
      </TableRow>
      <Table type="manager">
        {categories.map((category) => (
          <TableRow key={category.name + category.id} grid="categories" >
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
