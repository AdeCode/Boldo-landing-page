import React from 'react'
import styled from 'styled-components'
import Navbar from '../Nav/Navbar'
import Hero from '../../images/Hero-graphics.svg'
import LogoWall from '../../images/Logo-Wall.svg'

function HeaderSection() {
  return (
    <Header>
        <Navbar/>
        <div className='row'>
          <div className='col left'>
            <h1>Save time by building  fast with Boldo Template </h1>
            <p>Funding handshake buyer business-to-business metrics iPad partnership. 
              First mover advantage innovator success deployment non-disclosure.</p>
              <div className='btn-row'>
                <div className='btn left'>
                  <h3>Buy template</h3>
                </div>
                <div className='btn right'>
                  <h3>Explore</h3>
                </div>
              </div>
          </div>
          <div className='col right'>
            <img src={Hero} alt='hero-graphics'/>
          </div>
        </div>
        <div className='wall-row'>
          <img src={LogoWall} alt='logo wall'/>
        </div>
    </Header>
  )
}

const Header = styled.header`
    background: var(--dark-blue);
    padding: 56px 100px;

    .row{
      display: flex;
      margin-top: 65px;
      .col{
        display: flex;
        width: 50%;
        h1{
          margin-bottom: 16px;
          font-size: var(--font-size-1300);
          font-weight: 400;
          line-height: 72px;
          width: 567px;
          font-family: 'Manrope', sans-serif;
        }
      }
      .left{
        display: flex;
        flex-direction: column;
        padding-top: 56.5px;
        p{
          font-weight: 400;
          font-size: var(--font-size-400);
          line-height: 28px;
          width: 567px;
          color: var(--gray-text);
        }
        .btn-row{
          display: flex;
          gap: 8px;
          margin-top: 40px;
          .btn{
            padding: 16px 56px;
            font-weight: 700;
            font-size: var(--font-size-500);
            line-height: 28px;
            border-radius: 56px;
          }
          .left{
            background: var(--green-backgroound);
            border: none;
            color: var(--dark-blue);
          }
          .right{
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
          }

        }
      }
      .right{
        justify-content: flex-end;
      }
    }

    .wall-row{
      display: flex;
      justify-content: center;
      margin-top: 56px;
    }

`
export default HeaderSection