import React, { useState, useEffect } from 'react'
import ItemContainer from '../../../component/itemContainer/itemContainer'
import './courses.css'

import web from '../../../img/web.svg'
import mobile from '../../../img/mobile.svg'
import desctop from '../../../img/desctop.svg'
import python from '../../../img/python.svg'

function Courses() {


    // function heartClicked () {
        
    //     let state = document.getElementsByClassName('fa-heart')
    //     console.log(state)
    //     console.log(state[0])

    //     if(state[0].className === 'fas fa-heart col__green'){
    //         console.log('yes')
    //         state[0].className = 'far fa-heart col__green'
    //         console.log(state[0])
    //     }
    //     else{
    //         console.log('no')
    //     }
    // }



    // function heartSet(props) {
    //     const [states, setStates] = useState(0)

    //     useEffect(() => {
            
    //         if(props.heart.className == 'fas fa-heart col__green')
    //         {
    //             props.heart.className = 'far fa-heart col__green'
    //         }
    //     })
    // }

        return ( 
            <div className='mb-5'>
                <ItemContainer title='Bizning kurslarimiz'>
                    <div className='d-flex justify-content-between course-items'>
                        <div className='course__item border'>
                            <a>
                                <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                                    <img 
                                        src={web}
                                        className='course__img'
                                    />
                                </div>
                                <div className='h-50 px-2'>
                                    <div className='pt-2 pb-3 border-bottom'>
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-1 col__56 font-weight-bold'>WEB DEVELOPMENT</h5>
                                            <i role='button' className="fas fa-heart col__green"></i>
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
                                            <span className='col__56'>6 soat</span>
                                        </div>
                                        <div>
                                            <i className="col__56 fas fa-video"></i> &nbsp;
                                            <span className='col__56'>120 dars</span>    
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='course__item border'>
                            <a>
                                <div className='d-flex justify-content-between h-50 bg__blue'
                                    style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                                    <img src={mobile} className='course__img' />
                                </div>
                                <div className='h-50 px-2'>
                                    <div className='pt-2 pb-3 border-bottom'>
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-1 col__56 font-weight-bold'>MOBILE DEVELOPMENT</h5>
                                            <i role='button' className="far fa-heart col__green"></i>
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
                                            <span className='col__56'>6 soat</span>
                                        </div>
                                        <div>
                                            <i className="col__56 fas fa-video"></i> &nbsp;
                                            <span className='col__56'>120 dars</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className='course__item border'>
                            <a href='#'>
                                <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                                    <img 
                                        src={desctop}
                                        className='course__img'
                                    />
                                </div>
                                <div className='h-50 px-2'>
                                    <div className='pt-2 pb-3 border-bottom'>
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-1 col__56 font-weight-bold'>DESCTOP DEVELOPMENT</h5>
                                            <i role='button' className="far fa-heart col__green"></i>
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
                                            <span className='col__56'>6 soat</span>
                                        </div>
                                        <div>
                                            <i className="col__56 fas fa-video"></i> &nbsp;
                                            <span className='col__56'>120 dars</span>    
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='course__item border'>
                            <a href='#'>
                                <div className='d-flex justify-content-between h-50 bg__blue' style={{borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                                    <img 
                                        src={python}
                                        className='course__img'
                                    />
                                </div>
                                <div className='h-50 px-2'>
                                    <div className='pt-2 pb-3 border-bottom'>
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-1 col__56 font-weight-bold'>PYTHON DEVELOPMENT</h5>
                                            <i role='button' className="far fa-heart col__green"></i>
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
                                            <span className='col__56'>6 soat</span>
                                        </div>
                                        <div>
                                            <i className="col__56 fas fa-video"></i> &nbsp;
                                            <span className='col__56'>120 dars</span>    
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        


                    </div>
                </ItemContainer>
            </div>
        ) 
}

export default Courses