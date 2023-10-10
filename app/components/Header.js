"use client";
import Link from "next/link";
import styled from "styled-components";
import CenterContainer from "./CenterContainer";
import { PlantIcon } from "../assets/icons";


// styles
const StyledHeader = styled.header`
    background-color: #222;
    color: #fff;
    padding: .5rem;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const StyledHomeLogo = styled(Link)`
    margin: auto;
    text-align: center;
    padding: .5rem;
    font-weight: 600;
    display: flex;
    align-items: flex-end;
    color: #C1D8C3;
`

const Header = () => {
    return (
        <StyledHeader>
            <CenterContainer>
                <StyledHomeLogo href={'/'}><PlantIcon classname={"w-4 h-4 color-white"}/>E-leaf</StyledHomeLogo>
                <StyledNav>
                    <Link href={'/'}>All Products</Link>
                    <Link href={'/categories'}>Categories</Link>
                    <Link href={'/'}>Account</Link>
                    <Link href={'/'}>Cart (0)</Link>
                </StyledNav>
            </CenterContainer>
        </StyledHeader>
    )
}

export default Header