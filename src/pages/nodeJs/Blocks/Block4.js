import React from 'react'
import block1 from '../img/block1.png'
import st from '../nodeJs.module.css';
class Block4 extends React.Component {
    render() {
        return(  
             <div className={`d-flex flex-wrap justify-content-between ${st.section}`}>
                 <div className={st.w1} style={{width: '60%'}}>
                    <h1 className={st.block__h1}>Наставники &mdash; это опытные профессионалы, работающие в индустрии</h1>
                    <div className='d-flex w1 flex-wrap align-items-center'>
                        <div className={st.w1}>
                            <img
                                src={block1}
                                width='258px'
                                height='auto'
                                className='programer'
                            />
                        </div>
                        <h3 className={`ml-5 ${st.w1} ${st.block__h3}`} style={{width: '50%',lineHeight: '1.5em'}}>Мы убеждены, что обратную связь ученику должен давать опытный специалист, который прямо сейчас работает на рынке, решает современные задачи, использует актуальные подходы и инструменты.</h3>
                    </div>
                    <p className={`w-75 ${st.block__p} ${st.w1}`}>
                        Чтобы отбирать таких специалистов, мы построили уникальную систему привлечения и фильтрации.
                    </p>
                    <p style={{width: '78%'}} className={`${st.w1} ${st.block__p}`}>
                        Вместе с наставником вы будете разрабатывать проект в экосистеме, привычной профессионалам. Рабочий процесс мало отличается от реальной разработки в больших компаниях
                    </p>
                 </div>

                 <div className={st.nastav} style={{width: '37%'}}>
                    <h1 className={st.block__h1}>Процесс отбора наставника</h1>

                    <div className='position-relative ml-3 pb-3' style={{borderLeft: '2px dashed #CBCBCB'}}>
                        <h5 className={`position-absolute px-3 py-1 text-white ${st.block__h5}`} style={{borderRadius: '50%', backgroundColor: '#02A4FE', top: '-4px', left: '-20px'}}>I</h5>
                        <div style={{marginLeft: '35px'}}>
                            <h5 className={st.block__h5}>Формальные требования</h5>
                            <p className={`my-2 ${st.block__p}`}>Проверяем, кем и где кандидат в наставники работал, какой у него опыт, а также смотрим на его код.</p>
                        </div>
                    </div>

                    <div className='position-relative ml-3 pb-3' style={{borderLeft: '2px dashed #CBCBCB'}}>
                        <h5 className={`${st.block__h5} position-absolute text-white`} style={{padding: '6px 15px',borderRadius: '50%', backgroundColor: '#02A4FE', top: '-4px', left: '-22px'}}>II</h5>
                        <div style={{marginLeft: '35px'}}>
                            <h5 className={st.block__h5}>Формальные требования</h5>
                            <p className={`my-2 ${st.block__p}`}>Проверяем, кем и где кандидат в наставники работал, какой у него опыт, а также смотрим на его код.</p>
                        </div>
                    </div>

                    <div className='position-relative ml-3 pb-3'>
                        <h5 className={`position-absolute text-white ${st.block__h5}`} style={{padding: '6px 12px', borderRadius: '50%', backgroundColor: '#02A4FE', top: '-4px', left: '-21px'}}>III</h5>
                        <div style={{marginLeft: '35px'}}>
                            <h5 className={st.block__h5}>Формальные требования</h5>
                            <p className={`my-2 ${st.block__p}`}>Проверяем, кем и где кандидат в наставники работал, какой у него опыт, а также смотрим на его код.</p>
                        </div>
                    </div>

                 </div>
             </div>
        )
    }
}

export default Block4