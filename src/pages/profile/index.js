import React from 'react'
import { Container } from 'react-bootstrap'
import { HeaderProfile } from '../../component'
import MyCourses from '../../component/myCourses/myCourses'

class Profile extends React.Component {
    render () {
        return(
            <div className='profile bg-light'>
                <HeaderProfile />
                <div>
                    <Container>
                        <MyCourses />
                    </Container>
                </div>
            </div>
        )
    }
}

export default Profile