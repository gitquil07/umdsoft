import React from 'react'
import './myCourses.css'

import react from '../../img/react.png'
import { Carousel } from 'react-bootstrap'

class MyCourses extends React.Component {
    render() {
        return (
            <div className='pt-3 pb-5'>
        
                <div className='my-3'>
                    <h5 className='myCourses-head-title mb-0 col__blue'>MENING KURSLARIM</h5>
                    <p className='myCourses-head-text'>Bosh saxifa / Mening kurslarim</p>
                </div>

                <Carousel>

                    <Carousel.Item>
                        <div className='w-100 p-4 myCourses bg-white'>
                            <div className='myCourses-main text-white'>
                                <h1 className='myCourses-title'>FRONT END DARSLARI</h1>
                                <div className='myCourses-tags d-flex justify-content-center'>
                                    <div className='myCourses-tags-container'>
                                        <span className='myCourses-tag-icon mr-2'><i className="far fa-clock"></i></span>
                                        <span className='myCourses-tag-text'>320 soat</span>
                                    </div>
                                    <div className='myCourses-tags-container'>
                                        <span className='myCourses-tag-icon mr-2'><i className="far fa-file-video"></i></span>
                                        <span className='myCourses-tag-text'>60 dars</span>
                                    </div>
                                </div>
                                <a href='#' className='myCourses-btn mt-4 col__blue'>BOSHLASH</a>
                            </div>
                            <div className='d-flex mt-2 justify-content-between'>
                                <div className='d-flex'>
                                    <div className='mr-2'>
                                        <img 
                                            src={react}
                                        />
                                    </div>
                                    <div>
                                        <h4 className='myCourses__stage col__blue mb-0'>SIZ YETIB KELGAN BOSQICH</h4>
                                        <p className='myCourses__teacher mb-0'>O'qituvchi: Allayev Oybek</p>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <div className='myCourses__mark'>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                        <span className='col__56'>4/5</span>
                                    </div>
                                    <p className='myCourses__mark-text'>Sizning bahoyingiz</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='w-100 p-4 myCourses bg-white'>
                            <div className='myCourses-main text-white'>
                                <h1 className='myCourses-title'>FRONT END DARSLARI</h1>
                                <div className='myCourses-tags d-flex justify-content-center'>
                                    <div className='myCourses-tags-container'>
                                        <span className='myCourses-tag-icon mr-2'><i className="far fa-clock"></i></span>
                                        <span className='myCourses-tag-text'>320 soat</span>
                                    </div>
                                    <div className='myCourses-tags-container'>
                                        <span className='myCourses-tag-icon mr-2'><i className="far fa-file-video"></i></span>
                                        <span className='myCourses-tag-text'>60 dars</span>
                                    </div>
                                </div>
                                <a href='#' className='myCourses-btn mt-4 col__blue'>BOSHLASH</a>
                            </div>
                            <div className='d-flex mt-2 justify-content-between'>
                                <div className='d-flex'>
                                    <div className='mr-2'>
                                        <img 
                                            src={react}
                                        />
                                    </div>
                                    <div>
                                        <h4 className='myCourses__stage col__blue mb-0'>SIZ YETIB KELGAN BOSQICH</h4>
                                        <p className='myCourses__teacher mb-0'>O'qituvchi: Allayev Oybek</p>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <div className='myCourses__mark'>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                        <span className='col__56'>4/5</span>
                                    </div>
                                    <p className='myCourses__mark-text'>Sizning bahoyingiz</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='w-100 p-4 myCourses bg-white'>
                            <div className='myCourses-main text-white'>
                                <h1 className='myCourses-title'>FRONT END DARSLARI</h1>
                                <div className='myCourses-tags d-flex justify-content-center'>
                                    <div className='myCourses-tags-container'>
                                        <span className='myCourses-tag-icon mr-2'><i className="far fa-clock"></i></span>
                                        <span className='myCourses-tag-text'>320 soat</span>
                                    </div>
                                    <div className='myCourses-tags-container'>
                                        <span className='myCourses-tag-icon mr-2'><i className="far fa-file-video"></i></span>
                                        <span className='myCourses-tag-text'>60 dars</span>
                                    </div>
                                </div>
                                <a href='#' className='myCourses-btn mt-4 col__blue'>BOSHLASH</a>
                            </div>
                            <div className='d-flex mt-2 justify-content-between'>
                                <div className='d-flex'>
                                    <div className='mr-2'>
                                        <img 
                                            src={react}
                                        />
                                    </div>
                                    <div>
                                        <h4 className='myCourses__stage col__blue mb-0'>SIZ YETIB KELGAN BOSQICH</h4>
                                        <p className='myCourses__teacher mb-0'>O'qituvchi: Allayev Oybek</p>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <div className='myCourses__mark'>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                        <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                        <span className='col__56'>4/5</span>
                                    </div>
                                    <p className='myCourses__mark-text'>Sizning bahoyingiz</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    
                </Carousel>


            </div>
        )   
    }
}

export default MyCourses