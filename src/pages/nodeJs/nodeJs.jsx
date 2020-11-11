import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './Blocks/Header';
import Block1 from './Blocks/Block1';
import Block2 from './Blocks/Block2';
import Block3 from './Blocks/Block3';
import Block4 from './Blocks/Block4';
import Block6 from './Blocks/Block6';
import Block7 from './Blocks/Block7';
import Block8 from './Blocks/Block8';
import Block9 from './Blocks/Block9';
import Block10 from './Blocks/Block10';

const Nodejs = () => {
    return (
        <div className='bg-light pb-2'>
            <Header />
            <Container>
                <Block1 />
                <Block2 />
                <Block3 />
                <Block4 />
                <Block6 />
                <Block7 />
                <Block8 />
                <Block9 />
                <Block10 />
            </Container>
        </div>
    );
}

export default Nodejs;
