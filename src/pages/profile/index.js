import React from 'react'
import { Container } from 'react-bootstrap'
import { HeaderProfile } from '../../component'
import { MyCourses } from '../../component'
import CompletedCourses from './completedCourses/completedCourses'
import TestResults from './testResults/testResults';
import UserPanel from './userPanel/userPanel';
import UserEdit from './userEdit/userEdit';
import Statistick from './statistick/statistick'

class Profile extends React.Component {
    render () {
        return(
            <>
                {/* <HeaderProfile /> */}
                <div id='profile' className='profile bg-light d-flex' >
                    <div>
                        <Container>
                            <MyCourses />
                            <CompletedCourses />
                            <TestResults />
                        </Container>
                    </div>
                    <UserPanel>
                        <UserEdit />
                        <Statistick />
                    </UserPanel>
                </div>
            </>
        )
    }
}

export default Profile