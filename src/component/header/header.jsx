import React from "react";
import { NavLink } from 'react-bootstrap'
import "./header.css";

const Header = ({viewAside}) => {
    return(
        <div id='main' className='main'>
            {/* HEADER */}
            <div id='header' className='header d-flex justify-content-between align-items-center bg-light'>
                <div className='header-item d-flex align-items-center'>
                    <div className='burger-menu'>
                        <a href='#' onClick={viewAside} className='mx-2 nav-link burger'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18"><g><g><g><path className='burger__svg' fill="#303956" d="M1 2a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"/></g><g><path className='burger__svg' fill="#303956" d="M1 10a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"/></g><g><path className='burger__svg' fill="#303956" d="M1 18a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"/></g></g></g></svg>
                        </a>
                    </div>
                    <div className='header-nav-menu'>
                        {/* <Router> */}
                            <NavLink to='/' activeClassName='nav-link__active' className='mx-1 nav-link'>IT AKADEMIYA</NavLink> 
                            <NavLink to='/repetitor' activeClassName='nav-link__active' className='mx-1 nav-link'>ONLAYN REPETITOR</NavLink> 
                            <NavLink to='/school' activeClassName='nav-link__active' className='mx-1 nav-link'>ONLAYN MAKTAB</NavLink> 
                        {/* </Router> */}
                    </div>
                </div>
                <div className='align-items-center header-nav-menu'>
                    <div className='my-2 text-right'>
                        <a href='#' className='mx-2' style={{cursor: 'pointer'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24"><g><g><g><path fill="#303956" d="M15.75 10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75zM18 21.75v-10.5C18 10.009 16.99 9 15.75 9H2.25A2.253 2.253 0 0 0 0 11.25v10.5C0 22.991 1.01 24 2.25 24h13.5c1.24 0 2.25-1.009 2.25-2.25z"/></g><g><path fill="#303956" d="M14.25 10.5a.75.75 0 0 1-.75-.75V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 4.5 6v3.75a.75.75 0 0 1-1.5 0V6c0-3.309 2.691-6 6-6s6 2.691 6 6v3.75a.75.75 0 0 1-.75.75z"/></g><g><path fill="#303956" d="M9.5 15a.5.5 0 1 1-1.002-.002A.5.5 0 0 1 9.5 15zm1.5 0c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2z"/></g><g><path fill="#303956" d="M9 20a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 1 1.5 0v2.75A.75.75 0 0 1 9 20z"/></g></g></g></svg>
                        </a>
                    </div>
                    <div className='my-2'>
                        <a href='/login' className='mx-2 nav-link avtoriz'>Avtorizatsiya</a>
                    </div>
                    <div className='my-2 text-right'>
                        <a href='#' className='mx-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29"><g><g><g><path fill="#f0f0f0" d="M.685 10.087A14.486 14.486 0 0 0 0 14.5c0 1.539.24 3.021.685 4.413l13.815.63 13.815-.63C28.76 17.521 29 16.04 29 14.5c0-1.539-.24-3.021-.685-4.413L14.5 9.457z"/></g><g><g><path fill="#d80027" d="M28.315 10.087L14.5 9.457l-13.815.63c-.132.413-.245.833-.34 1.26h28.31a14.414 14.414 0 0 0-.34-1.26z"/></g><g><path fill="#d80027" d="M.345 17.652c.095.428.208.848.34 1.261h.001l13.814.63 13.815-.63c.132-.413.245-.833.34-1.26z"/></g></g><g><path fill="#6da544" d="M14.5 29c6.47 0 11.948-4.237 13.815-10.087H.685C2.552 24.763 8.03 29 14.5 29z"/></g><g><path fill="#338af3" d="M14.5 0C8.03 0 2.552 4.237.685 10.087h27.63C26.448 4.237 20.97 0 14.5 0z"/></g><g><g><path fill="#f0f0f0" d="M6.626 5.99c0-1.359.955-2.493 2.23-2.772a2.837 2.837 0 1 0 0 5.542 2.838 2.838 0 0 1-2.23-2.77z"/></g><g><path fill="#f0f0f0" d="M10.532 7.279l.192.59h.622l-.503.366.192.591-.503-.365-.503.365.192-.59-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M12.516 7.279l.192.59h.621l-.503.366.192.591-.502-.365-.503.365.192-.59-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M14.5 7.279l.191.59h.622l-.503.366.192.591-.503-.365-.503.365.193-.59-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M16.483 7.279l.192.59h.621l-.502.366.192.591-.503-.365-.503.365.192-.59-.503-.366h.622z"/></g><g><path  fill="#f0f0f0" d="M18.466 7.279l.193.59h.621l-.503.366.192.591-.503-.365-.502.365.192-.59-.503-.366h.621z"/></g><g><path  fill="#f0f0f0" d="M12.516 5.215l.192.591h.621l-.503.366.192.59-.502-.364-.503.365.192-.591-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M14.5 5.215l.191.591h.622l-.503.366.192.59-.503-.364-.503.365.193-.591-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M16.483 5.215l.192.591h.621l-.502.366.192.59-.503-.364-.503.365.192-.591-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M18.466 5.215l.193.591h.621l-.503.366.192.59-.503-.364-.502.365.192-.591-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M14.5 3.152l.191.591h.622l-.503.366.192.59-.503-.365-.503.366.193-.591-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M16.483 3.152l.192.591h.621l-.502.366.192.59-.503-.365-.503.366.192-.591-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M18.466 3.152l.193.591h.621l-.503.366.192.59-.503-.365-.502.366.192-.591-.503-.366h.621z"/></g></g></g></g></svg>
                        </a>
                    </div>
                    
                </div>
            </div>

            <div id='contAside' className='contAside' onClick={viewAside}>
                  nothingn there
            </div>

        </div>
    );
}

export default Header;