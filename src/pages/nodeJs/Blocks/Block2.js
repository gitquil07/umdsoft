import React from 'react'
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
                
                <h1 className={st.block__h1}>Как проходит обучение на курсе</h1>
                <h3 className={st.block__h3}>Обучение</h3>
                <p className={st.head__p}>Изучение материалов, работа над проектом с наставником</p>
                
                <div className={`${st.parts} ${st.green__back}`}>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 1</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 2</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 3</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 4</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 5</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 6</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 7</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 8</a>
                    <a href="#" className={`${st.part} ${st.block__a}`}>Раздел 9</a>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className={st.study__start}>
                        <div className={st.line}></div>
                        <div className={st.study__text}>
                            <h4 className={st.block__h4}>Старт</h4>
                            <p className={st.block__p}>Доступ к интерактивным курсам, подборка предварительных материалов, выбор наставника и проекта</p>
                        </div>
                    </div>
                    
                    <div className={st.study__end}>
                        <div className={st.study__text}>
                            <h4 className={st.block__h4}>Защита проекта</h4>
                            <p className={st.block__p}>Подготовка проекта к итоговой защите</p>
                        </div>
                        <div className={st.line}></div>
                    </div>
                </div>
                
                <div className={`${st.section__blocks} flex-wrap`}>
                    <h2 className={`w-100 ${st.block__h2}`}>Что вас ждёт на обучении</h2>
                    
                    <div className={st.study__block}>
                        <img src={study_block1} width="75px" alt="" />
                        <h4 className={st.block__h4}>Структурированная теория</h4>
                        <p className={st.block__p}>В начале каждого раздела вы изучаете теорию из текстового учебника и отобранных нами материалов.</p>
                    </div>
                    
                    <div className={st.study__block}>
                        <img src={study_block2} width="80px" alt="" />
                        <h4 className={st.block__h4}>Практика</h4>
                        <p className={st.block__p}>После изучения теории выполняете домашнее задание, в котором работаете над своим проектом и закрепляете учебный материал.</p>
                    </div>
                    
                    <div className={st.study__block}>
                        <img src={study_block3} width="102px" alt="" />
                        <h4 className={st.block__h4}>Ревью кода</h4>
                        <p className={st.block__p}>После каждого задания ваш личный наставник проверяет качество работы, делится опытом и рассказывает, как можно сделать лучше.</p>
                    </div>
                    
                    <h2 className={`w-100 ${st.block__h2}`}>Подходит ли вам этот курс</h2>
                    
                    <div className={st.study__block2}>
                        <div><img src={study_block4} width="70px" alt="" /></div>
                        <p className={st.block__p}>Курс проходит в асинхронном формате. Вы можете начать обучение в любое время и двигаться по программе с комфортной вам скоростью.</p>
                    </div>
                    
                    <div className={st.study__block2}>
                        <div><img src={study_block5} width="70px" alt="" /></div>
                        <p className={st.block__p}>Главная ценность курса &#8212; большой объем обратной связи от наставника, который детально разберёт ваш код, определит пробелы в понимании материала и поможет со всем справиться.</p>
                    </div>
                    
                    <div className={st.study__block2}>
                        <div><img src={study_block6} width="70px" alt="" /></div>
                        <p className={st.block__p}>Курс расчитан на фронтенд-разработчиков уверенно применяющих JavaScript (ES6+) на практике. Он подойдёт для выпускников курса <a href="#" className={`${st.green} ${st.block__a}`}>&laquo;JavaScript.Архитектура клиентских приложений&raquo;.</a></p>
                    </div>
                    
                    <div className={st.study__block2}>
                        <div><img src={study_block7} width="70px" alt="" /></div>
                        <p className={st.block__p}>В курсе мы используем самые эффективные для обучения профессионалов форматы: тексты, тренажёры и автотесты. Мы не злоупотребляем видео и используем его только там, где оно необходимо.</p>
                    </div>
                    
                </div> 
                
            </div>
        )
    }
}

export default Block2