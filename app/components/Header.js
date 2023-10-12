"use client";
import Link from "next/link";
import styled from "styled-components";
// components and assets
import CenterContainer from "./CenterContainer";

// --- styles --- //
const StyledHeader = styled.header`
    background-color: #17181d;
    padding: .5rem;
`;

const StyledHomeLogo = styled(Link)`
    display: flex;
    align-items: center;
    font-weight: 700;
    color: #f1f1f1;
    font-size: 1.2rem;
    text-transform: lowercase;
    svg {
        fill: #C1D8C3;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: .5rem;
`;

const StyledLink = styled(Link)`
    &:hover {
        color: #f1f1f1;
    }
    color: #c6c6c6;
`;
const Header = () => {
    return (
        <StyledHeader>
            <CenterContainer>
                <StyledContainer>
                    <StyledHomeLogo href={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v160q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-160h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z" />
                        </svg>
                        <p>E-leaf</p>
                    </StyledHomeLogo>
                    <StyledNav>
                        <StyledLink href={'/'}>All Products</StyledLink>
                        <StyledLink href={'/categories'}>Categories</StyledLink>
                        <StyledLink href={'/'}>Account</StyledLink>
                        <StyledLink href={'/'}>Cart (0)</StyledLink>
                    </StyledNav>
                </StyledContainer>
            </CenterContainer>
        </StyledHeader>
    )
};

export default Header;