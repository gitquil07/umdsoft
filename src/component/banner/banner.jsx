import React from 'react'
import './banner.css'

import person from '../../img/person.svg'
import video from '../../img/video.svg'
import success from '../../img/success.svg'
import comments from '../../img/comments.svg'
import { Link } from 'react-router-dom'

class Banner extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let {title, text}  = this.props;
        return (
            <div className='w-100 banner bg-light'> {/* Banner */}
                <div className='lecture'>
                    <div className='container' id='container'>
                        <h1 className='lecture__h1 text-white'>{title}</h1>
                        <p className='lecture__p text-white'>{text}</p>
                        <Link to='/profile' className='wh__btn'>BATAFSIL</Link>
                        <p className='lecture__p'><Link to='/profile' className='lecture__a text-white'>Siz o'qituvchimisiz?</Link></p>
                    </div>
                </div>

                <div className='d-flex flex-wrap container justify-content-between achievements'>
                    <div className='d-flex py-3 mx-2 achievements-item'>
                        <div className='achievement__item bg__blue achievements-person'>
                            <img 
                                src={person}
                            />
                        </div>
                        <div className='ml-2 ach'>
                            <h4 className='ach__head mb-0'>150+</h4>
                            <p className='ach__text mb-0'>o'quvchilarimiz soni</p>
                        </div>
                    </div>

                    <div className='d-flex py-3 mx-2 achievements-item'>
                        <div className='achievement__item bg__blue achievements-video'>
                            <img 
                                src={video}
                            />
                        </div>
                        <div className='ml-2'>
                            <h4 className='ach__head mb-0'>350+</h4>
                            <p className='ach__text mb-0'>yuklangan videolar</p>
                        </div>
                    </div>

                    <div className='d-flex py-3 mx-2 achievements-item'>
                        <div className='achievement__item bg__blue achievements-success'>
                            <img 
                                src={success}
                            />
                        </div>
                        <div className='ml-2'>
                            <h4 className='ach__head mb-0'>85+</h4>
                            <p className='ach__text mb-0'>bajarilgan topshiriqlar</p>
                        </div>
                    </div>

                    <div className='d-flex py-3 mx-2 achievements-item'>
                        <div className='achievement__item bg__blue achievements-comments'>
                            <img 
                                src={comments}
                            />
                        </div>
                        <div className='ml-2'>
                            <h4 className='ach__head mb-0'>3000+</h4>
                            <p className='ach__text mb-0'>baho va muhokamalar</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
                        
export default Banner