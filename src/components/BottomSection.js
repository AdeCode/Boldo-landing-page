import React from 'react'
import styled from 'styled-components'
import Image from '../images/Image.svg'
import ArrowDown from '../images/chevron-down.svg'
import Blog1 from '../images/blog-img1.svg'
import Blog2 from '../images/blog-img2.svg'
import Blog3 from '../images/blog-img3.svg'
import Card1 from '../images/card-img1.svg'
import Card2 from '../images/card-img2.svg'
import Card3 from '../images/card-img3.svg'

function BottomSection() {
    return (
        <Section>
            <div className='img'>
                <img src={Image} alt='we-connect' />
            </div>
            <div className='connect-row'>
                <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
                <div className='connect-row-right'>
                    <div className='row'>
                        <h4>We connect our customers with the best?</h4>
                        <img src={ArrowDown} alt='arrow-down' />
                    </div>
                    <div className='row'>
                        <h4>Android research &amp; development rockstar? </h4>
                        <img src={ArrowDown} alt='arrow-down' />
                    </div>
                </div>
            </div>
            <div className='blog-row'>
                <div className='blog-row-title'>
                    <h4 className='title'>Our Blog</h4>
                    <p className='sub-title'>Value proposition accelerator product management venture</p>
                </div>
                <div className='blog-stories'>
                    <div className='card'>
                        <img src={Blog1} alt='pitch-termsheet' />
                        <div className='content'>
                            <div className='content-top'>
                                <h4>Category</h4><time datetime="2021-11-22">November 22, 2021</time>
                            </div>
                            <p>Pitch termsheet backing validation focus release.</p>
                        </div>
                        <div className='card-bottom'>
                            <img src={Card1} alt='profile' />
                            <h5>Chandler Bing</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Blog2} alt='pitch-termsheet' />
                        <div className='content'>
                            <div className='content-top'>
                                <h4>Category</h4><time datetime="2021-11-22">November 22, 2021</time>
                            </div>
                            <p>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                        </div>
                        <div className='card-bottom'>
                            <img src={Card2} alt='profile' />
                            <h5>Rachel Green</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Blog3} alt='pitch-termsheet' />
                        <div className='content'>
                            <div className='content-top'>
                                <h4>Category</h4><time datetime="2021-11-22">November 22, 2021</time>
                            </div>
                            <p>Beta prototype sales iPad gen-z marketing network effects value proposition.</p>
                        </div>
                        <div className='card-bottom'>
                            <img src={Card3} alt='profile' />
                            <h5>Monica Geller</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='load'>
                <button>Load more</button>
            </div>
            {/* <Subscribe/>  */}
        </Section>
    )
}

const Section = styled.section`
    padding: 124px auto;
    width: 80%;
    background: var(--body-background);
    margin: 120px auto;

    @media (max-width:640px){
        

        .connect-row{
            flex-direction: column;
            width:100%;

            h3{
                width: 100% !important;
            }
        }

        .blog-row{
            padding: 0 10px;
            width: 100%;

            &-title{
                width: 100% !important;

                .sub-title{
                    width: 100% !important;
                }
            }
            .blog-stories{
                flex-direction: column;
                margin-top: 20px;

                .card{
                    margin: 5px 0;
                }
            }
        }
    }

    .img{
        display: flex;
        justify-content: center;

        img{
            width: 100%;
        }
    }
    
    .connect-row{
        display: flex;
        justify-content: space-between;
        margin-top: 56px;
        color: var(--color-black);

        h3{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: var(--font-size-900);
            line-height: 56px;
            width: 500px;
        }
        &-right{
            display: flex;
            flex-direction: column;

            .row{
                display: flex;
                justify-content: space-between;
                gap:86px;
                border-bottom: 1px solid var(--light-gray);
                padding-bottom: 16px;
                margin-bottom: 32px;

                h4{
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--font-size-500);
                    line-height: 32px;
                }
            }
        }
    }

    .blog-row{
        margin-top: 156px;
        font-family: 'Open Sans';
        font-style: normal;
        justify-content: center;

        &-title{
            display: flex;
            flex-direction: column;
            align-items: center;

            .title{
                font-weight: 400;
                font-size: var(--font-size-500);
                line-height: 32px;
                color: var(--color-gray);
                text-align: center;
                font-family: 'Open Sans';

            }

            .sub-title{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: var(--font-size-1300);
                line-height: 72px;
                color: var(--color-black);
                text-align: center;
                width: 842px;
            }
        }
        

        .blog-stories{
            display: flex;
            justify-content: space-between;
            margin-top: 77px;

            .card{
                display: flex;
                flex-direction: column;

                .content{
                    font-family: 'Open Sans';
                    font-style: normal;
                    margin-top: 24px;

                    &-top{
                        display: flex;
                        gap: 12px;
                        align-items: flex-end;

                        h4{
                            color: var(--dark-blue);
                            font-weight: 700;
                            font-size: var(--font-size-400);
                            line-height: 28px;
                            margin-top: 12px;
                        }

                        time{
                            color: var(--color-gray);
                            font-weight: 400;
                            font-size: var(--font-size-400);
                            line-height: 28px;
                        }

                    }
                    p{
                        margin-top: 12px;                       
                        font-weight: 400;
                        font-size: var(--font-size-500);
                        line-height: 32px;
                        color: var(--color-black);
                        width: 300px;
                    }

                }

                .card-bottom{
                    display: flex;
                    gap: 12px;
                    margin-top: 20px;

                    h5{
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 28px;
                        color: var(--color-black);
                    }
                }
            }
        }

    }

    .load{
        display: flex;
        justify-content: center;
        margin-top: 84px;

        button{
            padding: 16px 56px;
            color: var(--dark-blue);
            border-radius: 56px;
            background: var(--body-background);
            border: 2px solid var(--dark-blue);
            font-weight: 700;
            font-size: var(--font-size-500);
            line-height: 28px;
            
        }
    }

`

export default BottomSection