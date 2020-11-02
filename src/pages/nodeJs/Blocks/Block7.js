import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import st from '../nodeJs.module.css'

class Block7 extends React.Component {
    render() {
        return(  
             <div className={st.section}>
                 <h1 className={`mb-1 ${st.block__h1}`}>Отзывы компаний</h1>
                 <p className={`w-75 ${st.block__p} ${st.w1}`}>Мне давно зарекомендовали себя в профессиональном сообществе. Нас и наших выпускников знают не только разработчики, но и крупные компании. Вот несколько отзывов от компаний о наших курсах и выпускниках.</p>
                 <Carousel className={st.carousel}>
                    <Carousel.Item className={st.carousel__item}>
                        <div className='d-flex flex-wrap'>
                            <div style={{width: '57%'}} className={st.wsm1}>
                                <p className={st.block__p}>В Авито нет верстальщиков, только фронтенд-разработчики разных уровней. Чтобы попасть к нам на работу младшим разработчиком, человек должен обладать определёнными навыками. Это уверенное владение базовыми технологиями: HTML, CSS и JavaScript, понимание того, как работает браузер, знание, как делать проекты кроссбраузерными, как работает API, DOM и другие важные основы. Кроме этого мы ценим ответственность, умение играть в команде, желание развиваться и инициативность.</p>
                                <h3 className={`mt-5 mb-0 ${st.block__h3}`}>Яна Крикливая</h3>
                                <p className={`mt-1 ${st.block__p}`}>разработчик клиентской части, Авито</p>
                            </div>
                            <div style={{width:'30%', margin: '16px 20px', marginRight: 0}} className={`${st.wsm1} ${st.car_rt}`}>
                                <img 
                                    src='https://www.avito.ru/files/avito/company/logos/Logo-Avito.png?_ga=2.50360746.2036790122.1602221073-960499542.1602221073'
                                    width='350px'
                                    className={st.avito_logo}
                                />
                                <h3 className={`mt-3 ${st.block__h3}`}>Авито</h3>
                                <p className={st.block__p}>Интернет-сервис для размещения объявлений о товарах, услугах, вакансиях и резюме на рынке труда.</p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className={st.carousel__item}>
                        <div className='d-flex flex-wrap'>
                            <div style={{width: '57%'}}  className={st.wsm1}>
                                <p className={st.block__p}>В Авито нет верстальщиков, только фронтенд-разработчики разных уровней. Чтобы попасть к нам на работу младшим разработчиком, человек должен обладать определёнными навыками. Это уверенное владение базовыми технологиями: HTML, CSS и JavaScript, понимание того, как работает браузер, знание, как делать проекты кроссбраузерными, как работает API, DOM и другие важные основы. Кроме этого мы ценим ответственность, умение играть в команде, желание развиваться и инициативность.</p>
                                <h3 className={`mt-5 mb-0 ${st.block__h3}`}>Яна Крикливая</h3>
                                <p className={`mt-1 ${st.block__p}`}>разработчик клиентской части, Авито</p>
                            </div>
                            <div style={{width:'30%', margin: '16px 20px', marginRight: 0}}  className={`${st.wsm1} ${st.car_rt}`}>
                                <img 
                                    src='https://www.avito.ru/files/avito/company/logos/Logo-Avito.png?_ga=2.50360746.2036790122.1602221073-960499542.1602221073'
                                    width='350px'
                                    className={st.avito_logo}
                                />
                                <h3 className={`mt-3 ${st.block__h3}`}>Авито</h3>
                                <p className={st.block__p}>Интернет-сервис для размещения объявлений о товарах, услугах, вакансиях и резюме на рынке труда.</p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className={st.carousel__item}>
                        <div className='d-flex flex-wrap'>
                            <div style={{width: '57%'}}  className={st.wsm1}>
                                <p className={st.block__p}>В Авито нет верстальщиков, только фронтенд-разработчики разных уровней. Чтобы попасть к нам на работу младшим разработчиком, человек должен обладать определёнными навыками. Это уверенное владение базовыми технологиями: HTML, CSS и JavaScript, понимание того, как работает браузер, знание, как делать проекты кроссбраузерными, как работает API, DOM и другие важные основы. Кроме этого мы ценим ответственность, умение играть в команде, желание развиваться и инициативность.</p>
                                <h3 className={`mt-5 mb-0 ${st.block__h3}`}>Яна Крикливая</h3>
                                <p className={`${st.block__p}`}>разработчик клиентской части, Авито</p>
                            </div>
                            <div style={{width:'30%', margin: '16px 20px', marginRight: 0}}  className={`${st.wsm1} ${st.car_rt}`}>
                                <img 
                                    src='https://www.avito.ru/files/avito/company/logos/Logo-Avito.png?_ga=2.50360746.2036790122.1602221073-960499542.1602221073'
                                    width='350px'
                                    className={st.avito_logo}
                                />
                                <h3 className={`mt-3 ${st.block__h3}`}>Авито</h3>
                                <p className={st.block__p}>Интернет-сервис для размещения объявлений о товарах, услугах, вакансиях и резюме на рынке труда.</p>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
             </div>
        )
    }
}

export default Block7