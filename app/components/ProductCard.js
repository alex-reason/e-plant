import styled from "styled-components";
import { useRouter } from 'next/navigation';
import PrimaryBtn from "./PrimaryBtn";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    cursor: pointer;

    h3 {
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        margin-bottom: 1rem;
    }

    h4 {
        font-weight: 500;
        font-size: .7rem;
        color: #828282;
    }

    img {
        height: 15rem;
        width: 18rem;
        object-fit: cover;
        object-position: center;
    }

    p {
        font-size: .8rem;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;
`;


const ProductCard = ({ cat, info }) => {
    const router = useRouter();

    return (
        <Card
            key={info._id}
            onClick={() => router.push(`product/${info._id}`)}
        >
            <img alt={info.title} src={info.imageList[0]} />
            <StyledDiv>
                <h3>{info.title}</h3>
                <h3>${info.price}</h3>
            </ StyledDiv>
            <StyledDiv>
                <p>{info.description.slice(0, 80)}...</p>
            </StyledDiv>
            <StyledDiv>
                <h4>{cat.parentCategory} ({cat.categoryName})</h4>
                <PrimaryBtn>Add to Cart</PrimaryBtn>
            </StyledDiv>

        </Card >
    )
};

export default ProductCard;