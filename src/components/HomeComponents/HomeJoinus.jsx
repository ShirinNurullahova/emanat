import React, {useEffect, useRef} from 'react'
import Main from '../../assets/img/home-join-main.png'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const HomeJoinus = () => {
    const leftJoinRef=useRef()
    const rightRef=useRef()
    const joinRef=useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(leftJoinRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: joinRef.current,
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
              trigger: joinRef.current,
              scrub: true,
                
            },
          })
      }, []);
  return (
    <section className='home-joinus-section' ref={joinRef}>
        <div className="home-joinus-section-left" ref={leftJoinRef}>
            <div className="home-joinus-section-left-heading">
                <p>
                Komandamıza qoşulun!
                </p>
            </div>

            <div className="home-joinus-section-left-description">
                <p>Modenis MMC 2012-ci ilin sentyabr ayında fəaliyyətə başlamış və 2013-cü ilin martın 5-də eManat brendi ilə Azərbaycan ödəniş bazarına daxil olmuşdur.</p>
            </div>

            <div className="home-joinus-section-left-button">
                <button>Daha çox öyrən</button>
            </div>
        </div>
        <div ref={rightRef} className="home-joinus-section-right">
            <img src={Main} alt="" />
        </div>
    </section>
  )
}

export default HomeJoinus