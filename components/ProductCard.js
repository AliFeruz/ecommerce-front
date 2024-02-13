import React from 'react'
import styled from 'styled-components'
import PrimaryBtn from './PrimaryBtn';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


const Card = styled(Link)`
  background-color: white;
  padding: 20px;
  max-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 100px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1.1rem;
  margin: 0;
`
const ProductInfo = styled.div`
  margin-top: 10px;

`
const Price = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
`
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`

const ProductCard = ({_id, title, images, price}) => {
  return (
    <div>
    <Card href={'/products/' + _id}>
    <div>
    <img src={images[0]} alt='product image'/>
    </div>
    </Card>
    <ProductInfo>
    <Title>{title}</Title>
    <PriceRow>
    <Price>${price}</Price>
    <PrimaryBtn primary={1} outline={1}>
    <ShoppingCartIcon width={16} height={16}/>
    </PrimaryBtn>
    </PriceRow>
    </ProductInfo>
    </div>
   
  )
}

export default ProductCard
