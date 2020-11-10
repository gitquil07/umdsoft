import React, {Component} from 'react';
class ChartsMorris extends Component {
    render() {
        return (
            <div>
                <div className="page-title-box">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h4 className="page-title mb-1">Morris Charts</h4>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Charts</a></li>
                                    <li className="breadcrumb-item active">Morris</li>
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

                                        <h4 className="header-title">Line Chart</h4>
                                        <p className="card-title-desc mb-4">Example of morris line chart.</p>

                                        <div id="morris-line-example" className="morris-chart" dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Bar Chart</h4>
                                        <p className="card-title-desc mb-4">Example of morris bar chart.</p>

                                        <div id="morris-bar-example" className="morris-chart" dir="ltr"></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Area Chart</h4>
                                        <p className="card-title-desc mb-4">Example of morris area chart.</p>

                                        <div id="morris-area-example" className="morris-chart" dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Doughnut Chart</h4>
                                        <p className="card-title-desc mb-4">Example of morris doughnut chart.</p>

                                        <div id="morris-donut-example" className="morris-chart" dir="ltr"></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Stacked Bar Chart</h4>
                                        <p className="card-title-desc mb-4">Example of stacked bar chart.</p>

                                        <div id="morris-stacked-example" className="morris-chart" dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Line Chart - Straight</h4>
                                        <p className="card-title-desc mb-4">Example of line straight chart.</p>

                                        <div id="morris-line-straight-example" className="morris-chart" dir="ltr"></div>

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

export default ChartsMorris;