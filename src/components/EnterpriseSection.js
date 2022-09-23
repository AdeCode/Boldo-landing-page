import React from 'react'
import styled from 'styled-components'
import ArrowFront from '../images/arrow-front.svg'
import ArrowBack from '../images/arrow-back.svg'
import ProfileLeft from '../images/profile-left.svg'
import ProfileCenter from '../images/profile-center.svg'
import ProfileRight from '../images/profile-right.svg'

function EnterpriseSection() {
  return (
    <Section>
        <div className='container'>
        <div className='title-row'>
            <h2>An enterprise template to ramp up your company website</h2>
            <div className='arrow'>
                <img src={ArrowBack} alt='back arrow'/>
                <img src={ArrowFront} alt='front arrow'/>
            </div>
        </div>
        <div className='card-row'>
            <div className='card'>
                <h3>
                “Buyer buzz partner network disruptive non-disclosure agreement business”
                </h3>
                <div className='card-bottom'>
                    <img src={ProfileLeft} alt='profile'/>
                    <div className='details'>
                        <h4>Albus Dumbledore</h4>
                        <p>Manager @ Howarts</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h3>
                “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
                </h3>
                <div className='card-bottom'>
                    <img src={ProfileCenter} alt='profile'/>
                    <div className='details'>
                        <h4>Severus Snape</h4>
                        <p>Manager @ Slytherin</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h3>
                “Buyer buzz partner network disruptive non-disclosure agreement business”
                </h3>
                <div className='card-bottom'>
                    <img src={ProfileRight} alt='profile'/>
                    <div className='details'>
                        <h4>Albus Dumbledore</h4>
                        <p>Manager @ Howarts</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    background: var(--dark-blue);
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    padding: 96px 0px;
    width: 100%;

    /* @media (max-width: 640px){
        width: 100vw;
        padding: 10px;

        .title-row{
            flex-direction: column;
            width: 100vw;
            padding: 0 5px;
        }

        .card-row{
            flex-direction: column;
        }
    } */

    .container{
        width: 80%;
        margin: 0 auto;

        .title-row{
            display: flex;
            justify-content: space-between;
            h2{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: var(--font-size-1300);
                line-height: 72px;
                width: 716px;
            }
            .arrow{
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                gap: 28px;


                img{
                    height: 72px;
                    width: 72px;
                }
            }
    }

    .card-row{
        display: flex;
        justify-content: center;
        gap: 22px;
        margin-top: 56px;

        .card{
            
            display: flex;
            flex-direction: column;
            padding: 30px;
            box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
            border-radius: 12px;
            background-color: var(--primary-color);
            height: fit-content;

            h3{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: var(--font-size-600);
                line-height: 36px;
                width: 270px;
                color: var(--color-black);
                margin-bottom: 43px;
            }

            &-bottom{
                display: flex;
                gap: 16px;

                
                .details{
                    display: flex;
                    flex-direction: column;
                    font-family: 'Open Sans';
                    font-style: normal;
                    color: var(--dark-blue);

                    h4{
                        font-weight: 700;
                        font-size: var(--font-size-400);
                        line-height: 32px;
                    }

                    p{
                        font-weight: 400;
                        font-size: var(--font-size-350);
                        line-height: 32px;
                    }
                }   
            }
        }
    }
    }
    
`
export default EnterpriseSection