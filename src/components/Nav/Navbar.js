import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../images/Logo.svg'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'


function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <Nav>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>

      <ul className={click ? 'menu mobile' : 'menu'}>
        <li>Product</li>
        <li>Services</li>
        <li>About</li>
        <div className='btn'>
          <h3>Log In</h3>
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  .mobile-menu{
    display: none;

    @media (max-width: 640px){
      display: block;
      width:100%;

    }
  }

  .menu{

    @media (max-width: 640px){
      display: none;
    }
  }
  .mobile{
    display: block;
  }

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