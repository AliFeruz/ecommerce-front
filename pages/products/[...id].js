import Header from '@/components/Header'
import PrimaryBtn from '@/components/PrimaryBtn'
import ProductImages from '@/components/ProductImages'
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
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    margin-top: 40px;
`

const Box = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 30px;
`

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Price = styled.span`
  font-size: 1.4rem;
`
export async function getServerSideProps(context){
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}

const product = ({product}) => {
  return (
    <div>
    <Header/>
    <StyledCenter>
    <Wrapper>
    <Box>
    <ProductImages images={product.images}/>
    </Box>
    <div>
    <Title>{product.title}</Title>
    <p>{product.description}</p>
    <PriceRow>
      <Price>${product.price}</Price>
      <PrimaryBtn primary>add to cart</PrimaryBtn>
    </PriceRow>
    </div>
    </Wrapper>
    </StyledCenter>
    </div>
    
  )
}

export default product
