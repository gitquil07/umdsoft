import React, {Component} from 'react';
import {
    Col,
    Container,
    Row,
} from "reactstrap";
import TopSection1 from "./TopSection1";
import TabsSection from "./TabsSection";
import RightSection from "./RightSection";
import './main.css'
import ProfileModal from "../profile/userEdit/ProfileModal";

const mql = window.matchMedia(`(min-width: 900px)`);
class Online extends Component {
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
            <Container>
                {/*modal?*/}
                {/*<ProfileModal/>*/}
                <Row md={12}>
                    <Col md={9} className="pl-5 pr-5">
                        {/*TOP SECTION1*/}
                        <TopSection1/>
                        {/*TOP SECTION1*/}

                       {/* TABS TAB*/}
                        <TabsSection/>
                        {/* TABS TAB*/}
                    </Col>


                    {/*UNG TOMON*/}
                    <RightSection/>
                    {/*UNG TOMON*/}
                </Row>

            </Container>
        );
    }
}


export default Online;
