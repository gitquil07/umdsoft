import React, {Component} from 'react';
class ChartsApex extends Component {
    render() {
        return (
            <div>
                <div className="page-title-box">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h4 className="page-title mb-1">Apex charts</h4>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href='#'>Charts</a></li>
                                    <li className="breadcrumb-item active">Apex</li>
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
                                        <h4 className="header-title mb-4">Line with Data Labels</h4>

                                        <div id="line_chart_datalabel" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Dashed Line</h4>

                                        <div id="line_chart_dashed" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Spline Area</h4>

                                        <div id="spline_area" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Column Charts</h4>

                                        <div id="column_chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Column with Data Labels</h4>

                                        <div id="column_chart_datalabel" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Bar Chart</h4>

                                        <div id="bar_chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Line, Column & Area Chart</h4>

                                        <div id="mixed_chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Radial Chart</h4>

                                        <div id="radial_chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Pie Chart</h4>

                                        <div id="pie_chart" className="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="header-title mb-4">Donut Chart</h4>

                                        <div id="donut_chart" className="apex-charts" dir="ltr"></div>
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

export default ChartsApex;