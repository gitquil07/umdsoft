import React, { Fragment } from 'react'
import './header_profile.css'

import water from '../../img/water.svg'
import message from '../../img/message.svg'
import bell from '../../img/bell.svg'
import user from '../../img/user.jpg'

class HeaderProfile extends React.Component {
    render () {
        return  (
            <div className='header-profile d-flex justify-content-between bg-light align-items-center'>
                <div className='header-profile__progress d-flex justify-content-between align-items-center'>
                    <div className='header-profile__progress-img mr-2'>
                        <img 
                            src={water}
                        />
                    </div>
                    <div className='header-profile__progress-text'>
                        <p className='mb-0'>O'ZLASHTIRISH KO'RSATKICHI</p>
                        <p className='mb-0'>3.2/5</p>
                    </div>
                </div>
                <div className='header-profile__details d-flex align-items-center'>
                    <div>
                        <a href='#' id='header-profile__details-message-link' className='header-profile__details-link position-relative'>
                            <img 
                                src={message}
                            />
                            <div id='header-profile__details-message-count' className='header-profile__details-count position-absolute col__blue'>
                                5
                            </div>
                        </a>
                    </div>
                    <div className='mx-4'>
                        <a href='#' id='header-profile__details-bell-link' className='header-profile__details-link position-relative'>
                            <img 
                                src={bell}
                            />
                            <div id='header-profile__details-bell-count' className='header-profile__details-count  position-absolute col__blue'>
                                5
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href='#' className='header-profile__details-link'>
                            <img className='header-profile__details-user-img'
                                src={user}
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderProfile