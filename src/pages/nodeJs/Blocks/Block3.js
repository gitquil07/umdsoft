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
                
                    <h1 className={`${st.block__h1} mb-3`}>O`qishga to`g`ri yondashamiz</h1>
                    <div className={st.lesson__blocks}>
                        <div className={st.lesson__block}>
                            <img src={lesson1} width="50px" alt="" />
                            <p className={st.block__p}>Zamon talabiga mos bo`lgan texnologiyalar</p>
                        </div>

                        <div className={st.lesson__block}>
                            <img src={lesson2} width="63px" alt="" />
                            <p className={st.block__p}>O`rganish metodiga to`g`ri yondashuv</p>
                        </div>

                        <div className={st.lesson__block}>
                            <img src={lesson3} width="62px" alt="" />
                            <p className={st.block__p}>Texnologiyalardan to`g`ri foydalanish</p>
                        </div>

                        <div className={st.lesson__block}>
                            <img src={lesson4} width="36px" alt="" />
                            <p className={st.block__p}>Loyihani to`g`ri rejalashtirishni</p>
                        </div>
                    </div>
                
                </div> 

            <div className='d-flex flex-wrap align-items-center'>
                    <h2 className={st.block__h2}>Kursni muvaffaqiyatli tugatganingizdan kegin o`z karyerangizni FULL-STACK dasturchilikda davom ettirishingiz mumkin, bundan tashqari yangi bilimlarni o`rganishda davom etasiz</h2>
                    <h1 className={`${st.block__h1} ${st.green}`}> 6 950 000 сум</h1>
                           </div>

                <div className={`${st.section__blocks} w-100 ${st.check__course} align-items-center justify-content-around round`}>
                    <a href='#' className={`${st.blue__btn} ${st.block__a} py-1 px-3`}>
                        Kursga yozilish
                    </a>
                    <h4 className={`m-0 ${st.block__h4}`}>Telefon orqali ma`lumot olish 33.477-34-77</h4>
                </div>
            </div>
        )
    }
}

export default Block3