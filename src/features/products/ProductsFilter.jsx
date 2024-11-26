import { FaLongArrowAltDown, FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";
import Button from "../../ui/Button";
import { TableHead, TableRow } from "../../ui/Table";

import { useSearchParams } from "react-router-dom";

function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter = searchParams.get("filter");
  console.log(activeFilter)
  const activeSort = searchParams.get("sort");

  function handleSetParams(param, value) {
    searchParams.set(param, value);
    setSearchParams(searchParams)
  }
  return (
    <TableRow color="primary" grid="filter">
      <TableHead>Zoradiť</TableHead>
      <Button active={!activeSort || activeSort === "price-asc"} size="filter" onClick={() => handleSetParams("sort","price-asc")}>
        cena{" "}
        <span>
          <FaLongArrowAltUp />
        </span>
      </Button>
      <Button active={activeSort === "price-desc"} size="filter" onClick={() => handleSetParams("sort","price-desc")}>
        cena
        <span>
          <FaLongArrowAltDown />
        </span>
      </Button>
      <Button active={activeSort === "name-asc"} size="filter" onClick={() => handleSetParams("sort","name-asc")}>
        A <FaLongArrowAltRight />Z
      </Button>
      <Button active={activeSort === "name-desc"} size="filter" onClick={() => handleSetParams("sort","name-desc")}>
        Z <FaLongArrowAltRight /> A
      </Button>
      <TableHead>dostupnosť</TableHead>
      <Button active={!activeFilter || activeFilter ===  ("všetky")} size="filter" onClick={() => handleSetParams("filter", "všetky")}>všetky</Button>
      <Button active={activeFilter === "na objednávku"} size="filter" onClick={() => handleSetParams("filter", "na objednávku")}>na objednávku</Button>
      <Button active={activeFilter === "skladom" } size="filter" onClick={() => handleSetParams("filter", "skladom")}>skladom</Button>
      {/* <Button size="filter" onClick={() => handleSetParams("filter", "discount")}>zľava</Button> */}
    </TableRow>
  );
}

export default ProductsFilter;
