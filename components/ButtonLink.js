import Link from 'next/link'
import React from 'react'
import styled, { css } from 'styled-components'

const StyledBtnLink = styled(Link)`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.primary && css`
        background-color: #3b1bf2;
        color: #fff;
    `}
    ${props => props.size === 'large' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    `}

`
const ButtonLink = (props) => {
  return (
    <StyledBtnLink {...props}/>
  )
}

export default ButtonLink