import React, { Fragment, useEffect, useRef } from 'react'
import man from '../../../assets/img/shirin/group-6.png'
import group from '../../../assets/img/shirin/group-1.png'
import group2 from '../../../assets/img/shirin/group-2.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)




const ServicesSecond = () => {
  //  animation ref
  const hRef = useRef()
  const serviceRef = useRef()
  const gRef = useRef()
const oneRef=useRef()
const twoRef=useRef()
const threeRef=useRef()
const fourRef=useRef()
const fiveRef=useRef()
const sixRef=useRef()
const manRef=useRef()
const grupRef=useRef()
const rightRef=useRef()
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(hRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        start:'-400',
        end: "+=400",
        trigger: serviceRef.current,
        scrub: true,
          
      },
    },"<")
      .from(gRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-400',
          end: "+=500",
          trigger: serviceRef.current,
          scrub: true,
         
        },
      }, '<')
      .from(manRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-10',
          end: "+=800",
          trigger: serviceRef.current,
          scrub: true,
         
        },
      }, '<')
      .from(rightRef.current, {
        x: 100,
        // opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-300',
          end: "+=800",
          trigger: serviceRef.current,
          scrub: true,
         
        },
      }, '<')
      
      .from(grupRef.current, {
        x: 500,
        // opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-300',
          end: "+=900",
          trigger: serviceRef.current,
          scrub: true,
      
        },
      }, '<')
  }, []);

  return (
    <Fragment>

      <div className='services-second' ref={serviceRef}>

        <h2 ref={hRef} className='services-second-h1'>Reklam imkanları</h2>
        <img ref={gRef} className='group-1' src={group} />
        <div className='services-second-middle'>
          <img ref={manRef} className='services-second-middle-left' src={man} />

          <div className='services-second-middle-right' ref={rightRef}>
            <div className='services-second-middle-right-element' ref={oneRef}>
              <p className='services-second-middle-right-element-p'>01.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Müştəri məmnuniyyəti</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '250px' }}>Siz 7/24 ödəniş qəbul etməklə, müştərilərinizə daha yaxşı xidmət göstərmiş olacaqsınız</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={twoRef}>
              <p className='services-second-middle-right-element-p'>02.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Xərclərin azaldılması</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Siz ödənişlərin qəbulu üçün əlavə işçi qüvvəsi və avadanlıq saxlamağa ehtiyac duymayacaqsınız və xərclərinizi əhəmiyyətli dərəcədə azaldacaqsınız</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={threeRef}>
              <p className='services-second-middle-right-element-p'>03.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Proseslərin effektiv idarə edilməsi</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}> Ödəniş qəbulu zamanı yarana biləcək  problemlərli aradan qaldırmış olacaqsınız. Nəticədə şirkətin işçi qüvvəsinin effektiv və səmərəli idarə edilməsinə əhəmiyyətli dərəcədə təsir göstərmiş olur</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={fourRef}>
              <p className='services-second-middle-right-element-p'>04.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Satışların artması</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Terminallar vasitəsilə ödəniş qəbulu müştəri məmnuniyyətinə səbəb olmaqla, mövcud müştərilərinizin qorunub saxlanması və yeni müştərilərin cəlb edilməsinə gətirib çıxaracaq</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={fiveRef}>
              <p className='services-second-middle-right-element-p'>05.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>QIWI ilə texniki əməkdaşlıq</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Proqram təminatı, texniki dəstək sahələrində biz dünyaca məşhur QIWI şirkəti ilə əməkdaşlıq edirik, bu isə bizim xidmətin keyfiyyəti və etibarlılığı barəsində tam zəmanət verir</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={sixRef}>
              <p className='services-second-middle-right-element-p'>06.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Reklam yerləşdirmək imkanı</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Bizimlə əməkdaşlıq etməklə, siz həm də terminalların ekranında, qəbzdə, eləcə də saytımızda istədiyiniz növ reklamı yerləşdirmək imkanı əldə edə biləcəksiniz, bu isə öz mesajınızı daha çox insana çatdıra bilmək üçün yeni və əla imkanlar deməkdir</p>
              </div>
            </div>

          </div>
          <img ref={grupRef} className='services-second-middle-group-2' src={group2} />
        </div>


      </div>
    </Fragment>
  )
}

export default ServicesSecond