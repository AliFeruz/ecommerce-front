import React from 'react'
import styled from 'styled-components'
import PrimaryBtn from './PrimaryBtn'
import ButtonLink from './ButtonLink'

const StyledCenter = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`
const Desc = styled.p`
  color: #aaa;
  font-size: .9rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 40px;
`
const ImageStyled = styled.img`
  border-radius: 10%
`
const Column = styled.div`
  display: flex;
  align-items: center;
`
const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`

const Featured = ({product}) => {
  return (
    <Bg>
      <StyledCenter>
        <Wrapper>
          <Column>
          <div>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <BtnWrapper>
          <ButtonLink href={'/products/' + product._id} white={1} outline={1} >Read more</ButtonLink>
          <PrimaryBtn white={1}>Add to cart</PrimaryBtn>
          </BtnWrapper>
          </div> 
          </Column>
          <Column>
          <ImageStyled src={product.images[0]} 
          alt='image' width={400} height={250} />
          </Column>
        </Wrapper>
      
      </StyledCenter>
    </Bg>
  )
}

export default Featured