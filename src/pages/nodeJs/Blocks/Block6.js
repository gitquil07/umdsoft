import React from 'react'
import st from '../nodeJs.module.css'

class Block6 extends React.Component {
    render() {
        return(
            <div className={`d-flex justify-content-between flex-wrap ${st.section}`}>  
                <h1 className={`w-100 mb-1 ${st.w1} ${st.block__h1}`}> Учебный проект  </h1>
                <p className={`${st.w1} ${st.block__p} ${st.projects__block}`} style={{width: '46%'}}>
                    В каждом разделе вы будете выполнять задания по учебному проекту. Над учебным проектом вы будете работать самостоятельно для закрепления пройденного материала.
                </p>
                <span className={`${st.w1} ${st.projects__block}`} style={{width: '45%'}}>
                    <i className="fas fa-exclamation-circle col__gold"></i>
                    <p className={`my-1 ${st.block__p}`}>Проект уже свёрстан. В течение курса вы сфокусируетесь на главном: проектировании и программировании</p>
                </span>
                <div className={`d-flex flex-wrap justify-content-between align-items-center mb-4 ${st.w1}`}>
                    <img 
                        src='https://via.placeholder.com/550x300'
                        className={`${st.round} ${st.w1} my-4 ${st.st_pr_img}`}
                        style={{boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}
                    />
                    <div className={` ${st.projects__block} ${st.w1}`} style={{width: '44%', marginRight: '12px'}}>
                        <h3 className={st.block__h3}>&laquo;Куплю. Продам&raquo;</h3>
                        <p className={st.block__p}>Интернет-сервис, упрощающий продажу или покупку любых вещей. Всё, что требуется для покупки: найти подходящее объявление и связаться с продавцом по email. Продать ненужные вещи ничуть не сложней: зарегистрируйтесь и заполните форму нового объявления.</p>
                    </div>
                </div>

                <h1 className={`w-100 mb-1 ${st.w1} ${st.block__h1}`}> Личный проект  </h1>
                <p className={`${st.w1} ${st.block__p}  ${st.projects__block}`} style={{width: '46%'}}>
                    В каждом разделе вы будете выполнять задания по личному проекту. Над ним вы будете работать и самостоятельно, и в паре с наставником.
                </p>
                <span  className={` ${st.projects__block} ${st.w1}`} style={{width: '45%'}}>
                    <i className="fas fa-exclamation-circle col__gold"></i>
                    <p className={`my-1 ${st.block__p}`}>Проект уже свёрстан. В течение курса вы сфокусируетесь на главном: проектировании и программировании</p>
                </span>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <img 
                        src='https://via.placeholder.com/550x300'
                        className={`${st.round} ${st.w1} my-4 ${st.st_pr_img}`}
                        style={{boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}
                    />
                    <div className={` ${st.projects__block} ${st.w1}`} style={{width: '44%', marginRight: '12px'}}>
                        <h3 className={st.block__h3}>&laquo;Типотека&raquo;</h3>
                        <p className={st.block__p}>Приложение для быстрого создания персональных блогов. Несколько простых шагов и вы автор современной площадки для публикации заметок. &laquo;Типотека&raquo; &mdash; это не только создание контента. Любой желающий читатель может зарегистрироваться и оставить комментарий. Создавайте заметки, общайтесь с читателями, модерируйте контент вместе с &laquo;Типотека&raquo;.</p>
                    </div>
                </div>
             </div>
        )
    }
}

export default Block6