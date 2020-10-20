import React from 'react'
import './subjects.css'

import web from '../../../img/web.svg'
import mobile from '../../../img/mobile.svg'
import desctop from '../../../img/desctop.svg'
import python from '../../../img/python.svg'


class Projects extends React.Component {


    render() {
        return(
            <div className='d-flex flex-wrap'>

                <div className='subjects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={web}
                            className='subject__img'
                        />
                    </div>
                    <div className='h-50'>
                        <div className='pt-2 px-2 pb-3 border-bottom'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='mb-1 col__56 font-weight-bold'>WEB DARSLARI</h5>
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
                        
                            <p className='subjects__text px-2'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <div class="collapse__div">
                                <ul className=''>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Maktab dars rejasi asosida</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Har haftalik jadval</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Kunlik 5 soat dars</span></li>
                                </ul>
                                <p className='mt-4  px-2 mb-3 text-center'>
                                    <a href='#' className='bg__blue mx-1 p-2 subject__btn'>BATAFSIL</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='subjects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={web}
                            className='subject__img'
                        />
                    </div>
                    <div className='h-50'>
                        <div className='pt-2 px-2 pb-3 border-bottom'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='mb-1 col__56 font-weight-bold'>WEB DARSLARI</h5>
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
                        
                            <p className='subjects__text px-2'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <div class="collapse__div">
                                <ul className=''>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Maktab dars rejasi asosida</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Har haftalik jadval</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Kunlik 5 soat dars</span></li>
                                </ul>
                                <p className='mt-4  px-2 mb-3 text-center'>
                                    <a href='#' className='bg__blue mx-1 p-2 subject__btn'>BATAFSIL</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='subjects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={web}
                            className='subject__img'
                        />
                    </div>
                    <div className='h-50'>
                        <div className='pt-2 px-2 pb-3 border-bottom'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='mb-1 col__56 font-weight-bold'>WEB DARSLARI</h5>
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
                        
                            <p className='subjects__text px-2'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <div class="collapse__div">
                                <ul className=''>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Maktab dars rejasi asosida</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Har haftalik jadval</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Kunlik 5 soat dars</span></li>
                                </ul>
                                <p className='mt-4  px-2 mb-3 text-center'>
                                    <a href='#' className='bg__blue mx-1 p-2 subject__btn'>BATAFSIL</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='subjects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={web}
                            className='subject__img'
                        />
                    </div>
                    <div className='h-50'>
                        <div className='pt-2 px-2 pb-3 border-bottom'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='mb-1 col__56 font-weight-bold'>WEB DARSLARI</h5>
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
                        
                            <p className='subjects__text px-2'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <div class="collapse__div">
                                <ul className=''>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Maktab dars rejasi asosida</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Har haftalik jadval</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Kunlik 5 soat dars</span></li>
                                </ul>
                                <p className='mt-4  px-2 mb-3 text-center'>
                                    <a href='#' className='bg__blue mx-1 p-2 subject__btn'>BATAFSIL</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='subjects__item border my-4'>
                    <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                        <img 
                            src={web}
                            className='subject__img'
                        />
                    </div>
                    <div className='h-50'>
                        <div className='pt-2 px-2 pb-3 border-bottom'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='mb-1 col__56 font-weight-bold'>WEB DARSLARI</h5>
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
                        
                            <p className='subjects__text px-2'>Malakali pedagoglar tomonidan 5-11 sinflar uchun tayyorlangan darsliklar</p>
                            <div class="collapse__div">
                                <ul className=''>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Maktab dars rejasi asosida</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Har haftalik jadval</span></li>
                                    <li className='pl-0 subject__li'><span className='subjects__text'>Kunlik 5 soat dars</span></li>
                                </ul>
                                <p className='mt-4  px-2 mb-3 text-center'>
                                    <a href='#' className='bg__blue mx-1 p-2 subject__btn'>BATAFSIL</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
}

export default Projects