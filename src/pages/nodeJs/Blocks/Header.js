import React from 'react'
import {Form } from 'react-bootstrap'
import st from '../nodeJs.module.css'
import '../nodeJs.module.css'
console.log(st)
class Header extends React.Component  {
    render() {
        return(
            <div className={st.header}>

                <div className={st.section}>
                    <div className={st.container}>
                        <div className={st.aside}>
                            <h4 className={st.block__h4} style={{margin: "10px 0", fontWeight: "400"}}>Онлайн-курс</h4>
                            <h1 className={`mb-4 ${st.block__h1} ${st.green}`}>Node.js. Разработка серверов приложений и API </h1>
                            <a href="#" className={`${st.butn} ${st.block__a}`}>в асинхронном формате</a>
                            <h3 className={st.block__h3} style={{margin: '50px 0 20px', fontWeight: 400}}>Начните обучение, когда угодно вам</h3>
                            <p className={st.block__p}>Курс разработан для тех, кто хочет сменить профессию и <br />
                            стать высокооплачиваемым профессионалом. Он <br />
                            подойдёт для работающих людей, у которых мало <br />
                            времени.</p>
                        </div>
                        <div className={`${st.rside} ${st.round}`}>
                            <h4 className={st.block__h4} style={{textAlign: "center"}}>ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ</h4>
                            <p className={st.block__p}>Оставьте свои контакты, мы свяжемся с вами и ответим на все вопросы.</p>
                            <Form action="" className={st.form}>
                                <div className={st.form__input}>
                                <label htmlFor="name" className={st.block__label}>
                                    Имя <span className={st.red}>*</span>
                                    </label>
                                    <input type="text" id="name" placeholder="Xurshid" className={`st.input ${st.block__input}`} required />
                                </div>
                                <div className={st.form__input}>
                                    <label htmlFor="phone" className={st.block__label}>
                                        Телефон <span className={st.red}>*</span>
                                    </label>
                                    <input type="text" id="phone" placeholder="+99891 791 11 22" className={`st.input ${st.block__input}`} required />
                                </div>
                                <div className={st.form__input}>
                                    <label htmlFor="email" className={st.block__label}>
                                        Эл. почта <span className="red">*</span>
                                    </label>
                                    <input type="email" id="email" placeholder="studentoftuit@gmail.com" className={`st.input ${st.block__input}`} required />
                                </div>

                                <button type="submit" className={`${st.green__back} ${st.green__btn}`}> Отправить</button>
                            </Form>
                            <i style={{color: "#FF9100"}} className="fas fa-exclamation-circle"></i> <span>Обязательное поле</span>
                        </div>
                        <div style={{width: '100%', marginTop: '30px', textAlign: 'center', cursor: "pointer"}} className={`${st.green} ${st.gr__chevr}`}> <i className="fas fa-chevron-down"></i></div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Header