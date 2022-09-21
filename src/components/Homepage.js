import React from 'react'
import HeaderSection from './header/HeaderSection'
import Service from './Service/Service'
import EnterpriseSection from './EnterpriseSection'
import BottomSection from './BottomSection'
import FooterSection from './Footer'

const Homepage = () => {
  return (
    <div>
      <HeaderSection/>
      <Service/>
      <EnterpriseSection/>
      <BottomSection/>
      <FooterSection/>
    </div>
  )
}

export default Homepage