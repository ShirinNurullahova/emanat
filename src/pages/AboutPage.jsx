import React, { Fragment, useEffect } from 'react'
import '../components/AboutComponents/About.scss'
import AboutMain from '../components/AboutComponents/AboutMain'
import AboutBlack from '../components/AboutComponents/AboutBlack'
import AboutServices from '../components/AboutComponents/AboutServices'
import AboutTarget from '../components/AboutComponents/AboutTarget'


const AboutPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])
  
  return (
    <Fragment>
      <AboutMain/>
      <AboutBlack/>
      <AboutServices/>
      <AboutTarget/>
    </Fragment>
  )
}

export default AboutPage