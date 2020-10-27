import React, {Component} from 'react';
import User from '../../../../img/user.jpg';
import './forumAnswer.css'
class ForumAnswer extends Component {
    render() {
        let {id, description} = this.props
        return (
            <div className='bg-white m-3 p-3'>
                <div className="row">
                    <div className="col-md-2 overflow-hidden text-center p-0">
                        <img className='forum-answer-img' width='100px' src={User} alt=""/>
                    </div>
                    <div className="col-md-10">
                        <p>{description}</p>
                        <div className='forum-answer-rating'>
                            <i className="fas fa-star col__gold"></i>
                            <i className="fas fa-star col__gold"></i>
                            <i className="fas fa-star col__gold"></i>
                            <i className="fas fa-star col__gold"></i>
                            <i className="far fa-star col__gold"></i>
                            &nbsp;
                            <span>4</span>/5
                        </div>
                        <div className='float-right d-flex'>
                            <button className='forum-answer-btn svg bg-white'><i className="fas fa-share"></i></button>
                            <button className='forum-answer-btn svg bg-white'><i className="fas fa-flag"></i></button>
                            <p className='mb-0'>19 iyun, 19:40</p>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default ForumAnswer;