import React, { Fragment, useRef, useEffect } from 'react'
import '../../ServicesComponents/Services.scss';
import terminal from '../../../assets/img/shirin/terminal.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const ServicesMain = () => {
    // animations ref
    const termRef = useRef()
    const mainRef = useRef()

    useEffect(() => {
        let tl = gsap.timeline()
        tl.fromTo(mainRef.current, { x: "-100px", opacity: '0' }, {
            x: "0%",
            delay: 0.05,
            opacity: '1'
        }, '<')
            .fromTo(termRef.current, { x: "100px", opacity: '0' }, {
                x: "0%",
                delay: 0.05,
                opacity: '1'
            }, '<')
    });
    return (
        <Fragment>
            <main className='services-main'>
                <div className='services-main-one' ref={mainRef}>
                    <h1 className='services-main-one-h1'>
                        Müştərİlərİnİzə xİdmət ödənİşlərİnİ etmələrİ üçün
                        <span className='services-main-one-h1-span'> ən effektİv vasİtə</span> təqdİm etmək İstəyİrsİnİz?
                    </h1>
                    <p className="services-main-one-p">
                        O zaman yüksək keyfiyyətli, etibarlı və
                        təhlükəsiz eManat nağd ödəniş terminalını seçin
                    </p>
                    <div className="services-main-one-btn">
                        <button>Bizə qoşulun</button>
                    </div>
                </div>
                <div className='services-main-img'>
                    <img ref={termRef} src={terminal} />
                </div>
            </main>

        </Fragment>
    )
}

export default ServicesMain