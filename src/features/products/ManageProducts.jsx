import styled from "styled-components";
import TableProducts from "../dashboard/AdminProducts";
import NewProduct from "./NewProduct";
import Buttons from "../../ui/Buttons";

function ManageProducts() {
  return (
    <>
      <TableProducts />
      <NewProduct />
    </>
  );
}

export default ManageProducts;
