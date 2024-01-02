import styled from "styled-components";

const StyledProductBox = styled.div`
  width: 35rem;
  height: 35rem;
  background: var(--color-grey-200);
  margin: auto;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover img {
    transform: scale(1.2);
    filter: blur(.1rem) brightness(.8);
  }

  &:hover h1 {
    opacity: 1;
    width: 80%;
    height: 80%;
  }
`;

const Image = styled.img`
  border-radius: 2rem;
  filter: blur(0rem) brightness(1);
`;

const StyledHeader = styled.h1`
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-grey-900);
  letter-spacing: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-grey-200);
  width: 20%;
  height: 20%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

function ProductBox({ src, category }) {
  return (
    <StyledProductBox>
      <Image src={src} />
      <StyledHeader>{category}</StyledHeader>
    </StyledProductBox>
  );
}

export default ProductBox;
