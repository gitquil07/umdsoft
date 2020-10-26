import React from 'react'
import './forumStars.css'
import ForumStarsBlock from './forumStarsBlock/forumStarsBlock'

class ForumStars extends React.Component {
    render() {
        return(
            <div className='bg-white py-2 my-3'>
                <h5 className='px-2'>Mashxur mavzular</h5>
                <ForumStarsBlock title='CSS stillarini qanday ishlatish?' messageCount={10}/>
                <ForumStarsBlock title='Bootstrap klasslarini qanday ishlatish?' messageCount={20}/>
                <ForumStarsBlock title='CSS stillarini qanday ishlatish?' messageCount={10}/>
                <ForumStarsBlock title='Bootstrap klasslarini qanday ishlatish?' messageCount={20}/>
            </div>
        )
    }
}

export default ForumStars