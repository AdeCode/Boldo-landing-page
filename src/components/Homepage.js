import React from 'react'
import HeaderSection from './header/HeaderSection'
import Service from './Service/Service'
import EnterpriseSection from './EnterpriseSection'
import BottomSection from './BottomSection'

const Homepage = () => {
  return (
    <div>
      <HeaderSection/>
      <Service/>
      <EnterpriseSection/>
      <BottomSection/>
    </div>
  )
}

export default Homepage