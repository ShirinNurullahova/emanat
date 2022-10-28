import React, { Fragment, useEffect} from 'react'
import CoorperativeMain from '../components/CoorperativeComponents/CoorperativeMain/CoorperativeMain'
import CoorperativeSecond from '../components/CoorperativeComponents/CoorperativeSecond/CoorperativeSecond'

const Coorperative = () => {
    
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
      }, [])
    
  return (
    <div>
     <CoorperativeMain/>
     <CoorperativeSecond/>
    </div>
  )
}

export default Coorperative