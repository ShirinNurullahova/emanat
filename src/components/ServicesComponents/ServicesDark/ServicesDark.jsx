import React, { Fragment,useRef, useEffect } from 'react'
import users from '../../../assets/img/shirin/Users.png'
import bank from '../../../assets/img/shirin/Banknotes.png'
import attrack from '../../../assets/img/shirin/Attract Customers.png'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const ServicesDark = () => {
        // animations
         const darkRef=useRef()
         const hRef=useRef()
         const bottomRef=useRef()
    // useEffect(() => {
    //     let tl = gsap.timeline()
    //     tl.from(hRef.current, {
    //       x: -100,
    //       opacity: 0,
    //       stagger: 0.1,
    //       scrollTrigger: {
    //         start:'-400',
    //         end: "+=400",
    //         trigger: darkRef.current,
    //         scrub: true,
              
    //       },
    //     })
    //     .from(bottomRef.current, {
    //         x: 500,
    //         opacity: 0,
    //         stagger: 0.1,
    //         scrollTrigger: {
    //           start:'-400',
    //           end: "+=400",
    //           trigger: darkRef.current,
    //           scrub: true,
                
    //         },
    //       })
    //   }, []);
    return (
        <Fragment>
            <div className='services-dark' ref={darkRef}>
                <h2 ref={hRef} className='services-dark-h1'>Bizimlə əməkdaşlıq etməklə <span className='services-dark-h1-span'>nə qazanacaqsınız?</span> </h2>
                <div className='services-dark-bottom' ref={bottomRef}>
                    <div className='services-dark-bottom-element'>
                        <img src={bank}/>
                        <p>Əlavə gəlir mənbəyi</p>
                    </div>
                    <div className='services-dark-bottom-element'>
                        <img src={users} />
                        <p>Yeni müştərilərin cəlbi</p>
                    </div>
                    <div className='services-dark-bottom-element'>
                        <img src={attrack}/>
                        <p>Müştəri məmnuniyyəti</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ServicesDark