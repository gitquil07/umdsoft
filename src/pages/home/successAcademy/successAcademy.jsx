import React from 'react'
import ItemContainer from '../../../component/itemContainer/itemContainer'
import { Form, Button } from 'react-bootstrap'
import './successAcademy.css'

import certificate from '../../../img/certificate.jpg'

class SuccessAcademy extends React.Component {

    render() {
        return (
            <div className='mb-5'>
                <ItemContainer title='SERTIFIKAT - UMDSoft ACADEMY'>
                    <div className='certificate__items d-flex justify-content-between'>
                        <div className='certificate__item'>
                            <p className='certificate__text pb-3'>
                                Siz bizning akademiyani muvaffaqiyatli bitirganingizdan so'ng ushbu 
                                sertifikatga ega bo'lasiz va istalgan IT korxonada ishlashingiz mumkin. 
                                Yana bir muhim jihati shundaki agarda siz bu sertifikatning gold 
                                versiyasini qo'lga kiritsangiz o'zimiz sizni ish bilan ta'minlaymiz.
                            </p>
                        
                            <Form>
                                <div className='d-flex justify-content-between certificate__form'>
                                    <Form.Group id='certificateCode'>
                                        <Form.Label htmlFor='certificateCode' ><h6>Sertifikat kodi va raqami</h6></Form.Label>
                                        <Form.Control id='certificateCode' type='text' placeholder='CER-U0000000' className='text-center' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group id='certificateCode'>
                                        <Form.Label htmlFor='certificateDate'><h6>Sertifikat berilgan sana</h6></Form.Label>
                                        <Form.Control id='certificateDate' type='date' placeholder='kk/oo/yy' className='text-center' required></Form.Control>
                                    </Form.Group>
                                </div>
                                <Button type='submit' className='check__certif__btn'>Sertifikat tekshirish</Button>
                            </Form>

                        </div>
                        <div className='certificate__item'>
                            <img 
                                src={certificate}
                                className='certificate-item__img'
                            />
                        </div>
                    </div>
                </ItemContainer>
            </div>
        )
    }
}

export default SuccessAcademy