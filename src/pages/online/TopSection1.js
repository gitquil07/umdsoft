import React, {Component} from 'react';
import {Col, Navbar, Row} from "reactstrap";
import {Link} from "react-router-dom";
import teacher from "./images/humans/teacher.png";
import {FaStar} from "react-icons/all";
import './main.css'

const mql = window.matchMedia(`(min-width: 900px)`);

class TopSection1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <Row md={12} className="mt-5">
                    <Col md={12} sm={12}>
                        <h1 className="mb-5">Eng Yangi Texnologiyalar va MERN bilan Web Dasturlash Backendni Örganing.</h1>
                        <Navbar className={this.props.mql.matches?"nav pl-0":"nav pl-0 d-inline-block"}>
                            <ul className={this.props.mql.matches?"navbar list-unstyled ml-0 p-0":"list-unstyled ml-0 p-0"}>
                                <li className={"nav-link mb-2 pl-0"}>
                                    <Link to="#">
                                        <img src={teacher} className="mt-3 img60 mr-2" alt=""/>
                                        <div className={"float-right"}>
                                            <p className="small thin mb-0 pb-0 mt-3 text-opacity">Speaker</p>
                                            <p className="pt-0 color-black mb-0 thin small mt-0 pb-0">Aziz Juraev</p>
                                            <p className="small color-black thin">Web Developer</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="list-unstyled">
                                <li>
                                    <p className="mb-0 d-inline-block color-yellow"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                    <b className="ml-1">5</b>
                                </li>
                                <li><p className="text-opacity pt-0 mb-0">izohlar</p></li>
                            </ul>
                        </Navbar>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TopSection1;