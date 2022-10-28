import React, { Fragment, useEffect, useRef } from 'react'
import '../Footer/Footer.scss';
import group7 from '../../../assets/img/group-7.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const Footer = () => {
  const imgRef=useRef()
  const bottomRef=useRef()
  const footerRef=useRef()
  // useEffect(() => {
  //   let tl = gsap.timeline()
  //   tl.from(bottomRef.current, {
  //     x: -100,
  //     opacity: 0,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       start:'-400',
  //       end: "+=400",
  //       trigger: footerRef.current,
  //       scrub: true,
          
  //     },
  //   })
  //   .from(imgRef.current, {
  //       x: 500,
  //       opacity: 0,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         start:'-400',
  //         end: "+=400",
  //         trigger: footerRef.current,
  //         scrub: true,
            
  //       },
  //     })
  // }, []);
  return (
    <Fragment>
      <div className='footer' ref={footerRef}>
        <img  ref={imgRef}  className='footer-img' src={group7} />
        <div className='footer-up'>
          <ul>
            <li>
              #Fusce nec
            </li>
            <li>
              #mauris aenea
            </li>
            <li>
              #Pulvinar
            </li>
            <li>
              #Faq
            </li>
            <li>
              #Sapien Curcus
            </li>
            <li>
              #Sit
            </li>

          </ul>
        </div>
        <div className='footer-bottom' ref={bottomRef}>

          <div className='footer-bottom-up'>
            <div className='footer-bottom-up-el'>
              <h1>emekdasliq</h1>
              <p>Biznes</p>
              <p>Terminal Qurasdirilmasi</p>
              <p>Marketinq</p>

            </div>
            <div className='footer-bottom-up-el'>
              <h1>contact</h1>
              <p>0124044888</p>
              <p>contact@emanat.az</p>
            </div>
            <div className='footer-bottom-up-el'>
              <h1>social media</h1>
              <p>instagram</p>
              <p>facebook</p>
            </div>

          </div>
          <hr />

          <div className='footer-bottom-two'>
            <div className='footer-bottom-two-el'>
              <h1>karyera</h1>
              <p>Vakansiya</p>
              <p className='footer-bottom-two-el-b'>Onlayn muraciet</p>
              <p>Proqramlar</p>
            </div>
            <div className='footer-bottom-two-el'>
              <h1>diger</h1>
              <p>FAQ</p>
              <p className='footer-bottom-two-el-m'> Teklif ve sikayetler</p>
              <p className='footer-bottom-two-el-m'>Terminaldan istifade qaydasi</p>
              <p className='footer-bottom-two-el-m'> Terminal xeritesi</p>

            </div>
          </div>
          <hr className='second' />


        </div>
      </div>
    </Fragment>
  )
}

export default Footer