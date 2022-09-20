import React from 'react'
import styled from 'styled-components'

function Button({icon, imgAlt, text, bgColor, txtColor}) {
  return (
    <Btn style={{background:bgColor}}>
        <img src={icon} alt={imgAlt}/>
        <h5 style={{color:txtColor}}>{text}</h5>
    </Btn>
  )
}

const Btn = styled.button`
    display: flex;
    padding: 16px 23px;
    border: none;
    width: 500px;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
    border-radius:4px;
    margin-bottom: 24px;

    h5{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: var(--font-size-400);
        line-height: 28px;
        margin-left: 16px;
    }
`

export default Button