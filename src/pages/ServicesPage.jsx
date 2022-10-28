import React, { Fragment, useEffect} from 'react'
import ServicesAbout from '../components/ServicesComponents/ServicesAbout/ServicesAbout'
import ServicesBlue from '../components/ServicesComponents/ServicesBlue/ServicesBlue'
import ServicesDark from '../components/ServicesComponents/ServicesDark/ServicesDark'
import ServicesMain from '../components/ServicesComponents/ServicesMain/ServicesMain'
import ServicesSecond from '../components/ServicesComponents/ServicesSecond/ServicesSecond'
import ServicesThree from '../components/ServicesComponents/ServicesThree/ServicesThree'


const ServicesPage = () => {

    useEffect(() => {
      document.getElementsByTagName("header")[0].style.background = '#0867b5'
    }, [])
  

  return (
    <Fragment>
      <ServicesMain/>
      <ServicesSecond/>
      <ServicesThree/>
      <ServicesDark/>
      <ServicesBlue/>
      <ServicesAbout/>
    </Fragment>
  )
}

export default ServicesPage