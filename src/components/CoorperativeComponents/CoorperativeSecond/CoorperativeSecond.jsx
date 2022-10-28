import React, { Fragment } from 'react'
import ellipse from '../../../assets/img/shirin/Ellipse 39.png'
const CoorperativeSecond = () => {
    return (
        <Fragment>
            <div className='coorperative_second'>
                <div className='coorperative_second_left'>
                    <div className='coorperative_second_left_img'>
                        <img src={ellipse} />
                    </div>
                    <div className='coorperative_second_left_text'>
                        <p className='coorperative_second_left_text_head'>Dolor sit amet</p>
                        <span className='coorperative_second_left_text_span'>Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
                    </div>
                </div>
                <div className='coorperative_second_left' id='right'>
                    <div className='coorperative_second_left_img'>
                        <img src={ellipse} />
                    </div>
                    <div className='coorperative_second_left_text'>
                        <p className='coorperative_second_left_text_head'>Dolor sit amet</p>
                        <span className='coorperative_second_left_text_span'>Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CoorperativeSecond