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
    }
`
export default Subscribe