"use client"
import styled from "styled-components";
import CenterContainer from "./CenterContainer";
import ProductCard from "./ProductCard";

const Container = styled.div`
    padding: 1rem;
    padding-top: 2rem;
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: auto;
    margin-top: 2rem;
`;

const Title = styled.h2`
    font-weight: 500;
    text-align: center;
    font-size: 2rem;
`

const LatestProducts = ({ categories, prods }) => {
    console.log(categories)
    return (
        <Container>
            <CenterContainer>
                <Title>Newly stocked</Title>
                <CardsContainer>
                    {prods && prods.map(product => (
                        <ProductCard 
                        cat={categories.find((element) => element._id === product.category)} 
                        key={product._id} 
                        info={product}/>
                    ))}
                </CardsContainer>
            </CenterContainer>
        </Container>
    )
}

export default LatestProducts