import React from 'react'
import styled, { css } from 'styled-components'
import { primary } from '@/lib/colors'

const StyledBtn = styled.button`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 2px solid #fff;
    `}
    ${props => props.primary && !props.outline && css`
        background-color: ${primary};
        border: 2px solid ${primary};
        color: #fff;
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        border: 2px solid ${primary};
        color: ${primary};
    `}
    ${props => props.size === 'large' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    `}

`
const PrimaryBtn = ({children, ...rest}) => {
  return (
    <StyledBtn {...rest}>
      {children}
    </StyledBtn>
  )
}

export default PrimaryBtn
