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
    /* padding: 124px 10px 84px 10px; */
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    @media (max-width:640px){

        .container{
            padding: 10px;
            width: 100%;

            h2{
                width: inherit !important;
            }

            .form-group{
                display: flex;
                flex-direction: column;
            }

        }
    }

    .container{
        background-color: var(--dark-blue);
        padding: 72px 0;
        color: var(--primary-color);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 12px;

        h2{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: var(--font-size-1300);
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
                border: none;

                :focus{
                    outline: none;
                }
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
                cursor: pointer;
            }
        }
    }
`
export default Subscribe