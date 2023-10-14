import styled from "styled-components"

const StyledButton = styled.button`
    color: ${props => props.$primary ? "#333" : "#f1f1f1"};
    padding: .5rem .8rem;
    border-radius: 20px;
    font-size:  .8rem;
    font-weight: 500;
    background: ${props => props.$primary ? "#C1D8C3" : "#17181d"};
    border: ${props => props.$primary ? "none" : "1px solid #f1f1f1"};
    display: inline-flex;
    align-items: center;
    transition: all;

    svg {
        width: 15px;
        height: 15px;
    }

    &:hover {
        background-color:${props => props.$primary && "#f1f1f1"};
        cursor: pointer;
    }
`;

const PrimaryBtn = ({ children, ...rest }) => {

    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default PrimaryBtn;