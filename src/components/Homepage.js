import React from 'react'
import HeaderSection from './header/HeaderSection'
import Service from './Service/Service'
import EnterpriseSection from './EnterpriseSection'
import BottomSection from './BottomSection'
import FooterSection from './Footer'
import Subscribe from './Subscribe'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <Container >
      <HeaderSection/>
      <Service/>
      <EnterpriseSection/>
      <BottomSection/>
      <Subscribe/>
      <FooterSection/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`

export default Homepage