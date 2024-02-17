import Header from '@/components/Header'
import React from 'react'
import styled from 'styled-components'

const StyledCenter = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 20px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: 500;
`

const categories = () => {
  return (
    <div>
      <Header/>
      <StyledCenter>
      <Title>All Categories</Title>
      </StyledCenter>
      
    </div>
  )
}

export default categories