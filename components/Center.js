import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between
`
const Center = ({children}) => {
  return (
    <StyledDiv>
    {children}
    </StyledDiv>
  )
}

export default Center
