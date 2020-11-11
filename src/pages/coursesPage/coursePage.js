import React from 'react';
import ItemContainer from '../../component/itemContainer/itemContainer'
import './coursePage.css'
import Course from '../../component/course/course'

import web from '../../img/web.svg'
import mobile from '../../img/mobile.svg'
import desctop from '../../img/desctop.svg'
import python from '../../img/python.svg'

export default class CoursePage extends React.Component{
    render(){
        return ( 
            <div className='m-5 pt-2'>
                <ItemContainer title='Offline kurslarimiz'>
                    <div className='d-flex justify-content-between course-items'>
                        
                        <Course title='Web development' time='6 soat' lesson='120 dars' img={web}/>
                        <Course title='Mobile development' time='6 soat' lesson='120 dars' img={mobile}/>
                        <Course title='Desctop development' time='6 soat' lesson='120 dars' img={desctop}/>
                        <Course title='Python development' time='6 soat' lesson='120 dars' img={python}/>

                    </div>
                </ItemContainer>
                <ItemContainer title='Online kurslarimiz'>
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
} 