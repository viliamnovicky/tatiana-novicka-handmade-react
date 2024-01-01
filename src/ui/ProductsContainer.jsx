import styled from "styled-components"

const StyledProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    max-width: 130rem;
    gap: 1rem;
    height: auto;
    justify-content: center;
`

function ProductsContainer({children}) {
    return (
        <StyledProductsContainer>
            {children}
        </StyledProductsContainer>
    )
}

export default ProductsContainer
