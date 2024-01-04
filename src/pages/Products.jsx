import ProductBox from "../ui/ProductBox";
import ProductsContainer from "../ui/ProductsContainer";
import { getCategories } from "../services/apiCategories";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Products() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <ProductsContainer>
        {categories.map((category) => (
          <ProductBox src={category.coverImage} category={category.name} key={category.id} />
        ))}
      </ProductsContainer>
    </div>
  );
}

export default Products;
