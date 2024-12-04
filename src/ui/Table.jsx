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
    overflow-y: auto;
  `
}

export const Table = styled.div`
  margin-top: 1rem;
  max-height: calc(100vh - 38rem);
  overflow-y: scroll;
  padding-left: 1.5rem;
  padding: 1rem;
  margin-left: 1rem;
  ${(props) => margins[props.margin]}
  ${(props) => types[props.type]}
`;

export const TableRow = styled.div`
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
`;

export const TableColumn = styled.div`
  text-align: center;
  border-right: 1px solid var(--color-grey-300);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const TablePrice = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--color-grey-300);
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
