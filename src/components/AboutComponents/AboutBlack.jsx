import React, { useEffect, useRef } from 'react'
import Map from '../../assets/img/about-map.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutBlack = () => {
  const mapRef = useRef()
  const blackRef = useRef()
  const aboutBlack = useRef()
  useEffect(() => {
    if (window.innerWidth > 1024) {
      let tl = gsap.timeline()
      tl.from(blackRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start: '-400',
          end: "+=400",
          trigger: aboutBlack.current,
          scrub: true,

        },
      })
        .from(mapRef.current, {
          x: 500,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start: '-400',
            end: "+=400",
            trigger: aboutBlack.current,
            scrub: true,

          },
        })
    }
  }, []);
  return (
    <section ref={aboutBlack} className='about-black-section'>
      <div ref={blackRef} className="about-black-section-text">
        <p>Hazırda ödənİş terminalları
          şəbəkəsİnə <span>3000-dən</span> artıq
          ödəmə termİnalI daxİldİr. </p>
      </div>

      <div ref={mapRef} className="about-black-section-image">
        <img src={Map} alt="" />
      </div>
    </section>
  )
}

export default AboutBlack