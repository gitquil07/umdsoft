import React from 'react'
import { Container } from 'react-bootstrap'
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div id='footer' className='footer'>
                <Container className='d-flex flex-wrap justify-content-between'>
                    <div className='footer__item'>
                        <p className='footer__text col__48'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                        <p className='footer__text col__48 mb-0'>Copyright © UMDSOFT. Barcha huquqlar himoyalangan</p>
                    </div>
                    <div className='footer__social'>
                        <a href='#'><i class="col__48 fab fa-telegram-plane"></i></a>
                        <a href='#'><i class="mx-3 col__48 fab fa-instagram"></i></a>
                        <a href='#'><i class="fab col__48 fa-twitter"></i></a>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Footer