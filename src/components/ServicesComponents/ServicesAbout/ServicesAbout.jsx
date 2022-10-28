import React, { Fragment, useRef, useEffect } from 'react'
import group3 from '../../../assets/img/shirin/group-3.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const ServicesAbout = () => {
    const middleRef=useRef()
    const aboutRef=useRef()
    const smainRef=useRef()
    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(middleRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: smainRef.current,
            scrub: true,
              
          },
        })
        .from(aboutRef.current, {
            x: 500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: smainRef.current,
              scrub: true,
                
            },
          })
      }, []);
    return (
        <Fragment>
            <div className='services-about' ref={smainRef}>
                <h2>Bizimlə əməkdaşlıq etməklə <span>nə qazanacaqsınız?</span> </h2>
                <div className='services-about-middle'>


                    <div ref={middleRef} className='services-about-middle-left'>
                        <div className='services-about-middle-left-el' >
                            <p className='services-about-middle-left-number'>01.</p>
                            <div className='services-about-middle-left-text'>
                                <p className='services-about-middle-left-text-one'>Müxtəlif üsullarla reklam yerləşdirmək imkanı</p>
                                <p className='services-about-middle-left-text-two'>Siz 7/24 ödəniş qəbul etməklə, müştərilərinizə daha yaxşı xidmət göstərmiş olacaqsınız</p>
                            </div>
                        </div>

                        <div className='services-about-middle-left-el'>
                            <p className='services-about-middle-left-number'>02.</p>
                            <div className='services-about-middle-left-text'>
                                <p className='services-about-middle-left-text-one'>Siz istər terminallarin ekranında, istərsə də qəbzdə, istədiyiniz növ reklam yerləşdirə bilərsiniz.</p>
                                <p className='services-about-middle-left-text-two'>Siz 7/24 ödəniş qəbul etməklə, müştərilərinizə daha yaxşı xidmət göstərmiş olacaqsınız</p>
                            </div>
                        </div>

                        <div className='services-about-middle-left-el'>
                            <p className='services-about-middle-left-number'>03.</p>
                            <div className='services-about-middle-left-text'>
                                <p className='services-about-middle-left-text-one'>Daha çox insana mesaj çatdırmaq imkanı</p>
                                <p className='services-about-middle-left-text-two'>Siz 7/24 ödəniş qəbul etməklə, müştərilərinizə daha yaxşı xidmət göstərmiş olacaqsınız</p>
                            </div>
                        </div>

                        <div className='services-about-middle-left-el'>
                            <p className='services-about-middle-left-number'>04.</p>
                            <div className='services-about-middle-left-text'>
                                <p className='services-about-middle-left-text-one'>Fərdi seçimlərə əsasən reklam yerləşdirmək imkanı</p>
                                <p className='services-about-middle-left-text-two'>Siz 7/24 ödəniş qəbul etməklə, müştərilərinizə daha yaxşı xidmət göstərmiş olacaqsınız</p>
                            </div>
                        </div>

                    </div>
                    <div ref={aboutRef} className='services-about-middle-right'>
                        <img src={group3} />
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default ServicesAbout