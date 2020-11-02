import React from 'react'
import lesson1 from '../img/lesson1.jpg'
import lesson2 from '../img/lesson2.jpg'
import lesson3 from '../img/lesson3.jpg'
import lesson4 from '../img/lesson4.jpg'
import st from '../nodeJs.module.css';
class Block3 extends React.Component {
    render() {
        return(
            <div className='container'>  
                <div className={`${st.section} text-center`}>
                
                    <h1 className={st.block__h1}>Учим делать правильно</h1>
                    <div className={st.lesson__blocks}>
                        <div className={st.lesson__block}>
                            <img src={lesson1} width="50px" alt="" />
                            <p className={st.block__p}>Актуальные стандарты качества: не нужно переучиваться после курса.</p>
                        </div>

                        <div className={st.lesson__block}>
                            <img src={lesson2} width="63px" alt="" />
                            <p className={st.block__p}>Понимание полного цикла работы разработчика.</p>
                        </div>

                        <div className={st.lesson__block}>
                            <img src={lesson3} width="62px" alt="" />
                            <p className={st.block__p}>Фундаментальные и структурированные знания необходимых технологий.</p>
                        </div>

                        <div className={st.lesson__block}>
                            <img src={lesson4} width="36px" alt="" />
                            <p className={st.block__p}>Опыт работы с дедлайнами и планирования работы.</p>
                        </div>
                    </div>
                
                </div> 

            <div className='d-flex flex-wrap align-items-center'>
                <div className={`${st.cost_img} text-center`} style={{margin: "40px 0"}}><img src='http://www.armagafx.com/wp-content/uploads/2019/12/undraw_code_review_l1q9.png' className={st.stydy_img} width="379px" alt="" /></div>
                <div className={st.cost}>
                    <h4 className={st.block__h4}>После успешного завершения курса можно начать карьеру фулстек-разработчика, а также продолжить обучение на других наших курсах.</h4>
                    <h1 className={`${st.block__h1} ${st.green}`}> 5 000 000 сум</h1>
                    <h5 className={st.block__h5}>Медианное значение зарплаты фулстек-разработчика по исследованию компании &laquo;Мой круг&raquo; в Ташкенте во втором полугодии 2020 года.</h5>
                </div>
            </div>

                <div className={`${st.section__blocks} w-100 ${st.check__course} align-items-center justify-content-around round`}>
                    <a href='#' className={`${st.blue__btn} ${st.block__a} py-3 px-5 ${st.round}`}>
                        Записаться на курс
                    </a>
                    <h4 className={`m-0 ${st.block__h4}`}>Консультация по телефону +998 71 784 56 99.</h4>
                </div>
            </div>
        )
    }
}

export default Block3