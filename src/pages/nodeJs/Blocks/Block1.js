import React from 'react'
import block1 from '../img/block1.png'
import block2 from '../img/block2.svg'
import block3 from '../img/block3.svg'
import st from '../nodeJs.module.css';

class Block1 extends React.Component {
    render() {
        return(
            <div className={`${st.section} text-center`}>
        
                <h1 className={`${st.block__h1} ${st.head__h1}`}>Nega INTENSIV darslar?</h1>
                <p className={st.head__p}>
                    Intensiv kurslarning odatiy kurslardan farqi shundaki, darslar 90 % amaliyot tarzida tashkillashtiriladi va har bir o`quvchi bilan individual ishlash imkoni paydo bo`ladi.
                    Kurslarni tugatgach siz ortiqcha vaqt sarflamasdan tez fursatda ishga joylashish imkoni paydo bo`ladi.
                </p>
                <p className={st.head__p}>
                    Siz shu darajaga yetishingiz uchun biz professional triadani ishlatamiz!
                </p>
                
                <div className={st.blocks}>
                    <div className={st.block}>
                        <img src={block1} width="147px" alt="" />
                        <p className={st.block__p}>Eng yangi texnologiyalarni mukammal darajada 0 dan pro darajaga qadar o`rganish.</p>
                    </div>
                    <div className={st.block}>
                        <img src={block2} width="192px" alt="" />
                        <p className={st.block__p}>Professional mentorlar orqali texnologiyalarni yangi metod orqali o`rganish</p>
                    </div>
                    <div className={st.block}>
                        <img src={block3} width="133px" alt="" />
                        <p className={st.block__p}>Kursni tamomlagach serdaromad ishlarga joylashishga keng imkoniyat!</p>
                    </div>
                </div> 
            
            </div> 
        )
    }
}

export default Block1