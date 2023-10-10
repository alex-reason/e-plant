import styled from "styled-components"

const CenterDiv = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const CenterContainer = ({ children }) => {
    return (
        <CenterDiv>
            {children}
        </CenterDiv>
    )
}

export default CenterContainer