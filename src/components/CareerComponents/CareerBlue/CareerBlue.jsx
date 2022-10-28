import React, { Fragment, useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const CareerBlue = () => {
    const blueRef=useRef()
    const endRef=useRef()
    const careerRef=useRef()
    const h1Ref=useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(careerRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: blueRef.current,
            scrub: true,
              
          },
        })
        .from(h1Ref.current, {
            x: -100,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: blueRef.current,
              scrub: true,
                
            },
          })
        .from(endRef.current, {
            x: -100,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: blueRef.current,
              scrub: true,
                
            },
          })
      }, []);
    return (
        <Fragment>
            <div className='career-blue' ref={blueRef}>
                <h2 ref={h1Ref} className='career-blue-h1'>Təcrübə və bacarığınıza <span className='career-blue-h1-span'>uyğun iş</span> axtarırsınız?</h2>
                <p ref={endRef} className='career-blue-p'>Aşağıda qeyd olunan "Açar" sözlər vasitəsilə sizə uyğun olan vakansiyalara baxa bilərsiniz</p>
                <div className='career-blue-div' ref={careerRef}>
                    <div className='career-blue-div-el'>
                        <button className='career-blue-div-el-btn'>Əməliyyatlar</button>
                        <button className='career-blue-div-el-btn'>İT İnfrastruktur</button>
                        <button className='career-blue-div-el-btn1'>İnformasiya sistemlərinin inkişafı</button>
                    </div>
                    <div className='career-blue-div-el'>
                        <button className='career-blue-div-el-btn'>Əməliyyatlar</button>
                        <button className='career-blue-div-el-btn'>İT İnfrastruktur</button>
                        <button className='career-blue-div-el-btn1'>İnformasiya sistemlərinin inkişafı</button>
                    </div>
                    <div className='career-blue-div-el'>
                        <button className='career-blue-div-el-btn1'>İnformasiya sistemlərinin inkişafı</button>
                        <button className='career-blue-div-el-btn'>Əməliyyatlar</button>
                        <button className='career-blue-div-el-btn'>İT İnfrastruktur</button>
                    </div>
                </div>
                <p  className='career-blue-end'>İş həyatını arzuladığın kimi yaşa!</p>
            </div>
        </Fragment>
    )
}

export default CareerBlue