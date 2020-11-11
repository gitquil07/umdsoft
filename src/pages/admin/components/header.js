import React, {Component} from 'react';
import logo1 from "../assets/images/logo-sm-dark.png";
import logo2 from "../assets/images/logo-dark.png";
import adminAvatar from "../../../img/user.jpg";

class Header extends Component {
    render() {
        return (
            <div>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <a href="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logo1} alt="" height="22"/>
                                </span>
                                    <span className="logo-lg">
                                    <img src={logo2} alt="" height="20"/>
                                </span>
                                </a>
                            </div>

                            <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                                    id="vertical-menu-btn">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div className="d-flex">

                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item waves-effect"
                                        id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    <img className="rounded-circle header-profile-user"
                                         src={adminAvatar} alt="Header Avatar"/>
                                    <span className="d-none d-sm-inline-block ml-1">Smith</span>
                                    <i className="fas fa-chevron-down ml-2"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="/"><i className="mdi mdi-face-profile font-size-16 align-middle mr-1"></i> Profile</a>
                                    <a className="dropdown-item" href="/"><i className="mdi mdi-credit-card-outline font-size-16 align-middle mr-1"></i> Billing</a>
                                    <a className="dropdown-item" href="/"><i className="mdi mdi-account-settings font-size-16 align-middle mr-1"></i> Settings</a>
                                    <a className="dropdown-item" href="/"><i className="mdi mdi-lock font-size-16 align-middle mr-1"></i> Lock screen</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/admin/loginAdmin"><i className="mdi mdi-logout font-size-16 align-middle mr-1"></i> Logout</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </header>
            </div>
        );
    }
}

export default Header;