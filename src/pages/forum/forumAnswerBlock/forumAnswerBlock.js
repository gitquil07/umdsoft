import React, {useState} from 'react';
import './forumAnswerBlock.css'
import EditorTiny from "../../editorTiny/editorTiny";
import ForumAnswer  from './forumAnswer/forumAnswer'


function ForumAnswerBlock() {

    const [viewEditor,setViewEditor] = useState(false);

    return (
        <div className='px-3'>
            <header className="forum-answer-header align-items-center">
                <h3 className='forum-answer-header-title'>PHP Curlda ip adressni ózgartirish</h3>
                <div className='forum-answer-header-rating'>
                    <i className="fas fa-star col__gold"></i>
                    <i className="fas fa-star col__gold"></i>
                    <i className="fas fa-star col__gold"></i>
                    <i className="fas fa-star col__gold"></i>
                    <i className="far fa-star col__gold"></i>
                    &nbsp;
                    <span>4</span>/5
                </div>
            </header>

            <div className='forum-answer-body'>
                <p className='forum-answer-answer'>Salom phpda curl bilan ip adressni ózgartirish kerak. Internetda
                    bironta ham namuna topaolmadim. Ipni
                    curlda ózgaritib kirish boyicha</p>

                <ul className='forum-answer-hashtag'>
                    <li><a className='forum-answer-hashtag-item' href="#">php</a></li>
                    <li><a className='forum-answer-hashtag-item' href="#">curl</a></li>
                </ul>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <button className='forum-answer-block-btn' onClick={() => setViewEditor(!viewEditor)}>
                        <i className="fas fa-comment-alt"></i>
                        &nbsp;
                        Javob berish
                    </button>
                    <button className='forum-answer-btn svg bg-white'><i className="fas fa-flag"></i></button>
                </div>
            </div>

            <div className={`editorTiny ${(viewEditor) ? 'editorTiny--active' : ""}`}>

                <EditorTiny />

                <div className='row mt-2 d-flex justify-content-between'>
                    <div className='col-md-9 d-flex align-items-baseline'>
                        <input type="checkbox"/>
                        <p>&nbsp; Agar mening javobim tanlangan yoki izoh berilgan bo‘lsa, menga elektron xat
                            (<span>test@gmail.com</span>) yuborilsin</p>
                    </div>
                    <div className='col-md-3 text-right'>
                        <button className='forum-answer-block-btn' >
                            <p className='m-0'><i className="fas fa-comment-alt"></i> &nbsp;Javob berish</p>
                        </button>
                    </div>

                </div>
            </div>
            <h3 className='forum-answer-header-title'>Javoblar</h3>
            <div className='forum-answer-comments'>
                
                <ForumAnswer id={3} description="Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin."/>
                <ForumAnswer id={2} description="Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin. Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin. Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin. Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin.Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin.Assalomu alaykum! Savol shundan iborat ki java dasturida q'anday q'ilib dfb faillariga
                            malumotni kiritish mumkin"/>
                <ForumAnswer id={1} description="Vaalekum Assalom, yaxshi malades, huddi wundo davom ettrvur"/>
            </div>


        </div>
    )
}

export default ForumAnswerBlock;
