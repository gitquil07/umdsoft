import React from 'react'
import ItemContainer from '../../../component/itemContainer/itemContainer'
import './courses.css'

import web from '../../../img/web.svg'
import mobile from '../../../img/mobile.svg'
import desctop from '../../../img/desctop.svg'
import python from '../../../img/python.svg'


import Course from './course'

function Courses() {

    

        return ( 
            <div className='mb-5'>
                <ItemContainer title='Bizning kurslarimiz'>
                    <div className='d-flex justify-content-between course-items'>
                        
                        <Course title='Web development' time='6 soat' lesson='120 dars' img={web}/>
                        <Course title='Mobile development' time='6 soat' lesson='120 dars' img={mobile}/>
                        <Course title='Desctop development' time='6 soat' lesson='120 dars' img={desctop}/>
                        <Course title='Python development' time='6 soat' lesson='120 dars' img={python}/>
                    </div>
                </ItemContainer>
            </div>
        ) 
}

export default Courses