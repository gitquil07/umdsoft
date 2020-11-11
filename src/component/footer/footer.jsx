import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div id='footer' className='footer'>
                <Container className='d-flex flex-wrap justify-content-between'>
                    <div className='footer__item'>
                        <p className='footer__text col__48 mb-0'>Copyright © UMDSOFT. Barcha huquqlar himoyalangan</p>
                    </div>
                    <div className='footer__social'>
                        <a href='https://t.me/umdsoft' target='_blank'><i className="col__blue fab fa-telegram-plane"></i></a>
                        <a href='https://www.instagram.com/umdsoft/' target='_blank'><i className="mx-3 col__blue fab fa-instagram"></i></a>
                        <a href='https://www.facebook.com/umdsoft-103090768277090' target='_blank'><i className=" fab col__blue fa-facebook"></i></a>
                        <a href='' target='_blank'><i className="mx-3 fab col__blue fa-linkedin"></i></a>
                        <a href='https://www.youtube.com/channel/UC1RMecCit3sn7VGawLkm7Zg' target='_blank'><i className="fab col__blue fa-youtube"></i></a>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Footer