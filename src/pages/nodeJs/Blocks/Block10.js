import React from 'react'
import { Form, Button } from 'react-bootstrap'
import visa from '../img/visa-logo.svg'
import paypal from '../img/paypal-logo.svg'
import st from '../nodeJs.module.css'

class Block10 extends React.Component {

    focusBtn () {
        console.log('yes')
    }

    render() {
        return(
             <div className={st.section}>
                <h1 className={st.block__h1} >Зарегистрироваться и оплатить <br /> курс &laquo;Node.js Разработка серверов приложений и API&raquo;</h1>
                <div className='d-flex flex-wrap align-items-center mb-5'>
                    <h1 className={`${st.green} ${st.block__h1} mb-0 ${st.fs_70}`}>3 000 000 сум</h1>
                    <span className='ml-4'>
                        <h5 className={`font-weight-normal mb-0 mt-2 ${st.block__h5}`}>в месяц*</h5>
                        <p className={` ${st.block__p} my-1`}>Рассрочка на 6 месяцев без процентов и переплат в месяц*</p>
                    </span>
                </div>
                <Form className={st.section__blocks}>
                    <Form.Group controlId='formBasicCost mb-3'>
                        <Button onClick={this.focusBtn} className={`${st.btn__cost} px-0`}>Оплата в рассрочку</Button>
                        <Button className={`${st.btn__cost} px-0`}>Оплата целиком</Button>
                        <Button className={`${st.btn__cost} px-0`}>Оплата от компании</Button>
                    </Form.Group>
                    <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                        <div className={`w-50 ${st.form}`} style={{height: 'fit-content'}}>
                            <Form.Group className='d-flex mb-0'>
                                <Form.Control className={`mr-3 mt-0 ${st.form__input}`} style={{width: '90%'}} type='text' placeholder='Ваше имя' required/>
                                <Form.Control className={`${st.form__input} mt-0`} style={{width: '90%'}} type='email' placeholder='Ваша эл.почта' required/>
                            </Form.Group>
                            <Form.Group className='d-flex mb-0 align-items-center'>
                                <Form.Control style={{width: '117%'}}  className={`mr-3 ${st.form__input} ${st.phone}`} type='tel' placeholder='Ваш телефон' required/>
                                <Button className={st.btn__pay}>
                                    <img
                                        src={visa}
                                        width='36%'
                                        className={st.visa_logo}
                                    />
                                </Button>
                                <Button className={st.btn__pay}>
                                    <img
                                        src={paypal}
                                        width='38%'
                                        className={st.paypal_logo}
                                    />
                                </Button>
                            </Form.Group>
                            <Button type='submit' className={`mt-3 ${st.all__items}`}>Оплатить</Button>
                        </div>
                        <div style={{width:'48%'}} className={`${st.recommend} ${st.w1}`}>
                            <p className={`mb-4 ${st.block__p}`}>Заполните, пожалуйста, ваши имя и электронную почту для регистрации.</p>
                            <p className={`mb-4 ${st.block__p}`}>* &mdash; Возможный размер ежемесячного платежа при оплате в рассрочку на 6 месяцев.</p>
                            <p className={`mb-4 ${st.block__p}`}>Рассрочку выдают Тинькофф-банк и Яндекс.Касса. Точный график ежемесячных платежей &mdash; после нажатия кнопки &laquo;Оплатить&raquo;.</p>

                        </div>
                    </div>

                    <div className='d-flex flex-wrap justify-content-between' >
                        <p style={{width: '90%'}} className={`${st.w1} ${st.block__p}`}>
                            Нажмая &laquo;Оплатить&raquo;, вы даёте своё согласие на обработку персональных данных в соответствии с
                            <a href='#' className={`${st.block__a} ${st.green__link}`}>&laquo;Политикой конфиденциальности&raquo;</a> и соглашаетесь с <a href='#' className={`${st.block__a} ${st.green__link}`}>&laquo;Условиями предоставления услуг&raquo;.</a>
                        </p>
                        <p style={{width: '83%'}} className={`${st.w1} ${st.block__p}`}>
                            Доступ к курсу откроется в течение суток после оплаты. Ссылка на курс появится в вашем профиле, также мы пришлём письмо со всеми инструкциями. <a href='#' className={`${st.block__a} ${st.green__link}`}>&laquo;Подробнее об оплате в рассрочку&raquo;.</a>
                        </p>
                    </div>
                </Form>
             </div>
        )
    }
}

export default Block10