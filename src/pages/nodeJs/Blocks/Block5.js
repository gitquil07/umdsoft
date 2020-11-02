import React from 'react'
import newSite from '../img/new-pages-site.jpg'
import teacher from '../img/teacher.svg'
import st from '../nodeJs.module.css';
class Block5 extends React.Component {
    render() {
        return(  
             <div className={`d-flex flex-wrap justify-content-between ${st.section} ${st.proc}`}>
                 <h1 className={`${st.block__h1} w-100 mb-2`}>Процесс работы с наставником</h1>
                 <div className={`w-50 ${st.proc1}`}>
                    <p className={st.block__p}>Во время курса вас будет сопровождать личный наставник. Он будет делать ревью кода, проверять практические задания, отвечать на вопросы и делиться секретами мастерства.</p>
                    
                    <img 
                        src={newSite}
                        width='470px'
                        className={`ml-1 my-4 ${st.w1}`}
                    />
                    
                </div>
                <div style={{width: '45%'}} className={st.proc2}>
                    <div className={`${st.question} position-relative`}>
                        Привет, сенсей. А какой редактор кода посоветуешь поставить? А то в интернете слишком много мнений, я не могу решить.
                        <div className={`position-absolute ${st.quest__chevr}`}></div>
                    </div>
                    <img 
                        src={teacher}
                        width='430px'
                        className={st.w1}
                    />
                    
                </div>
                <div className='d-flex flex-wrap justify-content-between'>
                    <div className={st.nastav} style={{width: '50%'}}>
                        <h5 className={`mt-2 ${st.block__h5}`}>Детальная обратная связь</h5>
                        <p className={st.block__p}>Ревью кода &mdash; это привычная практика, используемая в крупных компаниях, когда более опытный разработчик проверяет код менее опытного. Львиную долю обратной связи вы получите от наставника в виде ревью кода. Он прочитает каждую строчку, оставит комментарии и поможет сделать ваше решение правильным.</p>
                    </div>

                    <div className={st.nastav} style={{width: '43%'}}>
                        <h5 className={`mt-2 ${st.block__h5}`}>Голосовые консультации</h5>
                        <p className={st.block__p}>А когда ревью кода недостаточно, наставники используют голосовые консультации, зачастую с демонстрацией экрана. На таких консультациях разбирают сложные вопросы или демонстрируют нетривиальные приёмы. Во время курса предусмотрено 5 часов голосовых консультаций.</p>
                    </div>
                </div>
             </div>
        )
    }
}

export default Block5