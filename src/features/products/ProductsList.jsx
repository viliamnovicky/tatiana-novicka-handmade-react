import styled from "styled-components";
import {
  Buttons,
  TableColumn,
  TableName,
  TablePrice,
  TableRow,
} from "../../ui/Table";
import { useProducts } from "./useProducts";
import Button from "../../ui/Button";
import { MdAddShoppingCart } from "react-icons/md";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

const Image = styled.img`
  border-radius: 2rem;
  width: 30rem;
  filter: blur(0rem) brightness(1);
`;

function ProductsList() {

  const [searchParams] = useSearchParams();
  const category = searchParams.get("kategória") || "všetky";
  const { products, isLoading } = useProducts();

  if (isLoading) return <Spinner />;
  
  let filteredProducts;
  
  if (category === "všetky") {filteredProducts = products}
  if (category !== "všetky") {filteredProducts = products.filter((product) => product.categoryName === category)}
  
  return (
    <>
      {
        filteredProducts.map((product) => (
          <TableRow height="ten" key={product.name + product.id} grid="products">
            <TableColumn>
              <Image src={product.coverImage} />
            </TableColumn>
            <TableName key={product.name}>{product.name}</TableName>
            <TablePrice key={product.price}>{product.price} €</TablePrice>
            {/* <TableDiscount key={product.discount}>
              <span>{product.discount} €</span>
            </TableDiscount> */}
            <TableColumn key={product.availability}>{product.availability}</TableColumn>
            <Buttons>
              <Button size="medium">Detaily</Button>
              <Button variation="cart">
                <MdAddShoppingCart />
              </Button>
            </Buttons>
          </TableRow>
        ))}
    </>
  );
}

export default ProductsList;
