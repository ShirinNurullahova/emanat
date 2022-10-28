import React, { Fragment,useRef, useEffect } from 'react'
import increase from '../../../assets/img/shirin/head (1).png'
import human from '../../../assets/img/shirin/head (2).png'
import head from '../../../assets/img/shirin/head (3).png'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const CareerDark = () => {
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
    <div className='career-dark' ref={darkRef}>
        <h2 ref={hRef} className='career-dark-h1'>Bizi fərqləndirən dəyərlərimiz:</h2>
        <div className='career-dark-bottom' ref={bottomRef}>
            <div className='career-dark-bottom-element'>
               <img src={human} />
                <p>Sürətli inkişaf</p>
            </div>
            <div className='career-dark-bottom-element' >
                 <img src={increase}/>
                <p>İndividual yanaşma</p>
            </div>
            <div className='career-dark-bottom-element'>
                <img src={head}/>
                <p>Peşəkar komanda</p>
            </div>
        </div>
    </div>
</Fragment>
  )
}

export default CareerDark