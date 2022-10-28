import React, { Fragment,useEffect, useRef } from 'react'
import screen from '../../../assets/img/shirin/screen.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const ServicesBlue = () => {
    const blueRef=useRef()
    const leftRef=useRef()
    const servicesBlue = useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(leftRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: servicesBlue.current,
            scrub: true,
              
          },
        })
        .from(blueRef.current, {
            x: 500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: servicesBlue.current,
              scrub: true,
                
            },
          })
      }, []);
    return (
        <Fragment>
            <div ref={servicesBlue} className='services-blue'>
        <div ref={leftRef} className='services-blue-left'>
                    <h2>Marketinq</h2>
                    <p>Marketinq mesajınızı mümkün qədər çox müştəriyə çatdırmaq və şirkətinizi/brendinizi tanıtmaq üçün effektiv və sərfəli vasitələr axtarırsınız? eManat terminalları bunun üçün ideal seçimdir.

                    </p>
                    <div className='services-blue-left-btn'>
                        <button>Müraciət et</button>
                    </div>

                </div>
                <div ref={blueRef} className='services-blue-right'>
                    <img src={screen} />
                </div>
            </div>
        </Fragment>
    )
}

export default ServicesBlue