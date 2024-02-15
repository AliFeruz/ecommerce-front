import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
    width: 100%;
    thead{
        text-align: left;
        text-transform: uppercase;
        color: #aaa;
    };
    td{
        border-top: 1px solid rgb(0,0,0, .1);
        padding: 5px;
    }
    
`


const Table = (props) => {
  return (
    <StyledTable {...props}/>
  )
}

export default Table
