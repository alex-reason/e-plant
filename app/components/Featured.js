"use client"
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CenterContainer from "./CenterContainer";
import PrimaryBtn from "./PrimaryBtn";

const StyledContainer = styled.div`
    background-color: #17181d;
    color: #f1f1f1;
    padding: 2rem 0%;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: 400;
`;

const Descr = styled.p`
    color: #c6c6c6;
    padding: 1rem 0;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 3rem;
    align-items: center;

    img {
        height: 30rem;
        padding: 0;
    }

    div {
        margin: 0 auto;
        padding: 0;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: .3rem;
`;


const Featured = ({ prodInfo }) => {
    const { setCartProducts } = useContext(CartContext);
    const handleAddToCart = () => {
        setCartProducts(prev => [...prev, prodInfo.title])
    };

    

    const router = useRouter();
    return (
        <StyledContainer>
            <CenterContainer>
                <Wrapper>
                    <div>
                        <Title>Featured: {prodInfo.title}</Title>
                        <Descr>
                            One of our current favorite plants. {prodInfo.description}
                        </Descr>
                        <ButtonContainer>
                            <PrimaryBtn onClick={() => router.push('/categories')}>See More</PrimaryBtn>
                            <PrimaryBtn $primary onClick={handleAddToCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                Shop
                            </PrimaryBtn>
                        </ButtonContainer>
                    </div>
                    <div>
                        <img alt={prodInfo.title} src={prodInfo.imageList[0]} />
                    </div>
                </Wrapper>

            </CenterContainer>
        </StyledContainer>
    )
};

export default Featured;
