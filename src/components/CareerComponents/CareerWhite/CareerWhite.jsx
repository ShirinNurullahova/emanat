import React, { Fragment, useRef, useEffect } from 'react'
import girl from '../../../assets/img/shirin/Group 1856.png'
import rect from '../../../assets/img/shirin/Group 1845.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const CareerWhite = () => {
    const whiteRef=useRef()
    const imgRef=useRef()
    const bottomRef=useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(imgRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: whiteRef.current,
            scrub: true,
              
          },
        })
        .from(bottomRef.current, {
            x: 500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: whiteRef.current,
              scrub: true,
                
            },
          })
      }, []);
    return (
        <Fragment>

            <div className='career-white' ref={whiteRef}>

                <h2 className='career-white-h1'>Hər yerdə <span className='career-white-h1-span'>eManat</span></h2>
               

                <div className='career-white-bottom' >
                    
                    <div className='career-white-bottom-left' ref={imgRef}><img  src={girl} /></div>
                    <div className='career-white-bottom-right' ref={bottomRef}>
                        <div className='career-white-bottom-right-elem'>
                            <p className='career-white-bottom-right-elem-one'>01.</p>
                            <p className='career-white-bottom-right-elem-two'>Rəqabətə davamlı əmək haqqı</p>
                        </div>
                        <div className='career-white-bottom-right-elem'>
                            <p className='career-white-bottom-right-elem-one'>02.</p>
                            <p className='career-white-bottom-right-elem-two'>Tibbi/həyat sığortası</p>
                        </div>
                        <div className='career-white-bottom-right-elem'>
                            <p className='career-white-bottom-right-elem-one'>03.</p>
                            <p className='career-white-bottom-right-elem-two'>Nahar təminatının qarşılaşması</p>
                        </div>
                        <div className='career-white-bottom-right-elem'>
                            <p className='career-white-bottom-right-elem-one'>04.</p>
                            <p className='career-white-bottom-right-elem-two'>Rüblük istirahət tədbirləri</p>
                        </div>
                        <div className='career-white-bottom-right-elem'>
                            <p className='career-white-bottom-right-elem-one'>05.</p>
                            <p className='career-white-bottom-right-elem-two'>Təlim imkanı</p>
                        </div>
                    </div> 
                    <img className='career-white-rect' src={rect}/>
                   
                </div>
            </div>
        </Fragment>
    )
}

export default CareerWhite