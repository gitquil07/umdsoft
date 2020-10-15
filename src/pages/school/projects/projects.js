import React from 'react'
import './projects.css'

import web from '../../../img/web.svg'
import mobile from '../../../img/mobile.svg'
import desctop from '../../../img/desctop.svg'
import python from '../../../img/python.svg'

class Projects extends React.Component {
    render() {
        return(
            <div className='d-flex justify-content-between'>

                <div className='projects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={web}
                            className='project__img'
                        />
                    </div>
                    <div className='h-50 px-2'>
                        <div className='pt-2 pb-3 border-bottom'>
                            <div className='d-flex'>
                                <h5 className='mb-1 col__56 font-weight-bold'>SUCCESS DARSLARI</h5>
                                <i role='button' className="heart__icon fas fa-heart col__green"></i>
                            </div>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p className='projects__text'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <ul className='pl-4'>
                                <li className='pl-0 project__li'><span className='projects__text'>Maktab dars rejasi asosida</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Har haftalik jadval</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Kunlik 5 soat dars</span></li>
                            </ul>
                            <p className='mt-4 mb-3'>
                                <a href='#' className='bg__blue mx-1 p-2 project__btn'>BATAFSIL</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='projects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={mobile}
                            className='project__img'
                        />
                    </div>
                    <div className='h-50 px-2'>
                        <div className='pt-2 pb-3 border-bottom'>
                            <div className='d-flex'>
                                <h5 className='mb-1 col__56 font-weight-bold'>MOBILE DARSLARI</h5>
                                <i role='button' className="heart__icon fas fa-heart col__green"></i>
                            </div>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p className='projects__text'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <ul className='pl-4'>
                                <li className='pl-0 project__li'><span className='projects__text'>Maktab dars rejasi asosida</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Har haftalik jadval</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Kunlik 5 soat dars</span></li>
                            </ul>
                            <p className='mt-4 mb-3'>
                                <a href='#' className='bg__blue mx-1 p-2 project__btn'>BATAFSIL</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='projects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={desctop}
                            className='project__img'
                        />
                    </div>
                    <div className='h-50 px-2'>
                        <div className='pt-2 pb-3 border-bottom'>
                            <div className='d-flex'>
                                <h5 className='mb-1 col__56 font-weight-bold'>DESCTOP DARSLARI</h5>
                                <i role='button' className="heart__icon fas fa-heart col__green"></i>
                            </div>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p className='projects__text'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <ul className='pl-4'>
                                <li className='pl-0 project__li'><span className='projects__text'>Maktab dars rejasi asosida</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Har haftalik jadval</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Kunlik 5 soat dars</span></li>
                            </ul>
                            <p className='mt-4 mb-3'>
                                <a href='#' className='bg__blue mx-1 p-2 project__btn'>BATAFSIL</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='projects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={python}
                            className='project__img'
                        />
                    </div>
                    <div className='h-50 px-2'>
                        <div className='pt-2 pb-3 border-bottom'>
                            <div className='d-flex'>
                                <h5 className='mb-1 col__56 font-weight-bold'>PYTHON DARSLARI</h5>
                                <i role='button' className="heart__icon fas fa-heart col__green"></i>
                            </div>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='py-2'>
                            <p className='projects__text'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <ul className='pl-4'>
                                <li className='pl-0 project__li'><span className='projects__text'>Maktab dars rejasi asosida</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Har haftalik jadval</span></li>
                                <li className='pl-0 project__li'><span className='projects__text'>Kunlik 5 soat dars</span></li>
                            </ul>
                            <p className='mt-4 mb-3'>
                                <a href='#' className='bg__blue mx-1 p-2 project__btn'>BATAFSIL</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects