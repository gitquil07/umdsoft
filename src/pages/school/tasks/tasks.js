import React from 'react'
import './tasks.css'


class Tasks extends React.Component {
    render() {
        return(
            <div>
            <div className='my-4 d-flex flex-wrap justify-content-between'>
            <div className='tasks d-flex my-3'>
                    <a href='#' className='task-item__link'>
                        <img 
                            src='https://avatars.mds.yandex.net/get-euler/3226043/f526cc5e-6b31-4b80-a930-0aff7b3bf88c/orig'
                            className='task-item__img'
                        />
                    </a>
                    <div className='task-item'>
                        <a href='#' className='task-item__link'>
                            <h3 className='task-item__title'>Rasm: ko'rsatib o'rgatamiz</h3>
                            <p className='task-item__description'>Ongli ravishda suratga olishga va shaxsiy foto loyihasini yaratishga o'rganish</p>
                        </a>
                        <div className='task-item__tags'>
                            <div className='task-item__tag-container'>
                                <span className='task-item__tag-icon'><i className="fas fa-user"></i></span>
                                <span className='task-item__tag-text'>11-12 yosh</span>
                            </div>
                            <div className='task-item__tag-container'>
                                <span className='task-item__tag-icon'><i className="fas fa-clock"></i></span>
                                <span className='task-item__tag-text'>60 min</span>
                            </div>
                        </div>
                    </div>
                    <div className='task-item__details'>
                        <div className='taks-item__details-wrapper'>
                            <span className='task-card__date-label'>Kursning eng yaqin sanasi</span>
                            <span className='task-card__date'>19 oktabr, 19:00</span>
                        </div>
                        <a href='#' className='task__item-details-button'>BATAFSIL</a>
                    </div>
                </div>

                <div className='tasks d-flex  my-3'>
                    <a href='#' className='task-item__link'>
                        <img 
                            src='https://avatars.mds.yandex.net/get-euler/3226043/f526cc5e-6b31-4b80-a930-0aff7b3bf88c/orig'
                            className='task-item__img'
                        />
                    </a>
                    <div className='task-item'>
                        <a href='#' className='task-item__link'>
                            <h3 className='task-item__title'>Rasm: ko'rsatib o'rgatamiz</h3>
                            <p className='task-item__description'>Ongli ravishda suratga olishga va shaxsiy foto loyihasini yaratishga o'rganish</p>
                        </a>
                        <div className='task-item__tags'>
                            <div className='task-item__tag-container'>
                                <span className='task-item__tag-icon'><i className="fas fa-user"></i></span>
                                <span className='task-item__tag-text'>11-12 yosh</span>
                            </div>
                            <div className='task-item__tag-container'>
                                <span className='task-item__tag-icon'><i className="fas fa-clock"></i></span>
                                <span className='task-item__tag-text'>60 min</span>
                            </div>
                        </div>
                    </div>
                    <div className='task-item__details'>
                        <div className='taks-item__details-wrapper'>
                            <span className='task-card__date-label'>Kursning eng yaqin sanasi</span>
                            <span className='task-card__date'>19 oktabr, 19:00</span>
                        </div>
                        <a href='#' className='task__item-details-button'>BATAFSIL</a>
                    </div>
                </div>

                <div className='tasks d-flex  my-3'>
                    <a href='#' className='task-item__link'>
                        <img 
                            src='https://avatars.mds.yandex.net/get-euler/3226043/f526cc5e-6b31-4b80-a930-0aff7b3bf88c/orig'
                            className='task-item__img'
                        />
                    </a>
                    <div className='task-item'>
                        <a href='#' className='task-item__link'>
                            <h3 className='task-item__title'>Rasm: ko'rsatib o'rgatamiz</h3>
                            <p className='task-item__description'>Ongli ravishda suratga olishga va shaxsiy foto loyihasini yaratishga o'rganish</p>
                        </a>
                        <div className='task-item__tags'>
                            <div className='task-item__tag-container'>
                                <span className='task-item__tag-icon'><i className="fas fa-user"></i></span>
                                <span className='task-item__tag-text'>11-12 yosh</span>
                            </div>
                            <div className='task-item__tag-container'>
                                <span className='task-item__tag-icon'><i className="fas fa-clock"></i></span>
                                <span className='task-item__tag-text'>60 min</span>
                            </div>
                        </div>
                    </div>
                    <div className='task-item__details'>
                        <div className='taks-item__details-wrapper'>
                            <span className='task-card__date-label'>Kursning eng yaqin sanasi</span>
                            <span className='task-card__date'>19 oktabr, 19:00</span>
                        </div>
                        <a href='#' className='task__item-details-button'>BATAFSIL</a>
                    </div>
                </div>

            </div>

            <div className='more-item text-center'>
                <a href='#' className='more-item__link'>MORE...</a>
            </div>

            </div>
        )
    }
}

export default Tasks