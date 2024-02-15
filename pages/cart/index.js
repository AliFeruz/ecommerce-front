import Header from '@/components/Header'
import Input from '@/components/Input'
import PrimaryBtn from '@/components/PrimaryBtn'
import Table from '@/components/Table'
import { CartContext } from '@/context/CartContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
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
const ProductInfoCell = styled.td`
    padding: 10px 0;
`
const ProductImgBox = styled.div`
    max-width: 100px;
    max-height: 100px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 0 5px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    img{
        max-width: 80px;
        max-height: 80px;
    }
`

const QuantityLabel = styled.span`
    padding: 0 10px;
`
const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`
const ProductName = styled.p`
    margin-top: 10px;
`

const Cart = () => {
    const { cartProducts, addToCart, removeProduct } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity ]= useState('');
    const [cityCode, setCityCode ]= useState('');
    const [address, setAddress ]= useState('');


    useEffect(()=>{
        if(cartProducts.length > 0){
            axios.post('/api/cart', {ids: cartProducts})
            .then(res => {
                setProducts(res.data)
            })
        } else {
            setProducts([])
        }
    },[cartProducts]);

    function moreProduct(id){
        addToCart(id)
    };

    async function goToPayment(){
        const data = {name, email, city, cityCode, country, address, cartProducts}
        const res = await axios.post('/api/checkout', data);
        if(res.data.url){
            window.location = res.data.url
        }
    }

    function lessProduct(id){
        removeProduct(id)
    }

    let total = 0;
    for (const productID of cartProducts){
        const price = products.find(p => p._id === productID)?.price || 0;
        total += price;
    }

    if(window.location.href.includes('succes')){
        return (
            <>
            <Header/>
            <StyledCenter>
                <Box>
                    <h1>Thanks for your order!</h1>
                    <p>We will email you when your order will be sent!</p>
                </Box>
            </StyledCenter>
            </>
        )
    }
  return (
    <>
    <Header/>
    <StyledCenter>
    <Wrapper>
    <Box>
    <h2>Cart</h2>
    {!cartProducts?.length && (
        <div>Your cart is empty</div>
    )}
    <Table>
        <thead>
            <tr>
                <td>Product</td>
                <td>Quantity</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
        {products?.length > 0 && (
        <>
        {products.map(product => (
            <tr key={product._id}>
            <ProductInfoCell>
            <ProductImgBox>
            <img src={product.images[0]} alt='product image'/>
            </ProductImgBox>
            <ProductName>{product?.title}</ProductName>
            </ProductInfoCell>
            <td>
            <PrimaryBtn onClick={() => lessProduct(product._id)}>-</PrimaryBtn>
            <QuantityLabel>
            {cartProducts.filter(id => id === product._id).length}
            </QuantityLabel>  
            <PrimaryBtn onClick={() => moreProduct(product._id)}>+</PrimaryBtn>
            </td>
            <td>${cartProducts.filter(id => id === product._id).length * product.price}</td>
            </tr> 
            
        ))}
        </>
    )}
            <tr>
                <td></td>
                <td></td>
                <td>${total}</td>
            </tr>
        </tbody>
    </Table>
    </Box>
    {!!cartProducts?.length && (
        <Box>
        <h2>Order Information</h2>
        <div>
        <Input type='text' placeholder='Name' name='name' value={name}
        onChange={e => setName(e.target.value)}/>
        <Input type='text' placeholder='Email' name='email' value={email}
        onChange={e => setEmail(e.target.value)}/>
        <Input type='text' placeholder='Country' name='country' value={country}
        onChange={e => setCountry(e.target.value)}/>
        <CityHolder>
        <Input type='text' placeholder='City' name='city' value={city}
        onChange={e => setCity(e.target.value)}/>
        <Input type='text' placeholder='Postal Code' name='cityCode' value={cityCode}
        onChange={e => setCityCode(e.target.value)}/>
        </CityHolder>
        <Input type='text' placeholder='Street address' name='address' value={address}
        onChange={e => setAddress(e.target.value)}/>
        <PrimaryBtn primary block onClick={goToPayment}>Continue to payment</PrimaryBtn>
        </div>
        </Box>
    )}
    </Wrapper>
    </StyledCenter>
    </>
  )
}

export default Cart