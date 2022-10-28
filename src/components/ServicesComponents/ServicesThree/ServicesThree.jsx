import React, { Fragment, useEffect, useRef } from 'react'
import group5 from '../../../assets/img/shirin/group-5.png'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const ServicesThree = () => {
    // animations
const threeRef=useRef()
const servicesThree=useRef()
const rightRef= useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(threeRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: servicesThree.current,
            scrub: true,
              
          },
        })
        .from(rightRef.current, {
            x: 500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: servicesThree.current,
              scrub: true,
                
            },
          })
      }, []);
    return (
        <Fragment>
            <div ref={servicesThree} className='services-three'>
                <div ref={threeRef} className='services-three-left'>
                    <img src={group5} />
                </div>
                <div ref={rightRef} className='services-three-right'>
                    <h2 className='services-three-right-h1'>Terminalların
                        yerləşdirilməsi</h2>
                    <p className='services-three-right-p'>Vətəndaşlara ehtiyaclarını ödəyəcək kompleks xidmət göstərərək öz ticarət obyektinizdə eManat nağd ödəniş terminalını quraşdırın.
                        eManat terminallarının xəritəsinə <span className='services-three-right-p-span'>buradan </span>baxa bilərsiniz.</p>
                    <div className='services-three-right-btn'>
                        <button >Müraciət et</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ServicesThree