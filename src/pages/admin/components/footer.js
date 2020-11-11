import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="admin-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                2020 © Xoric.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-right d-none d-sm-block">
                                    Crafted with <i className="mdi mdi-heart text-danger"></i> by
                                    <a href="https://themesdesign.in/" className="text-muted">Themesdesign</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;