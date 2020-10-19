import React from 'react'
import user from '../../../img/user.jpg'
import './advices.css'
import ItemContainer from '../../../component/itemContainer/itemContainer'

class Advices extends React.Component {
    render() {
        return (
            <>
                <ItemContainer className='mb-3' title='SUCCESS MASLAHATI'>
                    <div className='mb-4 w-75'>
                        Agarda siz hozirgi pandemiya davrida o'zingizga qulay o'quv kurslarini topa olmasangiz sizga
                        uyidagi masofaviy tarzda dars beradigan malakali mutaxassislarni taklif qilishimiz mumkin.
                    </div>

                    <div className='advice-item my-3 py-3 px-4 bg-white d-flex justify-content-between'>
                        <div className='mr-1'>
                            <img 
                                className='advice-item__img'
                                src={user}
                            />
                        </div>
                        <div className='advice-main'>
                            <h5 className='mb-2 advice-main__title col__blue'>Ilyasov Otabek Rustamovich</h5>
                            <p className='advice-main__text col__56 mb-1'>Ingliz tili va rus tili o'qituvchisi.</p>
                            <p className='advice-main__text col__56 mb-2'>Onlayn repetitor</p>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='advice-details text-right'>
                            <h5 className='advice-details__time col__blue'>1 soat dars o'tish</h5>
                            <h4 className='advice-details__price'>31 000 so'm</h4>
                            <a href='#' className='advice-details__link text-center col__blue py-2 px-3'>BOG'LANISH</a>
                        </div>
                    </div>

                    <div className='advice-item my-3 py-3 px-4 bg-white d-flex justify-content-between'>
                        <div className='mr-1'>
                            <img 
                                className='advice-item__img'
                                src={user}
                            />
                        </div>
                        <div className='advice-main'>
                            <h5 className='mb-2 advice-main__title col__blue'>Ilyasov Otabek Rustamovich</h5>
                            <p className='advice-main__text col__56 mb-1'>Ingliz tili va rus tili o'qituvchisi.</p>
                            <p className='advice-main__text col__56 mb-2'>Onlayn repetitor</p>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='advice-details text-right'>
                            <h5 className='advice-details__time col__blue'>1 soat dars o'tish</h5>
                            <h4 className='advice-details__price'>31 000 so'm</h4>
                            <a href='#' className='advice-details__link text-center col__blue py-2 px-3'>BOG'LANISH</a>
                        </div>
                    </div>

                    <div className='advice-item my-3 py-3 px-4 bg-white d-flex justify-content-between'>
                        <div className='mr-1'>
                            <img 
                                className='advice-item__img'
                                src={user}
                            />
                        </div>
                        <div className='advice-main'>
                            <h5 className='mb-2 advice-main__title col__blue'>Ilyasov Otabek Rustamovich</h5>
                            <p className='advice-main__text col__56 mb-1'>Ingliz tili va rus tili o'qituvchisi.</p>
                            <p className='advice-main__text col__56 mb-2'>Onlayn repetitor</p>
                            <div>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                                <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                                <span className='col__56'>4/5</span>
                            </div>
                        </div>
                        <div className='advice-details text-right'>
                            <h5 className='advice-details__time col__blue'>1 soat dars o'tish</h5>
                            <h4 className='advice-details__price'>31 000 so'm</h4>
                            <a href='#' className='advice-details__link text-center col__blue py-2 px-3'>BOG'LANISH</a>
                        </div>
                    </div>

                </ItemContainer>

                <p className='py-3 text-center'>
                    <a href='#' className='advice__link text-white text-center bg__blue py-2 px-3'>BARCHA O'QITUVCHILAR</a>
                </p>
            </>
        )
    }
} 

export default Advices