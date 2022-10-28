import React, { useEffect, useRef } from 'react'
import LeftImage from '../../assets/img/about-target-left.png';
import RightImage from '../../assets/img/about-target-right.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutTarget = () => {

  const imageRef = useRef()
  const ulRef = useRef()
  const headRef = useRef()
  const targetRef = useRef()
  useEffect(() => {
    if (window.innerWidth > 1024) {
      let tl = gsap.timeline()
      tl.from(imageRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start: '-400',
          end: "+=400",
          trigger: targetRef.current,
          scrub: true,

        },
      }).from(headRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start: '-400',
          end: "+=400",
          trigger: targetRef.current,
          scrub: true,

        },
      })
        .from(ulRef.current, {
          x: 500,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start: '-400',
            end: "+=400",
            trigger: targetRef.current,
            scrub: true,

          },
        })
    }
  }, []);
  return (
    <section className='about-target-section' ref={targetRef}>
      <div className="about-target-section-heading" ref={headRef}>
        <h4><span>eManat-ın</span> hədəfləri</h4>
      </div>

      <div className="about-target-section-container">

        <div className="about-target-section-container-left" ref={imageRef}>
          <img src={LeftImage} alt="" />
        </div>

        <div className="about-target-section-container-right" ref={ulRef}>
          <ol>
            <li>
              <h5>Strateji baxışımız</h5>
              <p>Azərbaycanda ödəniş xidmətləri sahəsində bazar payı və gəlirlilik üzrə lider olmaq</p>
            </li>

            <li>
              <h5>Missiyamız</h5>
              <p>Bizim missiyamız xidmətlərin ödənişini sürətli, rahat, etibarlı və hamı üçün əlçatan etməklə insanların həyatını asanlaşdırmaqdır</p>
            </li>

            <li>
              <h5>Dəyərlərimiz</h5>
              <p>Qətiyyətli dürüstlük, Müştəriyönümlü yanaşma, Etibarlılıq, İnnovativlik, Keyfiyyət Təkmilləşmə</p>
            </li>
          </ol>
        </div>

        <div className="about-target-section-container-end">
          <img src={RightImage} alt="" />
        </div>

      </div>
    </section>
  )
}

export default AboutTarget