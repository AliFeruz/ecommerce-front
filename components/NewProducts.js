import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard';

const StyledCenter = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 20px;
`

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    padding-top: 20px;
`;
const Title = styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: 500;
`
const NewProducts = ({products}) => {
  return (
    <StyledCenter>
        <Title>New Arrivals</Title>
        <ProductGrid>
        {products && products.map(product => (
        <ProductCard {...product} key={product._id}/>
        ))}
    </ProductGrid>
    </StyledCenter>
    
  )
}

export default NewProducts