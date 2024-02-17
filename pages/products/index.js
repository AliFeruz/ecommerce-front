import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/product'
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

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    padding-top: 20px;
`;

export async function getServerSideProps(){
  await mongooseConnect();
  const products = await Product.find({})
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

const Products = ({products}) => {
  return (
    <div>
    <Header/>
    <StyledCenter>
    <Title>All Products</Title>
    <ProductGrid>
    {products && products.map(product => (
    <ProductCard {...product} key={product._id}/>
    ))}
    </ProductGrid>
    </StyledCenter>
    </div>
  )
}

export default Products
