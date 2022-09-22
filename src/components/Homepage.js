import React from 'react'
import HeaderSection from './header/HeaderSection'
import Service from './Service/Service'
import EnterpriseSection from './EnterpriseSection'
import BottomSection from './BottomSection'
import FooterSection from './Footer'
import Subscribe from './Subscribe'

const Homepage = () => {
  return (
    <div>
      <HeaderSection/>
      <Service/>
      <EnterpriseSection/>
      <BottomSection/>
      <Subscribe/>
      <FooterSection/>
    </div>
  )
}

export default Homepage