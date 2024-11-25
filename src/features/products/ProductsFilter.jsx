import { FaLongArrowAltDown, FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";
import Button from "../../ui/Button";
import { TableHead, TableRow } from "../../ui/Table";

import { FaArrowDownAZ, FaArrowDownZA } from "react-icons/fa6";

function ProductsFilter() {
  return (
    <TableRow color="primary" grid="filter">
      <TableHead>Zoradiť</TableHead>
      <Button size="filter">
        cena{" "}
        <span>
          <FaLongArrowAltUp />
        </span>
      </Button>
      <Button size="filter">
        cena
        <span>
          <FaLongArrowAltDown />
        </span>
      </Button>
      <Button size="filter">
        A <FaLongArrowAltRight />Z
      </Button>
      <Button size="filter">
        Z <FaLongArrowAltRight /> A
      </Button>
      <TableHead>dostupnosť</TableHead>
      <Button size="filter">na objednávku</Button>
      <Button size="filter">skladom</Button>
      <Button size="filter">zľava</Button>
    </TableRow>
  );
}

export default ProductsFilter;
