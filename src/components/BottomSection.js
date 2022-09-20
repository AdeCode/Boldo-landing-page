import React from 'react'
import styled from 'styled-components'
import Image from '../images/Image.svg'
import ArrowDown from '../images/chevron-down.svg'

function BottomSection() {
  return (
    <Section>
        <img src={Image} alt='we-connect'/>
        <div className='connect-row'>
            <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
            <div className='connect-row-right'>
                <div className='row'>
                    <h4>We connect our customers with the best?</h4>
                    <img src={ArrowDown} alt='arrow-down'/>
                </div>
                <div className='row'>
                    <h4>Android research &amp; development rockstar? </h4>
                    <img src={ArrowDown} alt='arrow-down'/>
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    padding: 124px 150px;
    background: var(--body-background);

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

`

export default BottomSection