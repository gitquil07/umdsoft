import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Parts from '../Components/part'
import study_block1 from '../img/study_block1.jpg'
import study_block2 from '../img/study_block2.jpg'
import study_block3 from '../img/study_block3.jpg'
import study_block4 from '../img/study_block4.jpg'
import study_block5 from '../img/study_block5.jpg'
import study_block6 from '../img/study_block6.jpg'
import study_block7 from '../img/study_block7.jpg'
import st from "../nodeJs.module.css";

class Block2 extends React.Component {

    

    render() {
        return(
            <div className={`${st.section} text-center`}>
                
                <h1 className={st.block__h1}>Kursda ta'lim qanday o'tadi?</h1>
                <h3 className={`col__48 ${st.block__h3}`}>Ta'lim</h3>
                <p className={st.block__p}>Materiallarni o'rganish, murabbiy bilan loyihada ishlash</p>
                
                <div>
                    <Carousel >
                        <Carousel.Item className={st.carsl}>
                            <div className={`d-flex ${st.green__back} ${st.parts}`}>
                                <Parts title='HTML / CSS'/>
                                <Parts title='JavaScript'/>
                                <Parts title='Bootstrap'/>
                                <Parts title='Sass / Less'/>
                                <Parts title='Amaliy ish'/>
                                <Parts title='ReactJS'/>
                                <Parts title='Amaliy ish'/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item  className={st.carsl}>
                            <div className={`d-flex ${st.green__back}  ${st.parts}`}>
                                <Parts title='NodeJS'/>
                                <Parts title='DB (MongoDB)'/>
                                <Parts title='Amaliy ish'/>
                                <Parts title='Dev OPS'/>
                                <Parts title='Yakuniy amaliyot'/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className={st.study__start}>
                        <div className={st.line}></div>
                        <div className={st.study__text}>
                            <h4 className={st.block__h4}>Start</h4>
                            <p className={st.block__p}>Dasturlash sohasiga kirish. Web dasturlashni o`rganish</p>
                        </div>
                    </div>
                    
                    <div className={st.study__end}>
                        <div className={st.study__text}>
                            <h4 className={st.block__h4}>Finish</h4>
                            <p className={st.block__p}>Kursni muvaffaqiyatli tugatib maxsus sertifikat hamda ish o`rniga ega bo`lish</p>
                        </div>
                        <div className={st.line}></div>
                    </div>
                </div>
                
                <div className={`${st.section__blocks} flex-wrap`}>
                    <h2 className={`w-100 ${st.block__h2}`}>Kursda sizni nima kutmoqda?</h2>
                    
                    <div className={st.study__block}>
                        <img src={study_block1} width="75px" alt="" />
                        <h4 className={st.block__h4}>Nazariya</h4>
                        <p className={st.block__p}>Har bir texnologiya bo`yicha nazariy ma`lumotlar</p>
                    </div>
                    
                    <div className={st.study__block}>
                        <img src={study_block2} width="80px" alt="" />
                        <h4 className={st.block__h4}>Amaliyot</h4>
                        <p className={st.block__p}>Qiziqarli masalalar va loyihalar. Amaliy ishlar</p>
                    </div>
                    
                    <div className={st.study__block}>
                        <img src={study_block3} width="102px" alt="" />
                        <h4 className={st.block__h4}>Shaxsiy loyiha yaratish</h4>
                        <p className={st.block__p}>
                            Kurs davomida shaxsiy proyektlarga ega bo`lish.
                            </p>
                    </div>
                    
                </div> 
                
            </div>
        )
    }
}

export default Block2