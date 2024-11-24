import { useSearchParams } from "react-router-dom";
import Button from "../../ui/Button";
import Sidebar, { SidebarNavlink } from "../../ui/Sidebar";
import Spinner from "../../ui/Spinner";
import { useCategories } from "../categories/useCategories";

function ProductsSidebar() {
  const { categories, isLoading } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  function updateCategory(category) {
    searchParams.set("kategória", category); // Set the `category` parameter
    setSearchParams(searchParams); // Update the URL
  }

  const activeCategory = searchParams.get("kategória");

  return (
    <Sidebar>
      <Button
        className={!activeCategory || activeCategory === "všetky" ? "active" : ""}
        variation="sidebar"
        onClick={() => updateCategory("všetky")}
      >
        všetky produkty
      </Button>
      {categories?.map((category) => (
        <Button
          className={activeCategory === category.name ? "active" : ""}
          variation="sidebar"
          key={`link-to-${category.id}`}
          onClick={() => updateCategory(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </Sidebar>
  );
}

export default ProductsSidebar;
