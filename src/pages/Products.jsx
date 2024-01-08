import ProductBox from "../ui/ProductBox";
import ProductsContainer from "../ui/ProductsContainer";
import Spinner from "../ui/Spinner";
import { useCategories } from "../features/categories/useCategories";

function Products() {
  const {
    isLoading,
    categories
  } = useCategories()

  console.log(categories)

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
