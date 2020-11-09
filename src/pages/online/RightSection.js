import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {FaBullhorn, FaChartLine, FaClock, FaHeart, FaUsers} from "react-icons/all";
import './main.css'


const mql = window.matchMedia(`(min-width: 900px)`);
class RightSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            sideNavLeft: false,
            eventKey:60,
            isBarsOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: mql.matches, sidebarOpen: false});
    }
    render() {
        return (

                <Col md={3} sm={12} xs={12} className="mt-3">
                    <ul className="list-unstyled list-group">
                        <li className="mb-4">
                            <h3>
                                <Link to="#">
                                    <div className="color-red">
                                        <FaHeart/>
                                    </div>
                                </Link>
                            </h3>
                        </li>
                        <li>
                            <Link to="#">
                                <Button className="btn btn-info btn-block text-decoration-none">KURSGA O'T 1.100.000Sum</Button>
                            </Link>
                        </li>
                        <li className="pl-3 list-group-item mt-3">
                            <p className="small d-inline">Tugatdi:<b>125 ta talaba</b></p>
                            <h4 className="float-right color-blue mt-0 pt-0"><FaUsers/></h4>
                        </li>
                        <li className="pl-3 list-group-item mt-3">
                            <p className="small d-inline">Davomiyligi:<b>35 soat</b></p>
                            <h4 className="float-right color-blue mt-0 pt-0"><FaClock/></h4>
                        </li>
                        <li className="pl-3 list-group-item mt-3">
                            <p className="small d-inline">Maruzalar:<b>15 soat</b></p>
                            <h4 className="float-right color-blue mt-0 pt-0"><FaBullhorn/></h4>
                        </li>
                        <li className="pl-3 list-group-item mt-3">
                            <p className="small d-inline">Bosqich:<b>Yuqori</b></p>
                            <h4 className="float-right color-blue mt-0 pt-0"><FaChartLine/></h4>
                        </li>
                    </ul>
                </Col>
        );
    }
}

export default RightSection;