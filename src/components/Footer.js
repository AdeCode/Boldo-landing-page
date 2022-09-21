import React from 'react'
import styled from 'styled-components'
import Logo from '../images/Logo-blue.svg'

function FooterSection() {
  return (
    <Footer>
        <div className='reserved-col'>
            <img src={Logo} alt='blue-logo' className='logo'/>
            <h5>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</h5>
            <p>All rights reserved.</p>
        </div>
        <div className='menu'>
            <div className='menu-col'>
                <h2>Landings</h2>
                <ul>
                    <li>
                        <h3>Home</h3>
                    </li>
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <h3>Services</h3>
                    </li>
                </ul>
            </div>
            <div className='menu-col'>
                <h2>Company</h2>
                <ul>
                    <li>
                        <h3>Home</h3>
                    </li>
                    <li>
                        <h3>Careers<span>Hiring!</span></h3>
                    </li>
                    <li>
                        <h3>Services</h3>
                    </li>
                </ul>
            </div>
            <div className='menu-col'>
                <h2>Resources</h2>
                <ul>
                    <li>
                        <h3>Blog</h3>
                    </li>
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <h3>Services</h3>
                    </li>
                </ul>
            </div>
        </div>
    </Footer>
  )
}

const Footer = styled.footer`
    display: flex;
    margin-top: 84px;
    padding: 120.5px 179px 117px 100px;
    font-family: 'Open Sans';
    font-style: normal;
    gap: 179px;

    .reserved-col{
        display: flex;
        flex-direction: column;

        .logo{
            width: 156px;
            height: 41px;
        }

        h5{
            margin-top:40px;
            color: var(--color-gray);
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            width: 300px;
        }

        p{
            margin-top: 64px;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            color: var(--color-gray);

        }

    }
    .menu{
        display: flex;
        justify-content: space-between;
        gap: 96px;

        &-col{
            display: flex;
            flex-direction: column;
            font-weight: 700;
            font-size: 20px;
            line-height: 32px;

            h2{
                color: var(--color-black);
                margin-bottom: 32px;
                font-weight: 700;
                font-size: 20px;
                line-height: 32px;
            }

            ul{
                list-style: none;

                li{
                    h3{
                        font-weight: 400;
                    font-size: 20px;
                    line-height: 32px;
                    color: var(--color-gray);
                    margin-bottom: 20px;
                    }
                    

                    span{
                        background: var(--green-backgroound);
                        border-radius: 12px;
                        padding: 1px 14px;
                        margin-left: 10px;
                        color: var(--dark-blue);
                        font-weight: 700;
                        font-size: 13px;
                        line-height: 28px;
                    }
                }
               
            }

        }
    }
`

export default FooterSection