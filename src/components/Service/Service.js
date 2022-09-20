import React from 'react'
import styled from 'styled-components'
import Left from '../../images/left.svg'
import Center from '../../images/center.svg'
import Right from '../../images/right.svg'
import Arrow from '../../images/arrow-right.svg'
import GroupLeft from '../../images/Group-216.svg'
import GroupRight from '../../images/Group-281.svg'
import Mark from '../../images/mark.svg'
import Button from '../shared/Button'
import Star from '../../images/star.svg'
import Eyes from '../../images/eyes.svg'
import Sun from '../../images/sun.svg'

function Service() {
    return (
        <Section>
            <div className='row-top'>
                <h4 className='title'>Our Services</h4>
                <h3>Handshake infographic mass market crowdfunding iteration.</h3>
            </div>
            <div className='row-explore'>
                <div className='col'>
                    <div className='image'>
                        <img src={Left} alt='left' />
                    </div>
                    <div className='content'>
                        <h4>Cool feature title</h4>
                        <p>Learning curve network effects return on investment.</p>
                    </div>
                    <div className='explore-link'>
                        <h3>Explore</h3>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                </div>
                <div className='col'>
                    <div className='image'>
                        <img src={Center} alt='center' />
                    </div>
                    <div className='content'>
                        <h4>Even cooler feature</h4>
                        <p>Learning curve network effects return on investment.</p>
                    </div>
                    <div className='explore-link'>
                        <h3>Explore</h3>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                </div>
                <div className='col'>
                    <div className='image'>
                        <img src={Right} alt='right' />
                    </div>
                    <div className='content'>
                        <h4>Cool feature title</h4>
                        <p>Learning curve network effects return on investment.</p>
                    </div>
                    <div className='explore-link'>
                        <h3>Explore</h3>
                        <img src={Arrow} alt='arrow-right' />
                    </div>
                </div>
            </div>
            <div className='row-connect'>
                <div className='row top'>
                    <img src={GroupLeft} alt='left' />
                    <div className='right'>
                        <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
                        <div className='list'>
                            <div className='item'>
                                <span className='mark'><img src={Mark} alt='mark' /></span><h4>We connect our customers with the best.</h4>
                            </div>
                            <div className='item'>
                                <span className='mark'><img src={Mark} alt='mark' /></span><h4>Advisor success customer launch party.</h4>
                            </div>
                            <div className='item'>
                                <span className='mark'><img src={Mark} alt='mark' /></span><h4>Business-to-consumer long tail.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row bottom'>
                    <div className='right'>
                        <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
                        <div className='list'>
                            <Button icon={Star} imgAlt='btn' text='We connect our customers with the best.' bgColor='#0A2640' txtColor='#FFFFFF' />
                            <Button icon={Eyes} imgAlt='btn' text='Advisor success customer launch party.' bgColor='#FFFFFF' txtColor='#000000' />
                            <Button icon={Sun} imgAlt='btn' text='Business-to-consumer long tail.' bgColor='#FFFFFF' txtColor='#000000' />
                        </div>
                    </div>
                    <img src={GroupRight} alt='left' />
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    padding: 82px 150px;

    .row-top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 78px;

        .title{
            color: var(--color-gray);
            font-weight: 400;
            font-size: var(--font-size-500);
            line-height: 32px;
            margin-bottom: 12px;
        }
        h3{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: var(--font-size-1300);
            line-height: 72px;
            width: 842px;
            color: var(--color-black);
            text-align: center;
        }
    }

    .row-explore{
        display: flex;
        justify-content: center;
        gap: 100px;
        font-family: 'Open Sans';

        .col{
            .image{
                margin-bottom: 24px;
            }

            .content{
                display: flex;
                flex-direction: column;
                font-weight: 400;

                h4{
                    color: var(--color-black);
                    font-size: var(--font-size-600);
                    line-height: 36px;
                }

                p{
                    font-size: var(--font-size-500);
                    line-height: 32px;
                    color: var(--color-gray);
                    width: 293px;
                }
            }

            
            .explore-link{
                display: flex;
                margin-top: 28px;
                align-items: center;
                border-bottom: 1px solid var(--dark-blue);
                padding-bottom: 8px;
                width: fit-content;
                h3{
                    font-weight: 700;
                    font-size: var(--font-size-500);
                    line-height: 36px;
                    color: var(--dark-blue);
                    margin-right: 24px;
                }
            }
        }

        
    }

    .row-connect{
        display: flex;
        flex-direction: column;
        margin-top: 197px;

        h2{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: var(--font-size-900);
            line-height: 56px;
            color: var(--color-black);
            width: 493px;
            margin-bottom: 41px;
        }
        .row{
            display: flex;
            justify-content: center;
            gap: 150px;

        }
        .top{
            margin-bottom: 120px;
            .right{
                padding-top: 50px;
                display: flex;
                flex-direction: column;
                

                .item{
                    display: flex;
                    margin-bottom: 25px;

                    h4{
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: var(--font-size-500);
                        line-height: 32px;
                        margin-left: 27px;
                        color: var(--color-black);

                    }
                }
            }
        }

        .bottom{
            .left{
                display: flex;
                flex-direction: column;
            }
           
            .right{
                padding-top: 50px;

            }
        }
    }
`

export default Service