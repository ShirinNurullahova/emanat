import React, { useEffect, useRef } from 'react'
import Main from '../../assets/img/about-main.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutMain = () => {
    // animations ref
    const rightmain = useRef()
    const leftmain = useRef()

    useEffect(() => {
        if (window.innerWidth > 1024) {

            let tl = gsap.timeline()
            tl.fromTo(leftmain.current, { x: "-100px", opacity: '0' }, {
                x: "0%",
                delay: 0.05,
                opacity: '1'
            }, '<')
                .fromTo(rightmain.current, { x: "100px", opacity: '0' }, {
                    x: "0%",
                    delay: 0.05,
                    opacity: '1'
                }, '<')
        }

    });
    return (
        <main className='about-main-section'>
            <div className="about-main-section-left" ref={leftmain}>
                <div className="about-main-section-left-heading">
                    <h1>Ölkədaxİlİ <span>3000-dən</span> artıq ödənİş nöqtəsİ</h1>
                </div>

                <div className="about-main-section-left-description">
                    <p>Modenis MMC 2012-ci ilin sentyabr ayında fəaliyyətə başlamış və 2013-cü ilin martın 5-də eManat brendi ilə Azərbaycan ödəniş bazarına daxil olmuşdur. Şirkət hazırda özünəxidmət nağd ödəniş terminalları şəbəkəsini elektron idarə edir</p>
                </div>

                <div className="about-main-section-left-button">
                    <button>Kəşf et</button>
                </div>
            </div>

            <div className="about-main-section-right" ref={rightmain}>
                <img src={Main} alt="" />
            </div>
        </main>
    )
}

export default AboutMain