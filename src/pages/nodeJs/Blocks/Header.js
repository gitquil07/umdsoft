import React from 'react'
import {Form } from 'react-bootstrap'
import st from '../nodeJs.module.css'
import '../nodeJs.module.css'
class Header extends React.Component  {
    render() {
        return(
            <div className={st.header}>

                <div className={`${st.section} pb-4`}>
                    <div className={st.container}>
                        <div className={st.aside}>
                            
                            <h1 className={`mb-4 ${st.block__h1} ${st.col__f}`}>Web Dasturlash. <br />Intensiv-interaktiv kurslari</h1>
                            
                            <h3 className={st.block__h3} style={{margin: '50px 0 20px', fontWeight: 400}}>Chuqurlashtirilgan web dasturlash kurslari</h3>
                            <p className={st.block__p}>Web dasturlash sohasida yetuk mutaxasisga aylaning. Bizning Chuqurlashtirilgan
                            darslarimiz haftasiga 5 kun, kuniga 5 soatdan amaliyot tarzida olib boriladi.<br/>
                            Hoziroq kurslarimizga yoziling va zamonaviy kasblarni egallang!
                            </p>
                        </div>
                        <div className={`${st.rside} ${st.round}`}>
                            <h4 className={st.block__h4} style={{textAlign: "center"}}>KURSGA YOZILISH</h4>
                            <p className={st.block__p} style={{textAlign: "center"}}>Kurlarimizga yozilish uchun maydonni to`ldiring.</p>
                            <Form action="" className={st.form}>
                                <div className={st.form__input}>
                                <label htmlFor="name" className={st.block__label}>
                                    Ism <span className={st.red}>*</span>
                                    </label>
                                    <input type="text" id="name" placeholder="Xurshid" className={`st.input ${st.block__input}`} required />
                                </div>
                                <div className={st.form__input}>
                                    <label htmlFor="phone" className={st.block__label}>
                                        Telefon <span className={st.red}>*</span>
                                    </label>
                                    <input type="text" id="phone" placeholder="+99891 791 11 22" className={`st.input ${st.block__input}`} required />
                                </div>
                                <div className={st.form__input}>
                                    <label htmlFor="email" className={st.block__label}>
                                        El. pochta <span className={st.red}>*</span>
                                    </label>
                                    <input type="email" id="email" placeholder="studentoftuit@gmail.com" className={`st.input ${st.block__input}`} required />
                                </div>

                                <button type="submit" className={`${st.green__back} ${st.green__btn}`}> Yuvorish</button>
                            </Form>
                            <i style={{color: "#FF9100"}} className="fas fa-exclamation-circle"></i> <span>Muhim joy</span>
                        </div>
                        
                    </div>
                </div>
        </div>
        )
    }
}

export default Header