import React from 'react'
import styled from 'styled-components'

function Subscribe() {
  return (
    <Section>
        <div className='container'>
            <h2>An enterprise template to ramp up your company website</h2>
            <div className='form-group'>
                <input type='email' placeholder='Your email address'/>
                <button>Start now</button>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    display: flex;
    padding: 124px 95px 84px 95px;

    .container{
        background-color: var(--dark-blue);
        color: var(--primary-color);
        padding: 72px 242px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 12px;

        h2{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 48px;
            line-height: 72px;
            width: 716px;
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 50px;
        }

        .form-group{
            display: flex;
            gap: 24px;

            input{
                width: 370px;
                background: var(--primary-color);
                color: var(--color-black);
                padding: 12px 32px;
                border-radius: 56px;
            }

            button{
                padding: 16px 56px;
                background: var(--green-backgroound);
                color: var(--dark-blue);
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 28px;
                border-radius: 56px;
            }
        }
    }
`
export default Subscribe