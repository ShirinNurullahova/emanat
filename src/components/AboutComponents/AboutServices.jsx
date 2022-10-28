import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutServices = () => {
    const containerRef = useRef()
    const textRef = useRef()
    const sectionRef = useRef()
    useEffect(() => {
        if (window.innerWidth > 1024) {
            let tl = gsap.timeline()
            tl.from(textRef.current, {
                x: -100,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    start: '-400',
                    end: "+=400",
                    trigger: sectionRef.current,
                    scrub: true,

                },
            })
                .from(containerRef.current, {
                    x: 500,
                    opacity: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                        start: '-400',
                        end: "+=400",
                        trigger: sectionRef.current,
                        scrub: true,

                    },
                })
        }
    }, []);
    return (
        <section className='about-services-section' ref={sectionRef}>
            <div className="about-services-section-heading" ref={textRef}>
                <p>Şirkətimiz öz istifadəçilərinə etibarlı və asan yolla aşağıdakı xidmətlərin ödənişlərini təklif edir</p>
            </div>

            <div ref={containerRef} className="about-services-section-container">
                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.669 0.602068C21.2887 0.259794 20.7113 0.259794 20.331 0.602068L0.936995 18.0567C0.255778 18.6698 0.689474 19.8 1.60596 19.8H4C4.55228 19.8 5 20.2477 5 20.8V36.8C5 37.3523 5.44772 37.8 6 37.8H16C16.5523 37.8 17 37.3523 17 36.8V24.8C17 24.2477 17.4477 23.8 18 23.8H24C24.5523 23.8 25 24.2477 25 24.8V36.8C25 37.3523 25.4477 37.8 26 37.8H36C36.5523 37.8 37 37.3523 37 36.8V20.8C37 20.2477 37.4477 19.8 38 19.8H40.394C41.3105 19.8 41.7442 18.6698 41.063 18.0567L21.669 0.602068Z" fill="#3E7CFF" />
                        </svg>


                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Kommunal ödənişlər</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 0C0.896 0 0 0.896 0 2V22C0 23.104 0.896 24 2 24H38C39.104 24 40 23.104 40 22V2C40 0.896 39.104 0 38 0H2ZM5.82422 4H34.1758C34.325 4.42061 34.5662 4.80263 34.8818 5.11821C35.1974 5.43379 35.5794 5.67499 36 5.82422V18.1758C35.5794 18.325 35.1974 18.5662 34.8818 18.8818C34.5662 19.1974 34.325 19.5794 34.1758 20H5.82422C5.67499 19.5794 5.43379 19.1974 5.11821 18.8818C4.80263 18.5662 4.42061 18.325 4 18.1758V5.82422C4.42061 5.67499 4.80263 5.43379 5.11821 5.11821C5.43379 4.80263 5.67499 4.42061 5.82422 4ZM20 6C18.4087 6 16.8826 6.63214 15.7574 7.75736C14.6321 8.88258 14 10.4087 14 12C14 13.5913 14.6321 15.1174 15.7574 16.2426C16.8826 17.3679 18.4087 18 20 18C21.5913 18 23.1174 17.3679 24.2426 16.2426C25.3679 15.1174 26 13.5913 26 12C26 10.4087 25.3679 8.88258 24.2426 7.75736C23.1174 6.63214 21.5913 6 20 6ZM10 10C8.896 10 8 10.894 8 12C8 13.106 8.896 14 10 14C11.104 14 12 13.106 12 12C12 10.894 11.104 10 10 10ZM30 10C28.896 10 28 10.894 28 12C28 13.106 28.896 14 30 14C31.104 14 32 13.106 32 12C32 10.894 31.104 10 30 10ZM3.98047 28L34.457 35.9375C35.527 36.2155 36.6165 35.5719 36.8945 34.5039L38.5898 28H34.457L33.9844 29.8008C33.0864 29.8788 32.2755 30.3576 31.7695 31.1016L19.8555 28H3.98047Z" fill="#31BDFF" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Bank xidmətləri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 0C14.616 0 8.17103 4.032 4.70703 10H9.58984C11.3898 7.776 13.7387 6.01591 16.4727 5.00391C15.8467 6.45991 15.3449 8.16 14.9609 10H19.0742C20.0322 6.046 21.374 4 22 4C22.626 4 23.9678 6.046 24.9258 10H29.0391C28.6551 8.16 28.1513 6.45991 27.5273 5.00391C30.2593 6.01591 32.6102 7.776 34.4102 10H39.293C35.829 4.032 29.384 0 22 0ZM0 14L2.48438 26H5.10156L6.80078 19.0586L8.49609 26H11.1016L13.5859 14H10.5781L9.50391 20.7305L7.90625 14H5.67969L4.07812 20.7422L3.01562 14H0ZM15.207 14L17.6914 26H20.3086L22.0078 19.0586L23.7031 26H26.3086L28.793 14H25.7891L24.7109 20.7305L23.1172 14H20.8867L19.2891 20.7422L18.2227 14H15.207ZM30.4141 14L32.8984 26H35.5156L37.2148 19.0586L38.9102 26H41.5156L44 14H40.9922L39.918 20.7305L38.3203 14H36.0938L34.4922 20.7422L33.4297 14H30.4141ZM4.70703 30C8.17103 35.968 14.616 40 22 40C29.384 40 35.829 35.968 39.293 30H34.4102C32.6102 32.224 30.2613 33.9841 27.5273 34.9961C28.1513 33.5401 28.6512 31.84 29.0352 30H24.9219C23.9639 33.954 22.6221 36 21.9961 36C21.3701 36 20.0322 33.954 19.0742 30H14.9609C15.3449 31.84 15.8487 33.5401 16.4727 34.9961C13.7407 33.9841 11.3898 32.224 9.58984 30H4.70703Z" fill="#AA5EFF" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>İnternet provayderlər</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4061 0.180506C18.1476 0.0655883 17.8524 0.0655881 17.5939 0.180506L0.593863 7.73606C0.232735 7.89656 0 8.25034 0 8.64553C0 10.6267 0 16.6861 0 20C0 35.4694 12.5664 42.7927 17.8095 43.9597C17.9389 43.9884 18.0611 43.9884 18.1905 43.9597C23.4336 42.7927 36 35.4694 36 20C36 16.6861 36 10.6267 36 8.64552C36 8.25034 35.7673 7.89656 35.4061 7.73606L18.4061 0.180506Z" fill="#5B67DA" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Sığorta xidmətləri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 39V5C28 2.24 25.76 0 23 0H5C2.24 0 0 2.24 0 5V39C0 41.76 2.24 44 5 44H23C25.76 44 28 41.76 28 39ZM23 40H5C4.448 40 4 39.552 4 39V5C4 4.448 4.448 4 5 4H7.25L8.698 6.894C9.036 7.572 9.728 8 10.486 8H17.43C18.188 8 18.88 7.572 19.218 6.894L20.666 4H23C23.552 4 24 4.448 24 5V39C24 39.552 23.552 40 23 40Z" fill="#FF8D37" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Mobil operatorlar</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.95 0C28.766 0 27 2.298 27 2.298C27 2.298 25.234 0 22.05 0C18.708 0 16 2.708 16 6.05C16 9.936 22.78 16.196 25.694 18.706C26.448 19.356 27.552 19.356 28.306 18.706C31.22 16.196 38 9.936 38 6.05C38 2.708 35.292 0 31.95 0ZM39.172 20.828C38.068 19.724 36.276 19.724 35.172 20.828L26 30H18C17.448 30 17 29.552 17 29C17 28.448 17.448 28 18 28H23C24.656 28 26 26.656 26 25C26 23.344 24.656 22 23 22H13.314C11.192 22 9.158 22.842 7.658 24.344L0 32L8 40L12 36H26.344C27.404 36 28.422 35.578 29.172 34.828L39.172 24.828C40.276 23.724 40.276 21.932 39.172 20.828Z" fill="#82E122" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Xeyriyyə</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C11.4696 5.30337e-05 10.9609 0.210784 10.5858 0.585845C10.2108 0.960906 10.0001 1.46958 10 2V3V10H6C4.896 10 4 9.102 4 8C4 7.232 4.43431 6.56447 5.07031 6.23047C5.67631 5.91047 6 5.23088 6 4.54688C6 3.05687 4.39966 2.02991 3.09766 2.75391C1.25366 3.77791 0 5.744 0 8V34C0 36.21 1.79 38 4 38H32C34.21 38 36 36.21 36 34V14C36 11.79 34.21 10 32 10H30V2C29.9999 1.46958 29.7892 0.960906 29.4142 0.585845C29.0391 0.210784 28.5304 5.30337e-05 28 0H13H12ZM15.8242 4H24.1758C24.325 4.42061 24.5662 4.80263 24.8818 5.11821C25.1974 5.43379 25.5794 5.67499 26 5.82422V10H22C22 8.896 21.104 8 20 8C18.896 8 18 8.896 18 10H14V5.82422C14.4206 5.67499 14.8026 5.43379 15.1182 5.11821C15.4338 4.80263 15.675 4.42061 15.8242 4ZM28 22C29.104 22 30 22.896 30 24C30 25.104 29.104 26 28 26C26.896 26 26 25.104 26 24C26 22.896 26.896 22 28 22Z" fill="#FFAB0F" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Pul köçürmələri</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.062 0H6.938C5.168 0 3.614 1.16 3.106 2.854C1.926 6.782 0 13.836 0 18C0 23.522 4.476 27.998 9.998 28C16.598 28 27.404 28 34.004 28C39.524 27.998 44 23.522 44 18C44 13.836 42.074 6.782 40.894 2.854C40.386 1.16 38.832 0 37.062 0ZM18 16H16V18C16 19.104 15.104 20 14 20C12.896 20 12 19.104 12 18V16H10C8.896 16 8 15.104 8 14C8 12.896 8.896 12 10 12H12V10C12 8.896 12.896 8 14 8C15.104 8 16 8.896 16 10V12H18C19.104 12 20 12.896 20 14C20 15.104 19.104 16 18 16ZM30 12C28.896 12 28 11.104 28 10C28 8.896 28.896 8 30 8C31.104 8 32 8.896 32 10C32 11.104 31.104 12 30 12ZM34 20C32.896 20 32 19.104 32 18C32 16.896 32.896 16 34 16C35.104 16 36 16.896 36 18C36 19.104 35.104 20 34 20Z" fill="#FF442B" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Mərc oyunları</p>
                    </div>


                </div>

                <div className="about-services-section-container-item">
                    <div className="about-services-section-container-item-img">
                        <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C14.9391 0 13.9217 0.421428 13.1716 1.17157C12.4214 1.92172 12 2.93913 12 4C12 5.06087 12.4214 6.07828 13.1716 6.82843C13.9217 7.57857 14.9391 8 16 8C17.0609 8 18.0783 7.57857 18.8284 6.82843C19.5786 6.07828 20 5.06087 20 4C20 2.93913 19.5786 1.92172 18.8284 1.17157C18.0783 0.421428 17.0609 0 16 0ZM28 0C26.9391 0 25.9217 0.421428 25.1716 1.17157C24.4214 1.92172 24 2.93913 24 4C24 5.06087 24.4214 6.07828 25.1716 6.82843C25.9217 7.57857 26.9391 8 28 8C29.0609 8 30.0783 7.57857 30.8284 6.82843C31.5786 6.07828 32 5.06087 32 4C32 2.93913 31.5786 1.92172 30.8284 1.17157C30.0783 0.421428 29.0609 0 28 0ZM4 0C2.93913 0 1.92172 0.421428 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4C0 5.06087 0.421427 6.07828 1.17157 6.82843C1.92172 7.57857 2.93913 8 4 8C5.06087 8 6.07828 7.57857 6.82843 6.82843C7.57857 6.07828 8 5.06087 8 4C8 2.93913 7.57857 1.92172 6.82843 1.17157C6.07828 0.421428 5.06087 0 4 0Z" fill="black" />
                        </svg>



                    </div>

                    <div className="about-services-section-container-item-text">
                        <p>Əyləncə və s. xidmətlər</p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default AboutServices