import React,{useEffect, useRef} from 'react'
import Main from '../../assets/img/home-pay-image.png'
import First from '../../assets/img/home-pay-1.png'
import Second from '../../assets/img/home-pay-2.png'
import Third from '../../assets/img/home-pay-3.png'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const HomePaySection = () => {
    const leftRef=useRef()
    const imagRef=useRef()
    const payRef=useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(leftRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: payRef.current,
            scrub: true,
              
          },
        })
        .from(imagRef.current, {
            x: 500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: payRef.current,
              scrub: true,
                
            },
          })
      }, []);
  return (
    <section className='home-pay-section' ref={payRef}>
        <div ref={leftRef} className="home-pay-section-left">
            <div className="home-pay-section-left-heading">
                <p>Ölkədaxİlİ <span>3000-dən</span> artıq ödənİş nöqtəSİ</p>
            </div>
            <div className="home-pay-section-left-description">
                <p>Modenis MMC 2012-ci ilin sentyabr ayında fəaliyyətə başlamış və 2013-cü ilin martın 5-də eManat brendi ilə Azərbaycan ödəniş bazarına daxil olmuşdur. Şirkət hazırda özünəxidmət nağd ödəniş terminalları şəbəkəsini elektron idarə edir.</p>
            </div>
            <div className="home-pay-section-left-button">
                <button>Daha çox öyrən</button>
            </div>
        </div>

        <div ref={imagRef} className="home-pay-section-right">
            <img src={Main}/>
        </div>
    </section>
  )
}

export default HomePaySection