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
    grid-template-columns: 1fr 1fr 1fr;
`;

const NewProducts = ({products}) => {
  return (
    <StyledCenter>
        <ProductGrid>
        {products && products.map(product => (
            <ProductCard key={product._id}>{product.title}</ProductCard>
        ))}
    </ProductGrid>
    </StyledCenter>
    
  )
}

export default NewProducts