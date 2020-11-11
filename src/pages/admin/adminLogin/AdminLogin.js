import React, {Component} from 'react';
import './AdminLogin.css'
class AdminLogin extends Component {
    render() {
        return (
        <div className="bg-primary bg-pattern py-5">
            <div className="account-pages mt-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-sm-8">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="p-2">
                                        <h5 className="mb-5 text-center">Sign in to continue to Xoric.</h5>
                                        <form className="form-horizontal" action="index.html">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group form-group-custom mb-4">
                                                        <input type="text" className="form-control" id="username" required/>
                                                            <label htmlFor="username">User Name</label>
                                                    </div>

                                                    <div className="form-group form-group-custom mb-4">
                                                        <input type="password" className="form-control" id="userpassword" required/>
                                                            <label htmlFor="userpassword">Password</label>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                       id="customControlInline"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="customControlInline">Remember
                                                                        me</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="text-md-right mt-3 mt-md-0">
                                                                <a href="auth-recoverpw.html" className="text-muted"><i
                                                                    className="mdi mdi-lock"></i> Forgot your password?</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <button
                                                            className="btn bg-info p-2 btn-block waves-effect waves-light"
                                                            type="submit">Log In
                                                        </button>
                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <a href="auth-register.html" className="text-muted"><i
                                                            className="mdi mdi-account-circle mr-1"></i> Create an
                                                            account</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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

export default AdminLogin;