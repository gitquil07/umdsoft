import React, {useState} from 'react';



export default function Course ({title, time, lesson, img}) {

    const [loves, setLove] = useState('false');

        return(
            <div className='course__item border'>
                <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                    <img 
                        src={img}
                        className='course__img'
                    />
                </div>
                <div className='h-50 px-2'>
                    <div className='pt-2 pb-3 border-bottom'>
                        <div className='d-flex justify-content-between'>
                            <a href='#'><h5 className='mb-1 col__56 text-uppercase font-weight-bold'>{title}</h5></a>
                            <span onClick={() => setLove(!loves)}><i role='button' className={`fa-heart col__green ${(loves)? 'far ' : 'fas'}`}></i></span>
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
                    <div className='d-flex py-2 px-1 justify-content-between svg__size'>
                        <div>
                            <i className="fas col__56 fa-hourglass"></i> &nbsp;
                            <span className='col__56'>{time}</span>
                        </div>
                        <div>
                            <i className="col__56 fas fa-video"></i> &nbsp;
                            <span className='col__56'>{lesson}</span>    
                        </div>
                    </div>
                </div>
            </div>
        )
}
