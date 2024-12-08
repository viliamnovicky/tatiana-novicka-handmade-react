import { FaLongArrowAltDown, FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";
import Button from "../../ui/Button";

import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledProductsFilter = styled.div`
  display: grid;
  max-width: calc(100vw - 45rem);
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
  background: var(--color-primary-400);
  color: var(--color-primary-50);
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  border-radius: 1rem;

  div {
      text-align: left;
    }

  @media (max-width: 1365px) {
    max-width: 98vw;
  }

  @media (max-width: 1050px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

const Head = styled.p`
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: flex-end;
`

function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter = searchParams.get("filter");
  console.log(activeFilter);
  const activeSort = searchParams.get("sort");

  function handleSetParams(param, value) {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  }
  return (
    <StyledProductsFilter>
      <Head>Zoradiť</Head>
      <Buttons>
        <Button
          active={!activeSort || activeSort === "price-asc"}
          size="filter"
          onClick={() => handleSetParams("sort", "price-asc")}
        >
          cena{" "}
          <span>
            <FaLongArrowAltUp />
          </span>
        </Button>
        <Button
          active={activeSort === "price-desc"}
          size="filter"
          onClick={() => handleSetParams("sort", "price-desc")}
        >
          cena
          <span>
            <FaLongArrowAltDown />
          </span>
        </Button>
        <Button
          active={activeSort === "name-asc"}
          size="filter"
          onClick={() => handleSetParams("sort", "name-asc")}
        >
          A <FaLongArrowAltRight />Z
        </Button>
        <Button
          active={activeSort === "name-desc"}
          size="filter"
          onClick={() => handleSetParams("sort", "name-desc")}
        >
          Z <FaLongArrowAltRight /> A
        </Button>
      </Buttons>
      <Head>dostupnosť</Head>
      <Buttons>
        <Button
          active={!activeFilter || activeFilter === "všetky"}
          size="filter"
          onClick={() => handleSetParams("filter", "všetky")}
        >
          všetky
        </Button>
        <Button
          active={activeFilter === "na objednávku"}
          size="filter"
          onClick={() => handleSetParams("filter", "na objednávku")}
        >
          na objednávku
        </Button>
        <Button
          active={activeFilter === "skladom"}
          size="filter"
          onClick={() => handleSetParams("filter", "skladom")}
        >
          skladom
        </Button>
      </Buttons>
      {/* <Button size="filter" onClick={() => handleSetParams("filter", "discount")}>zľava</Button> */}
    </StyledProductsFilter>
  );
}

export default ProductsFilter;
