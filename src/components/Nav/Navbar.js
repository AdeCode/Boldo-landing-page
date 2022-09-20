import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/Logo.svg'

function Navbar() {
  return (
    <Nav>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <ul>
        <li>Product</li>
        <li>Services</li>
        <li>About</li>
        <div className='btn'>
          <h3>Log In</h3>
        </div>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  ul{
    display: flex;
    gap: 40px;
    align-items: center;

    li{
      list-style: none;
      font-style: normal;
      font-weight: 600;
      font-size: var(--font-size-400);
      line-height: 28px;
    }

    .btn{
      color: var(--dark-blue);
      background: var(--primary-color);
      padding: 8px 40px;
      font-size: inherit;
      line-height: 24px;
      border-radius: 20px;
    }

  }
  
`
export default Navbar