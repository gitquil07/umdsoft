import React, {Component} from 'react';

class ChartsChartjs extends Component {
    render() {
        return (
            <div>
                <div className="page-title-box">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h4 className="page-title mb-1">Chartjs</h4>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Charts</a></li>
                                    <li className="breadcrumb-item active">Chartjs</li>
                                </ol>
                            </div>
                            <div className="col-md-4">
                                <div className="float-right d-none d-md-block">
                                    <div className="dropdown">
                                        <button className="btn btn-light btn-rounded dropdown-toggle" type="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-settings-outline mr-1"></i> Settings
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Bar Chart</h4>
                                        <p className="card-title-desc">Example of bar chart chart js.</p>

                                        <canvas id="barChart"></canvas>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Line Chart</h4>
                                        <p className="card-title-desc">Example of line chart chart js.</p>

                                        <canvas id="lineChart"></canvas>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Pie chart</h4>
                                        <p className="card-title-desc">Example of line pie chart js.</p>

                                        <canvas id="pieChart"></canvas>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Area chart</h4>
                                        <p className="card-title-desc">Example of line area chart js.</p>

                                        <canvas id="areaChart"></canvas>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Donut chart</h4>
                                        <p className="card-title-desc">Example of donut chart js.</p>

                                        <canvas id="donut-chart"></canvas>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Radar chart</h4>
                                        <p className="card-title-desc">Example of radar chart js.</p>

                                        <canvas id="radar-chart"></canvas>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ChartsChartjs;