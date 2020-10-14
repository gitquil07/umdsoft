import React from 'react'
import './banner.css'

import person from '../../img/person.svg'
import video from '../../img/video.svg'
import success from '../../img/success.svg'
import comments from '../../img/comments.svg'

class Banner extends React.Component {

    render() {
        return (
            <div className='w-100'> {/* Banner */}
                            <div className='lecture'>
                                <div className='container'>
                                    <h1 className='lecture__h1 text-white'>Dasturlashni qulay muhitda o'rganing</h1>
                                    <p className='text-white my-4' style={{width: '56%'}}>Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. 
                                        Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz 
                                        yordam beramiz.
                                    </p>
                                    <a href='#' className='wh__btn'>BATAFSIL</a>
                                    <p className='w-75 text-white my-4'>Siz o'rganmoqchimisiz?</p>
                                </div>
                            </div>
                            <div className='d-flex container py-3 justify-content-between'>
                                <div className='d-flex'>
                                    <div className='achievements achievements-person'>
                                        <img 
                                            src={person}
                                        />
                                    </div>
                                    <div className='ml-2'>
                                        <h5 className='mb-0'>150+</h5>
                                        <p className='mb-0'>o'quvchilarimiz soni</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='achievements achievements-video'>
                                        <img 
                                            src={video}
                                        />
                                    </div>
                                    <div className='ml-2'>
                                        <h5 className='mb-0'>350+</h5>
                                        <p className='mb-0'>yuklangan videolar</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='achievements achievements-success'>
                                        <img 
                                            src={success}
                                        />
                                    </div>
                                    <div className='ml-2'>
                                        <h5 className='mb-0'>85+</h5>
                                        <p className='mb-0'>bajarilgan topshiriqlar</p>
                                    </div>
                                </div>

                                <div className='d-flex'>
                                    <div className='achievements achievements-comments'>
                                        <img 
                                            src={comments}
                                        />
                                    </div>
                                    <div className='ml-2'>
                                        <h5 className='mb-0'>3000+</h5>
                                        <p className='mb-0'>baho va muhokamalar</p>
                                    </div>
                                </div>

                            </div>
            </div>
        )
    }
}
                        
export default Banner