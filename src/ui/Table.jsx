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
    grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr 2fr;
  `,
  categories: css`
    grid-template-columns: 1fr 1fr 1fr;
  `,
};

export const TableRow = styled.div`
  display: grid;
  align-items: center;
  max-width: 100rem;
  margin: auto;
  padding: 1rem;
  ${(props) => colors[props.color]}
  ${(props) => grids[props.grid]}
`;

export const TableHead = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Buttons = styled.td`
  display: flex;
  gap: 1rem;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
