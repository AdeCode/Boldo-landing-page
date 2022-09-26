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

      <ul className={click ? 'nav-options active' : 'nav-options'}>
        <li className='option'>Product</li>
        <li className='option'>Services</li>
        <li className='option'>About</li>
        <div className='btn'>
          <h3>Log In</h3>
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" size={34} />
        ) : (
          <FaBars className="menu-icon" size={34}/>
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


  @media (max-width: 640px){
    padding-bottom: 140px;
    .nav-options{
        display: flex;
        width: 100%;
        height: auto;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 0;
        transition: all 0.5s ease;
        flex-direction: column;
        list-style-type: none;

        &.active{
          margin-bottom:100px !important;
        }
      }

      .mobile-menu{
        display: block !important;
      }

    }

  .mobile-menu{
    display: none;
  }

  .mobile{
    display: block;
  }

  .nav-options{
    display: flex;
    gap: 40px;
    align-items: center;

    .option{
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

    &.active{
      background: inherit;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      align-content: center;
      padding-left: 0px;
    }

  }
  
`
export default Navbar