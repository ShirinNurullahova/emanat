import React,{useEffect, useRef} from 'react'
import MainImage from '../../assets/img/home-emek-main.png'
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay,Pagination } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import 'swiper/css/autoplay'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 


const HomeEmekdasliqSection = () => {
    const homeRef=useRef()
    const mainRef=useRef()
    const imgRef=useRef()

    useEffect(() => {
        let tl = gsap.timeline()
        tl.from(imgRef.current, {
          x: -100,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start:'-400',
            end: "+=400",
            trigger: homeRef.current,
            scrub: true,
              
          },
        })
        .from(mainRef.current, {
            x: 500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
              start:'-400',
              end: "+=400",
              trigger: homeRef.current,
              scrub: true,
                
            },
          })
      }, []);
    return (
        <section className='home-emekdasliq'  ref={homeRef}>
            <div ref={imgRef} className="home-emekdasliq-image">
                <img src={MainImage} alt="" />
            </div>

            <div ref={mainRef} className="home-emekdasliq-main">
                <div className="home-emekdasliq-main-heading">
                    <p><span>eManat</span> ilə əməkdaşlıq</p>
                </div>

                <div className="home-emekdasliq-main-container">
                    <div className="home-emekdasliq-main-container-description">
                        <p>Ödəniş etdiyiniz anda provayder ödəniş barəsində məlumat alacaq və məbləğ dərhal balansınıza köçürüləcək.</p>
                    </div>

                    <div className="home-emekdasliq-main-container-btn">
                        <button>Kəşf et</button>
                    </div>
                </div>

                <div className="home-emekdasliq-main-slider">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 800,
                            disableOnInteraction: false,
                          }}
                        slidesPerView={3}
                        slidesPerColumn={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Autoplay,Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://www.kapitalbank.az/files/about/main/Kapital_Bank_Logo.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://insure.az/public/images/partners/rabitabank.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/PASHA_Bank_Georgia_logo_%28English%29.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://www.kapitalbank.az/files/about/main/Kapital_Bank_Logo.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://insure.az/public/images/partners/rabitabank.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/PASHA_Bank_Georgia_logo_%28English%29.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://www.kapitalbank.az/files/about/main/Kapital_Bank_Logo.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://insure.az/public/images/partners/rabitabank.png" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="home-emekdasliq-main-slider-div">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/PASHA_Bank_Georgia_logo_%28English%29.png" alt="" />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomeEmekdasliqSection