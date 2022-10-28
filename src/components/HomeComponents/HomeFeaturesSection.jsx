import React,{useRef, useEffect} from 'react'
import Star from '../../assets/img/home-star.png'
import MainImage from '../../assets/img/home-features-img.png'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 


const HomeFeaturesSection = () => {
  const featuresRef=useRef()
  const rightRef= useRef()
  const leftRef=useRef()
  const emanatRef=useRef()
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(leftRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        start:'-400',
        end: "+=400",
        trigger: featuresRef.current,
        scrub: true,
          
      },
    })
    .from(emanatRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        start:'-400',
        end: "+=400",
        trigger: featuresRef.current,
        scrub: true,
          
      },
    })
    .from(rightRef.current, {
        x: 500,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-400',
          end: "+=400",
          trigger: featuresRef.current,
          scrub: true,
            
        },
      })
  }, []);
  return (
    <section className='home-features-section'>
      <div ref={emanatRef} className="home-features-section-top">
        <p >eManat <span>ilə</span></p>
        <img src={Star} alt="emanat-odenis" />
      </div>

      <div className="home-features-section-container" ref={featuresRef}>

        <div className="home-features-section-container-left" ref={leftRef}>

          <div className="home-features-section-card">
            <div className="home-features-section-card-img">
              <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="white" />
                <path d="M31 11H9C7.89543 11 7 11.8954 7 13V27C7 28.1046 7.89503 29 8.9996 29H31.0029C32.1074 29 33 28.1046 33 27V13C33 11.8954 32.1046 11 31 11Z" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <path d="M8 17L33 17" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <g filter="url(#filter0_d_1_1040)">
                  <rect x="30" y="26" width="4" height="4" rx="2" fill="white" />
                </g>
                <path d="M11 25H15" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <defs>
                  <filter id="filter0_d_1_1040" x="18" y="14" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1040" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1040" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1040" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="home-features-section-card-heading">
              <p>Ödənişin dərhal qəbulu</p>
            </div>
            <div className="home-features-section-card-description">
              <p>Ödəniş etdiyiniz anda provayder ödəniş barəsində məlumat alacaq və məbləğ dərhal balansınıza köçürüləcək*</p>
            </div>
          </div>

          <div className="home-features-section-card">
            <div className="home-features-section-card-img">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="white" />
                <g filter="url(#filter0_d_1_1048)">
                  <rect x="18" y="18" width="4" height="4" rx="2" fill="white" />
                </g>
                <circle cx="20" cy="20" r="10" stroke="#0A66B5" stroke-width="2" />
                <path d="M10.8749 7.7166L8.70637 9.88969C8.31625 10.2806 8.31691 10.9138 8.70785 11.3039C9.09878 11.694 9.73194 11.6934 10.1221 11.3024L12.2906 9.12933C12.6807 8.7384 12.6801 8.10523 12.2891 7.71512C11.8982 7.325 11.265 7.32566 10.8749 7.7166Z" fill="#0A66B5" />
                <path d="M31.2897 9.88093L29.1212 7.70783C28.7311 7.3169 28.0979 7.31624 27.707 7.70635C27.3161 8.09647 27.3154 8.72963 27.7055 9.12057L29.8741 11.2937C30.2642 11.6846 30.8973 11.6853 31.2883 11.2951C31.6792 10.905 31.6799 10.2719 31.2897 9.88093Z" fill="#0A66B5" />
                <defs>
                  <filter id="filter0_d_1_1048" x="6" y="6" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1048" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1048" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1048" result="shape" />
                  </filter>
                </defs>
              </svg>

            </div>
            <div className="home-features-section-card-heading">
              <p>Sürətli ödəmə imkanı </p>
            </div>
            <div className="home-features-section-card-description">
              <p>eManat terminallarının 7/24 fəaliyyət göstərməsi və ödənişin dərhal qəbulu nəticəsində, siz ödənişinizi xidmət müddətinin bitməsinə son dəqiqə qalmışa qədər edə bilərsiniz.</p>
            </div>
          </div>

          <div className="home-features-section-card">
            <div className="home-features-section-card-img">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="white" />
                <path d="M21.7061 27.5548C20.665 27.5556 19.6471 27.2474 18.7812 26.6694C17.9153 26.0913 17.2403 25.2694 16.8417 24.3076C16.4432 23.3458 16.3389 22.2874 16.5421 21.2663C16.68 20.5738 16.955 19.9196 17.3475 19.3407C17.6574 18.8837 18.2999 18.8877 18.6905 19.278C19.0814 19.6687 19.064 20.2992 18.8094 20.7897C18.5704 21.25 18.4423 21.765 18.4423 22.2932C18.4422 23.1588 18.786 23.989 19.398 24.6012C20.01 25.2133 20.8401 25.5573 21.7058 25.5574C22.5714 25.5575 23.4016 25.2137 24.0137 24.6016L30.0437 18.5716C30.6558 17.9595 30.9997 17.1293 30.9996 16.2636C30.9996 15.3979 30.6557 14.5677 30.0435 13.9556C29.4314 13.3435 28.6012 12.9997 27.7355 12.9997C27.2069 12.9998 26.6916 13.128 26.231 13.3672C25.741 13.6218 25.111 13.6393 24.7205 13.2488C24.3301 12.8584 24.3261 12.2157 24.7832 11.906C25.6484 11.3198 26.6754 11 27.7355 11C28.4268 11 29.1112 11.1361 29.7499 11.4006C30.3885 11.6651 30.9688 12.0528 31.4576 12.5416C31.9464 13.0304 32.3341 13.6106 32.5987 14.2492C32.8632 14.8878 32.9994 15.5723 32.9994 16.2636C32.9994 16.9548 32.8633 17.6393 32.5988 18.2779C32.3343 18.9166 31.9466 19.4968 31.4578 19.9856L25.4278 26.0156C24.9395 26.5047 24.3593 26.8925 23.7206 27.1566C23.0819 27.4208 22.3973 27.5561 21.7061 27.5548Z" fill="#0A66B5" />
                <path d="M13.2642 29.9669C12.2232 29.9674 11.2054 29.659 10.3397 29.0809C9.47402 28.5028 8.79924 27.6809 8.40076 26.7192C8.00229 25.7575 7.89802 24.6992 8.10116 23.6782C8.3043 22.6572 8.80571 21.7195 9.54195 20.9835L15.572 14.9535C16.06 14.4617 16.6404 14.0711 17.2799 13.8041C17.9193 13.537 18.6051 13.3989 19.298 13.3976C19.9909 13.3963 20.6773 13.5318 21.3177 13.7963C21.9582 14.0609 22.5401 14.4493 23.03 14.9393C23.52 15.4292 23.9084 16.0111 24.173 16.6515C24.4375 17.292 24.573 17.9783 24.5717 18.6713C24.5704 19.3642 24.4322 20.05 24.1652 20.6894C24.0265 21.0216 23.8544 21.3379 23.6521 21.6336C23.3412 22.0879 22.701 22.0826 22.3118 21.6934C21.9202 21.3018 21.9391 20.6695 22.1961 20.1789C22.2395 20.0959 22.2795 20.0109 22.3158 19.9242C22.4817 19.5276 22.5676 19.1021 22.5687 18.6722C22.5697 18.2423 22.4857 17.8164 22.3217 17.419C22.1576 17.0216 21.9167 16.6606 21.6127 16.3566C21.3087 16.0526 20.9476 15.8116 20.5502 15.6476C20.1529 15.4835 19.727 15.3996 19.2971 15.4006C18.8671 15.4016 18.4416 15.4876 18.045 15.6535C17.6484 15.8194 17.2885 16.0621 16.986 16.3675L10.956 22.3975C10.3482 23.0105 10.008 23.8393 10.0098 24.7025C10.0116 25.5658 10.3553 26.3931 10.9657 27.0035C11.576 27.614 12.4033 27.9577 13.2665 27.9597C13.7933 27.9608 14.3072 27.8346 14.7672 27.598C15.258 27.3455 15.8871 27.3292 16.2774 27.7195C16.6686 28.1108 16.6729 28.7547 16.2147 29.065C15.9212 29.2637 15.6076 29.4326 15.2785 29.5688C14.6398 29.8329 13.9553 29.9682 13.2642 29.9669Z" fill="#0A66B5" />
                <g filter="url(#filter0_d_1_1066)">
                  <rect x="18" y="18" width="4" height="4" rx="2" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1_1066" x="6" y="6" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1066" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1066" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1066" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="home-features-section-card-heading">
              <p>Müştəri məmnuniyyəti</p>
            </div>
            <div className="home-features-section-card-description">
              <p>Ödəniş etmək üçün artıq poçta və ya xidmət təminatçısının ofisinə getməyinizə ehtiyac qalmayacaq. İstifadə etdiyiniz bütün xidmətlərin ödənişini bir nöqtədə, həm də sizə ən yaxın yerdə və istənilən vaxt ödəyə biləcəksiniz</p>
            </div>
          </div>

        </div>

        <div className="home-features-section-container-image">
          <img src={MainImage} alt="emanat-aparat" />
        </div>

        <div className="home-features-section-container-right" ref={rightRef}>
          <div className="home-features-section-card">
            <div className="home-features-section-card-img">
              <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="white" />
                <path d="M10 29C7.66667 28.8413 5 27.2857 5 22.3333C5 17.381 9 16.4603 11 16.619C11.6667 14.0794 14.4 9 20 9C25.6 9 28.3333 14.0794 29 16.619C31 16.7778 35 18.3333 35 23.2857C35 28.2381 32 29 30 29" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <g filter="url(#filter0_d_1_1073)">
                  <rect x="18" y="27" width="4" height="4" rx="2" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1_1073" x="6" y="15" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1073" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1073" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1073" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="home-features-section-card-heading">
              <p>Sadə və istifadəsi rahat interfeys</p>
            </div>
            <div className="home-features-section-card-description">
              <p>eManat terminalının dizaynı istifadəçinin dostudur, məhz sizin rahatlağınızı nəzərə alaraq terminallar funksional şəkildə dizayn edilmişdir.</p>
            </div>
          </div>

          <div className="home-features-section-card">
            <div className="home-features-section-card-img">
              <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5" width="40" height="40" rx="4" fill="white" />
                <path d="M30.5 14H9C7.89543 14 7 14.8954 7 16V19.5M7 19.5V34.5C7 35.6046 7.89543 36.5 9 36.5H31C32.1046 36.5 33 35.6046 33 34.5V21.5C33 20.3954 32.1046 19.5 31 19.5H7Z" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <path d="M33 24H25C23.8954 24 23 24.8954 23 26V30C23 31.1046 23.8954 32 25 32H33" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <g filter="url(#filter0_d_1_1079)">
                  <rect x="28" y="12" width="4" height="4" rx="2" fill="white" />
                </g>
                <rect x="26" y="27" width="2" height="2" rx="1" fill="#0A66B5" />
                <defs>
                  <filter id="filter0_d_1_1079" x="16" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1079" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1079" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1079" result="shape" />
                  </filter>
                </defs>
              </svg>

            </div>
            <div className="home-features-section-card-heading">
              <p>Vaxta və pula qənaət </p>
            </div>
            <div className="home-features-section-card-description">
              <p>Ödəniş etmək üçün uzun yol qət etməyə və növbələrdə vaxt itirməyə ehtiyac olmayacaq. Bütün ödənişləri yaxınlıqdakı eManat terminalında ödəyərək, yol xərclərindən azad olmaqla həm pulunuza, həm də dəyərli vaxtınıza qənaət etmiş olacaqsınız</p>
            </div>
          </div>

          <div className="home-features-section-card">
            <div className="home-features-section-card-img">
              <svg width="42" height="47" viewBox="0 0 42 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="4" width="40" height="40" rx="4" fill="white" />
                <g filter="url(#filter0_d_1_1056)">
                  <rect x="26" y="22" width="4" height="4" rx="2" fill="white" />
                </g>
                <g filter="url(#filter1_d_1_1056)">
                  <rect x="12" y="12" width="4" height="4" rx="2" fill="white" />
                </g>
                <g filter="url(#filter2_d_1_1056)">
                  <rect x="12" y="31" width="4" height="4" rx="2" fill="white" />
                </g>
                <path d="M34 14H21" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <path d="M21 24H8" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <path d="M34 33H21" stroke="#0A66B5" stroke-width="2" stroke-linecap="round" />
                <defs>
                  <filter id="filter0_d_1_1056" x="14" y="10" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1056" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1056" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1056" result="shape" />
                  </filter>
                  <filter id="filter1_d_1_1056" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1056" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1056" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1056" result="shape" />
                  </filter>
                  <filter id="filter2_d_1_1056" x="0" y="19" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_1056" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.580392 0 0 0 0 0 0 0 0 0.7 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1056" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1056" result="shape" />
                  </filter>
                </defs>
              </svg>

            </div>
            <div className="home-features-section-card-heading">
              <p>Müştəri xidmətləri</p>
            </div>
            <div className="home-features-section-card-description">
              <p> eManat müştəri xidmətləri 7/24 rejimində sizin xidmətinizdədir. Müştərilərə yüksək keyﬁyyətli xidmət göstərən komandamız bütün suallarınıza ətraflı cavab verəcək və müraciətlərinizin tez bir zamanda həll edilməsini təmin edəcək</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFeaturesSection

/* */