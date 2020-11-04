import React from 'react'
import st from '../nodeJs.module.css'

class Block9 extends React.Component {
    render() {
        return(
            <div className={`${st.section} d-flex flex-wrap align-items-center`}> 
                <div style={{width: '48%'}} className={`${st.progres} ${st.w1}`}> 
                    <h1 className={st.block__h1}>После прохождения курса вы получите электронный сертификат *</h1>
                    <p className={st.block__p}>* Не является документом об образовании (об обучение). Курс не является услугой.</p>
                </div>
                <div className={st.w1}>
                    <img 
                        src='https://via.placeholder.com/450x250'
                        className={`${st.round} ml-5 ${st.aft_st_img}`}
                        style={{boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}
                    />
                </div>
                <div className={`${st.section__blocks} d-block w-100`}>
                    <h4 className={st.block__h4}>Статистика Академии</h4>
                    <div className='d-flex flex-wrap justify-content-around'>
                        <div  className={`d-flex ${st.wsm1} align-items-center`}>
                            <h1 className={`${st.block__h1} ${st.green} m-0 ${st.fs_70}`}>8</h1>
                            <p className={`m-0 ml-3 ${st.block__p}`}>лет на рынке <br /> обучения</p>
                        </div>
                        <div  className={`d-flex ${st.w1} align-items-center`}>
                            <h1 className={`${st.block__h1} ${st.green} m-0 ${st.fs_70}`}>98</h1>
                            <p className={`m-0 ml-3 ${st.block__p}`}>онлайн курсов <br /> проведено</p>
                        </div>
                        <div  className={`d-flex ${st.w1} align-items-center`}>
                            <h1 className={`${st.block__h1} ${st.green} m-0 ${st.fs_70}`}>840</h1>
                            <p className={`m-0 ml-3 ${st.block__p}`}>выпускника защитили <br /> проекты</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block9