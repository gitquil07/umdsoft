import React from 'react'
import block1 from '../img/block1.png'
import block2 from '../img/block2.svg'
import block3 from '../img/block3.svg'
import st from '../nodeJs.module.css';

class Block1 extends React.Component {
    render() {
        return(
            <div className={`${st.section} text-center`}>
        
                <h1 className={`${st.block__h1} ${st.head__h1}`}>Почему курс профессиональный?</h1>
                <p className={st.head__p}>На этом курсе вы научитесь делать настоящие проекты, такие же по уровню сложности, как в индустрии. И <br /> будете делать их правильно, чтобы после обучения выдавать результат высокого уровня, за который <br /> компании готовы платить.</p>
                <p className={st.head__p}>Чтобы добиться такого качества обучения, мы используем профессиональную триаду <b>&laquo;критерии-проекты-наставники&raquo;:</b></p>
                
                <div className={st.blocks}>
                    <div className={st.block}>
                        <img src={block1} width="147px" alt="" />
                        <p className={st.block__p}>Проверкой ваших проектов на соответствие критериям качества занимаются наставники, которые являются профессиональными разработкчиками.</p>
                    </div>
                    <div className={st.block}>
                        <img src={block2} width="192px" alt="" />
                        <p className={st.block__p}>Профессиональные критерии качества мы разрабатываем совместно с компаниями и профессиональным сообществом.</p>
                    </div>
                    <div className={st.block}>
                        <img src={block3} width="133px" alt="" />
                        <p className={st.block__p}>В течение обучения вы выполняете настоящие проекты.</p>
                    </div>
                </div> 
            
            </div> 
        )
    }
}

export default Block1