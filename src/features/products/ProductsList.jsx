import styled from "styled-components";
import { Buttons, TableAvailability, TableColumn, TableName, TablePrice, TableRow } from "../../ui/Table";
import { useProducts } from "./useProducts";
import Button from "../../ui/Button";
import { MdAddShoppingCart } from "react-icons/md";
import Spinner from "../../ui/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: calc(100vw - 45rem);
  margin: auto;
  padding: 0;

  @media (max-width: 1365px) {
    max-width: 98vw;
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled.img`
  border-radius: 2rem;

  @media (max-width: 1365px) {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: calc(100% - 4rem);
  }
`;

function ProductsList() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("kategória") || "všetky";
  const avail = searchParams.get("filter") || "všetky";
  const { products, isLoading } = useProducts();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  let filteredProducts;

  if (category === "všetky") {
    filteredProducts = products;
  }
  if (category !== "všetky") {
    filteredProducts = products.filter((product) => product.categoryName === category);
  }

  if (avail === "všetky") {
    filteredProducts;
  }
  if (avail !== "všetky") {
    filteredProducts = filteredProducts.filter((product) => product.availability === avail);
  }

  // Sort
  const sortBy = searchParams.get("sort") || "price-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (typeof a[field] === "number" && typeof b[field] === "number") {
      // Numeric comparison
      return (a[field] - b[field]) * modifier;
    } else if (typeof a[field] === "string" && typeof b[field] === "string") {
      // String comparison
      return a[field].localeCompare(b[field]) * modifier;
    } else {
      return 0; // Default case if types don't match
    }
  });
  return (
    <StyledProductsList>
      {sortedProducts.map((product) => (
        // <TableRow height="ten" key={product.name + product.id} grid="products">
        //   <TableColumn>
        //     <Image src={product.coverImage} />
        //   </TableColumn>
        //   <TableName key={product.name}>{product.name}</TableName>
        //   <TablePrice key={product.price}>{product.price} €</TablePrice>
        //   {/* <TableDiscount key={product.discount}>
        //       <span>{product.discount} €</span>
        //     </TableDiscount> */}
        //   <TableAvailability key={product.availability}>{product.availability}</TableAvailability>
        //   <Buttons>
        //     <Button
        //       id={product.id}
        //       size="medium"
        //       key={product.name + "details"}
        //       onClick={() => navigate(`${product.slug}?kategória=${category}`)}
        //     >
        //       Detaily
        //     </Button>
        //     <Button variation="cart" key={product.name + "cart"}>
        //       <MdAddShoppingCart />
        //     </Button>
        //   </Buttons>
        // </TableRow>
        <ProductItem key={product.name} product={product}/>
      ))}
    </StyledProductsList>
  );
}

export default ProductsList;
