import React, { Fragment, useEffect } from 'react'
import '../components/HomeComponents/Home.scss'
import HomeBanner from '../components/HomeComponents/HomeBanner'
import HomeBlackSection from '../components/HomeComponents/HomeBlackSection'
import HomeEmekdasliqSection from '../components/HomeComponents/HomeEmekdasliqSection'
import HomeFeaturesSection from '../components/HomeComponents/HomeFeaturesSection'
import HomeJoinus from '../components/HomeComponents/HomeJoinus'
import HomeNews from '../components/HomeComponents/HomeNews'
import HomePaySection from '../components/HomeComponents/HomePaySection'

const HomePage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = ''
  }, [])
  return (
    <Fragment>
      <HomeBanner />
      <HomeBlackSection />
      <HomeFeaturesSection />
      <HomeEmekdasliqSection />
      <HomePaySection />
      <HomeJoinus />
      <HomeNews />
    </Fragment>
  )
}

export default HomePage