import styled, { css } from "styled-components";

const colors = {
  primary: css`
    background: var(--color-primary-400);
    border-radius: 1rem;
    color: var(--color-primary-50);
  `,
  secondary: css`
    background: var(--color-secondary-400);
    border-radius: 1rem;
    color: var(--color-secondary-50);
  `,
};

const grids = {
  products: css`
    grid-template-columns: 1fr 1.5fr 1fr 1fr 2fr;

    @media (max-width: 1365px) {
      grid-template-columns: 1fr;
      height: auto;
    }
  `,
  admin: css`
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 2fr;
  `,
  categories: css`
    grid-template-columns: 1fr 1fr 1fr;
  `,
  filter: css`
    display: flex;
    align-items: center;
    justify-content: space-evenly !important;
  `,
};
const margins = {
  left: css`
    margin-left: 1.5rem;
  `,
};

const heights = {
  ten: css`
    height: 12rem;
  `,
};

const types = {
  manager: css`
    max-height: calc(100vh - 50rem);
  `,
};

export const Table = styled.div`
  margin-top: 1rem;
  max-height: calc(100vh - 38rem);
  overflow-y: scroll;
  padding-left: 1.5rem;
  padding: 1rem;
  margin-left: 1.5rem;
  ${(props) => margins[props.margin]}
  ${(props) => types[props.type]}

  @media (max-width: 1365px) {
    padding-left: 0rem;
    padding: 0rem;
    margin-left: 0rem;
  }
`;

export const TableRow = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  max-width: 100rem;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  ${(props) => colors[props.color]}
  ${(props) => grids[props.grid]}
  ${(props) => heights[props.height]}

  @media (max-width: 1365px) {
    width: 90vw;
  }
`;

export const TableColumn = styled.div`
  text-align: center;
  border-right: 1px solid var(--color-grey-300);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1365px) {
    width: 90vw;
    border-right: none;
    height: 35rem;
  }
`;
export const TableAvailability = styled.div`
  text-align: center;
  border-right: 1px solid var(--color-grey-300);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1365px) {
    position: absolute;
    width: auto;
    border-right: none;
    height: auto;
    background: var(--color-secondary-100);
    padding: .2rem .8rem;
    border-radius: 50rem;
    font-size: 1.2rem;
    color: var(--color-secondary-950);
    top: 3rem;
    right: 3rem;
    height: auto;
  }
`;

export const TableHead = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
`;

export const TableName = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: left;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-grey-300);

  @media (max-width: 1365px) {
    position: absolute;
    bottom: 8rem;
    left: 0rem;
    width: 50%;
    text-align: center;
    border-right: none;
  }
`;

export const TablePrice = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--color-grey-300);

  @media (max-width: 1365px) {
    position: absolute;
    justify-content: flex-end;
    padding-right: 2rem;
    border: none;
    bottom: 8rem;
    right: 0rem;
    width: 50%;
  }
`;

export const TableDiscount = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid var(--color-grey-300);
  & span {
    display: flex;
    background: #ceffd7;
    border-radius: 5rem;
    font-size: 1.4rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    margin: auto;
    font-weight: 800;
  }
`;

export const Buttons = styled.td`
  display: flex;
  gap: 1rem;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
