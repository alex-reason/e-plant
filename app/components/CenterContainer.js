"use client"
import styled from "styled-components"

const CenterDiv = styled.div`
    max-width: 80%;
    margin: 0 auto; 
`

const CenterContainer = ({ children }) => {
    return (
        <CenterDiv>
            {children}
        </CenterDiv>
    )
}

export default CenterContainer