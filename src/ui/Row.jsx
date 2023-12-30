import styled, { css } from "styled-components";

const Row = styled.div`
    display: flex;

    ${props=> props.type === "horizontal" && css`
        justify-content: space-between;
    `}
    ${props=> props.type === "vertical" && css`
        flex-direction: column;
    `}
`

Row.defaultProps = {
    type: "vertical"
}

export default Row