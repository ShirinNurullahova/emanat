import React, { Fragment, useEffect } from 'react'
import CareerBlue from '../components/CareerComponents/CareerBlue/CareerBlue'
import CareerDark from '../components/CareerComponents/CareerDark/CareerDark'
import CareerMain from '../components/CareerComponents/CareerMain/CareerMain'
import CareerWhite from '../components/CareerComponents/CareerWhite/CareerWhite'


const CareerPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])
  return (
    <Fragment>
      <CareerMain />
      <CareerDark />
      <CareerWhite />
      <CareerBlue />
    </Fragment>
  )
}

export default CareerPage