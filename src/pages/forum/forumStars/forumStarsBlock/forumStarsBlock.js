import React from 'react'

export default class ForumStarsBlock extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let {title, messageCount} = this.props
        return(
            <div className='forum-stars px-2'>
                <a href='#' className='row forum-stars-link align-items-baseline'>
                <h6 className='col-9 forum-stars__link-title'>{title}</h6>
                    <div className='col-3 text-right col__a'><span>{messageCount}</span>k</div>
                </a>
            </div>
        )
    }
}
