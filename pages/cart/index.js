import Header from '@/components/Header'
import PrimaryBtn from '@/components/PrimaryBtn'
import { CartContext } from '@/context/CartContext'
import React, { useContext } from 'react'
import styled from 'styled-components'

const StyledCenter = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 20px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 40px;
    margin-top: 40px;
`

const Box = styled.div`
    border-radius: 10px;
    background-color: white;
    padding: 30px;
`

const Cart = () => {
    const { cartProducts } = useContext(CartContext);

  return (
    <>
    <Header/>
    <StyledCenter>
    <Wrapper>
    <Box>
    {!cartProducts?.length && (
        <div>Your cart is empty</div>
    )}
    {cartProducts?.length > 0 && (
        <>
        <h2>Cart</h2>
        </>
    )}
    </Box>
    {!!cartProducts?.length && (
        <Box>
        <h2>Order Information</h2>
        <input type='text' placeholder='adress'/>
        <input type='text' placeholder='adress 2'/>
        <PrimaryBtn primary block>Continue to payment</PrimaryBtn>
        </Box>
    )}
    </Wrapper>
    </StyledCenter>
    </>
  )
}

export default Cart