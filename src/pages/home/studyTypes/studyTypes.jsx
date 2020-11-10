import React from 'react'
import { Link } from 'react-router-dom'
import ItemContainer from '../../../component/itemContainer/itemContainer'
import './studyTypes.css'

import simple from '../../../img/simple.svg'
import fast from '../../../img/fast.svg'

class StudyTypes extends React.Component {
    render() {
        return (
            <ItemContainer title="Ta'lim olish turlari">
                <div className='d-flex study__types__items justify-content-between'>
                    <div className='study__types__item bg__blue'>
                        <div>
                            <img 
                                src={simple}
                            />
                            <h3 className=' mt-3 text-white st__head'>ODATIY TA'LIM</h3>
                            <p className='st__p'>O’zingiz istagan tezlikda va vaqtda ta’lim oling. Muvaffaqiyatli marraga yetib borishingiz to’liqligicha o’zingizga bog’liq </p>
                        </div>
                        <div className='text-right'>
                            <Link to='/asigncourse' className='study__types__link'>Kursga yozilish...</Link>
                        </div>
                    </div>
                    <div className='study__types__item bg__blue'>
                        <div>
                            <img 
                                src={fast}
                            />
                            <h3 className='mt-3 text-white st__head'>INTENSIV TA'LIM</h3>
                            <p className='st__p'>Bizning intensiv ta’lim dasturimiz bo’yicha ta’lim oling. Har kunlik 5 soatlik ta’lim bilan muvaffaqiyatli marraga tezroq erishasiz.</p>
                        </div>
                        <div className='text-right'>
                            <Link to='/asigncourse' className='study__types__link'>Kursga yozilish...</Link>
                        </div>
                    </div>
                </div>
            </ItemContainer>
        )
    }
}

export default StudyTypes