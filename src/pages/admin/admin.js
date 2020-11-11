import React from "react";
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";
import './assets/css/app.css'
import './assets/css/icons.css'
import Header from "./components/header";
import Footer from "./components/footer";
import ChartsMorris from "./components/adminCharts/charts-morris";
import ChartsApex from "./components/adminCharts/charts-apex";
import ChartsChartlist from "./components/adminCharts/charts-chartlist";
import ChartsChartjs from "./components/adminCharts/charts-chartjs";
const Admin = (props) => {

    let {match: {url}} = props;

    return (
        <>
            <div id="layout-wrapper">
                <Header/>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        <div id="sidebar-menu">
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title">Menu</li>
                                <li>
                                    <a href="javascript:void(0);" className="has-arrow waves-effect">
                                        <div className="d-inline-block icons-sm mr-1"><i
                                            className="uim uim-chart-pie"></i></div>
                                        <span>Charts</span>
                                    </a>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><a href='/charts-morris'>Morris</a></li>
                                        <li><a href='/charts-apex'>Apex</a></li>
                                        <li><a href='/charts-chartlist'>Chartlist</a></li>
                                        <li><a href='/charts-chartjs'>Chartjs</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="page-content">
                        <Route path='/charts-morris' component={ChartsMorris}/>
                        <Route path='/charts-apex' component={ChartsApex} />
                        <Route path='/charts-chartlist' component={ChartsChartlist}/>
                        <Route path='/charts-chartjs' component={ChartsChartjs}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );

}

export default Admin;