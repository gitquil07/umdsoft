import React from 'react'
import {Link, Route} from 'react-router-dom'
import { ForumPaginate } from '../../component/paginate/paginate'
import './forum.css'
import forumGroup from './forumGroup/forumGroup'
import ForumStars from './forumStars/forumStars'
import ForumAnswerBlock from "./forumAnswerBlock/forumAnswerBlock";
class Forum extends React.Component {
    render(){
        return(
            <>
                <div className='forum container d-flex justify-content-between'>

                    <div id='paginate-root' className='forum-aside'>
                        {/*<ForumPaginate/>*/}
                        <ForumAnswerBlock />
                    </div> {/*forum-aside */}


                    <div className='forum-rside mb-3'>
                        <div className='forum-nav bg-white'>
                            <h5>Barcha sahifalar</h5>
                            <div className='forum-nav-block my-2'>
                                <a href='#' className='forum-nav-block-title'>Frilanserlar sahifasi</a>
                                <ul>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Muloqotlar</a> <span className='_count col__a'>8k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Oddiy gaplar</a><span className='_count col__a'>1k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Savollar</a><span className='_count col__a'>5k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Darak gaplar</a><span className='_count col__a'>4k</span></div></li>
                                </ul>
                            </div>

                            <div className='forum-nav-block my-2'>
                                <a href='#' className='forum-nav-block-title'>Fanlar sahifasi</a>
                                <ul>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Muloqotlar</a><span className='_count col__a'>9k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Photoshop</a><span className='_count col__a'>11k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Python</a><span className='_count col__a'>7k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>React</a><span className='_count col__a'>111k</span></div></li>
                                </ul>
                            </div>

                            <div className='forum-nav-block my-2'>
                                <a href='#' className='forum-nav-block-title'>Lesati platformasi</a>
                                <ul>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Muloqotlar</a><span className='_count col__a'>2k</span></div></li>
                                    <li><div className='d-flex justify-content-between'><a href='#' className='forum-nav-block-item'>Oddiy gaplar</a><span className='_count col__a'>1k</span></div></li>
                                </ul>
                            </div>

                        </div>

                        <ForumStars />
                        
                        <div className='advertisement'>
                            <img 
                                src='https://via.placeholder.com/300x350'
                            />
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

export default Forum