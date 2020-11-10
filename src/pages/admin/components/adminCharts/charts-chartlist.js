import React, {Component} from 'react';
class ChartsChartlist extends Component {
    render() {
        return (
            <div>
                <div className="page-title-box">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h4 className="page-title mb-1">Chartist</h4>
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="/">Charts</a></li>
                                    <li className="breadcrumb-item active">Chartist</li>
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

                                        <h4 className="header-title">Overlapping bars on mobile</h4>
                                        <p className="card-title-desc">This example makes use of label interpolation and
                                            the seriesBarDistance property that allows you to make bars overlap over
                                            each other.</p>

                                        <div id="overlapping-bars" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Stacked bar chart</h4>
                                        <p className="card-title-desc">You can also set your bar chart to stack the
                                            series bars on top of each other easily by using the stackBars property in
                                            your configuration.</p>

                                        <div id="stacked-bar-chart" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Animating a Donut with Svg.animate</h4>
                                        <p className="card-title-desc">Although it'd be also possible to achieve this
                                            animation with CSS, with some minor suboptimal things, here's an example of
                                            how to animate donut charts using Chartist.Svg.animate and SMIL.</p>

                                        <div id="animating-donut" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Simple pie chart</h4>
                                        <p className="card-title-desc">A very simple pie chart with label interpolation
                                            to show percentage instead of the actual data series value.
                                        </p>

                                        <div id="simple-pie"
                                             className="ct-chart ct-golden-section simple-pie-chart-chartist"
                                             dir="ltr"></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Advanced Smil Animations</h4>
                                        <p className="card-title-desc">Chartist provides a simple API to animate the
                                            elements on the Chart using SMIL.</p>

                                        <div id="smil-animations" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Simple line chart</h4>
                                        <p className="card-title-desc">An example of a simple line chart with three
                                            series. You can edit this example in realtime.</p>

                                        <div id="simple-line-chart" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Line Scatter Diagram</h4>
                                        <p className="card-title-desc">This advanced example uses a line chart to draw a
                                            scatter diagram. The data object is created with a functional style random
                                            mechanism.</p>

                                        <div id="scatter-diagram" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">

                                        <h4 className="header-title">Line chart with area</h4>
                                        <p className="card-title-desc">This chart uses the showArea option to draw line,
                                            dots but also an area shape. Use the low option to specify a fixed lower
                                            bound that will make the area expand.</p>

                                        <div id="chart-with-area" className="ct-chart ct-golden-section"
                                             dir="ltr"></div>

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

export default ChartsChartlist;