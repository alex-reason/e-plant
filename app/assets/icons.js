import styled from "styled-components";

const StyledIcon = styled.svg`
    fill: #C1D8C3;
    width: 1.5rem;
    height: 1.5rem;
`

const PlantIcon = () => {
    return (
        <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v160q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-160h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z" />
        </StyledIcon>
    )
}

export { PlantIcon };