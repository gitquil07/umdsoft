import React from 'react'

function forumGroup ({id, title}) {
    return (
        <div className='forum-group mb-1 mx-2 bg-white'>
            <a href ='#' className='d-flex justify-content-between'>
                <div className='d-flex forum-group__aside'>
                    <div className='forum-group__img-item mr-2'>
                        <img 
                            src='https://via.placeholder.com/70'
                            className='forum-group__img'
                        />
                    </div>

                    <div className='forum-group__main'>
                        {/* <h5 className='forum-group__main-title'>CSS stillarini qo'llayotkanda xatoliklar bo'ldi, nima qilay? </h5> */}
                        <h5 className='forum-group__main-title'>{id} {title}</h5>
                        <div className='forum-group__main-comments'>
                            <span className='forum-group__main-comments-count'>10</span>ta kommentlar
                        </div>
                    </div>
                </div>

                <div className='forum-group__details'>
                    <span className='forum-group__added'>11 kun oldin</span>
                </div>
            </a>
        </div> 
    )
}

export default forumGroup