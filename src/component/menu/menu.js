import React from 'react'
import  './menu.css'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import Banner from '../banner/banner'
import 'bootstrap/dist/css/bootstrap.min.css';



class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state =   {
            isOpen:true
        }
    }

    viewAside(){
        this.setState({
            isOpen: !this.state.isOpen
        });  
    }

    componentDidUpdate(){
        let menu = document.querySelector("#menu");
        let main = document.querySelector("#main");
        menu.style.display = this.state.isOpen? "block" : "none";
        if(this.state.isOpen){
            main.style.width = '80%';
            menu.classList.remove("animate__fadeOutLeftBig")
            menu.classList.add("animate__fadeInLeftBig");
        }else{
            main.style.width = '100%';
            menu.classList.remove("animate__fadeInLeftBig")
            menu.classList.add("animate__fadeOutLeftBig");
        }
    }

    render() {
        return (
            <div className='d-flex menu mw-100'>
              <div id='menu' className='aside px-3 animate__animated' style={{width: '20%'}}>
                    <Form>
                        <FormGroup className="mt-3 position-relative">
                            <FormControl
                                placeholder="Izlash..."
                                className='px-2 search'
                                required
                            />
                                <Button className='position-absolute border-0' style={{top: '1px', right: '1px'}} type='submit' variant="outline-secondary"><i className="fas fa-search"></i></Button>
                        </FormGroup>
                    </Form>
                    <div className='mt-5'>
                        <h5 className='mb-5 menu__text'>MENYU</h5>
                        <h5 className='mb-4 d-flex align-items-center hov'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><g><g><path className='svg' fill="#fff" d="M18.042 8.502L18.04 8.5 10.477.938a1.695 1.695 0 0 0-1.207-.5c-.456 0-.885.178-1.207.5l-7.56 7.56-.007.007a1.709 1.709 0 0 0 .003 2.41 1.697 1.697 0 0 0 1.185.501h.302v5.566a2 2 0 0 0 1.998 1.998h2.959c.3 0 .543-.243.543-.544v-4.363c0-.503.409-.912.911-.912h1.746c.502 0 .911.409.911.912v4.363c0 .3.243.544.543.544h2.96a2 2 0 0 0 1.997-1.998v-5.566h.28c.456 0 .884-.178 1.207-.5a1.71 1.71 0 0 0 0-2.413z"/></g></g></svg>
                            <a href='#' className='w-100 ml-2 menu__item' >BOSH SAXIFA</a>
                        </h5>
                        <h5 className='mb-4 d-flex align-items-center hov'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22"><g><g><g><path className='svg' fill="#48526b" d="M6 3.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></g><g><path className='svg' fill="#48526b" d="M11.963 7.886c-.776.503-1.7.797-2.693.797a4.929 4.929 0 0 1-2.693-.797 7.537 7.537 0 0 0-2.345 1.432l5.038 1.889 5.038-1.89a7.537 7.537 0 0 0-2.345-1.431z"/></g><g><path className='svg' fill="#48526b" d="M17.03 13.425h-.43a.647.647 0 0 0-.647.647v1.725c0 .357.29.646.647.646h.43a1.509 1.509 0 1 0 0-3.018z"/></g><g><path className='svg' fill="#48526b" d="M2.003 10.16a.647.647 0 0 0-.278.532v1.44h.215c1.07 0 1.94.87 1.94 1.94v1.725c0 1.07-.87 1.94-1.94 1.94h-.215v1.362c0 .27.167.511.42.606l6.478 2.43v-9.79l-6.025-2.259a.646.646 0 0 0-.595.074z"/></g><g><path className='svg' fill="#48526b" d="M14.66 15.797v-1.725c0-1.07.87-1.94 1.94-1.94h.215v-1.44a.647.647 0 0 0-.874-.606l-6.024 2.26v9.789l6.479-2.43a.647.647 0 0 0 .42-.606v-1.362H16.6c-1.07 0-1.94-.87-1.94-1.94z"/></g><g><path className='svg' fill="#48526b" d="M2.587 15.797v-1.725a.647.647 0 0 0-.647-.647h-.43a1.509 1.509 0 1 0-.001 3.018h.431c.357 0 .647-.29.647-.646z"/></g></g></g></svg>
                            <a href='#' className='w-100 ml-2 menu__item'>KURSLAR</a>
                        </h5>
                        <h5 className='mb-4 d-flex align-items-center hov'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"><g><g><g><path className='svg' fill="#48526b" d="M9.888 16.572v-.48a1.23 1.23 0 0 0 .618-1.065v-.554c0-.652-.476-1.239-1.126-1.295a1.236 1.236 0 0 0-1.346 1.23v.619c0 .456.25.85.618 1.064v.48l-1.272.364c-.527.15-.891.633-.891 1.182h5.562c0-.549-.364-1.031-.892-1.182z"/></g><g><path className='svg' fill="#48526b" d="M16.377 16.572v-.48a1.23 1.23 0 0 0 .618-1.065v-.554c0-.652-.476-1.239-1.126-1.295a1.236 1.236 0 0 0-1.346 1.23v.619c0 .456.25.85.618 1.064v.48l-1.272.364c-.528.15-.891.633-.891 1.182h5.562c0-.549-.364-1.031-.892-1.182z"/></g><g><path className='svg' fill="#48526b" d="M3.399 16.572v-.48a1.23 1.23 0 0 0 .618-1.065v-.554c0-.652-.476-1.239-1.125-1.295a1.236 1.236 0 0 0-1.347 1.23v.619c0 .456.25.85.618 1.064v.48l-1.272.364c-.527.15-.891.633-.891 1.182h5.562c0-.549-.364-1.031-.891-1.182z"/></g><g><path className='svg' fill="#48526b" d="M12.36 3.906L10 5.254a1.472 1.472 0 0 1-1.46 0L6.18 3.906v1.993c.352.215 1.441.785 3.09.785 1.648 0 2.737-.57 3.09-.785z"/></g><g><path className='svg' fill="#48526b" d="M15.14 7.92a.619.619 0 0 0 .618-.58l-.541-1.892h-.152l-.54 1.893c.02.323.288.579.616.579z"/></g><g><path className='svg' fill="#48526b" d="M8.343 7.729l2.854 1.427-2.854 1.427zm.927 3.899a2.475 2.475 0 0 0 2.472-2.472c0-.795-.381-1.53-1.02-1.995-.426.085-.91.14-1.452.14a7.441 7.441 0 0 1-1.453-.14 2.464 2.464 0 0 0-1.02 1.995 2.475 2.475 0 0 0 2.473 2.472z"/></g><g><path className='svg' fill="#48526b" d="M8.96 8.729v.854l.855-.427z"/></g><g><path className='svg' fill="#48526b" d="M16.995 9.774h-4.017v-.618h4.017zm0 1.236h-4.017v-.618h4.017zm0 1.236h-4.017v-.618h4.017zM4.944 5.139H1.545V4.52h3.399zm0 1.236H1.545v-.618h3.399zm0 1.236H1.545v-.618h3.399zM1.545 3.285h2.163v.618H1.545zm16.686-1.236v-.927h-5.326l.885.505a.834.834 0 0 1 .357.422h.376c.51 0 .927.416.927.927V4.83h.233l.694 2.472a1.237 1.237 0 0 1-2.472 0l.012-.085.682-2.387h.233V2.976a.31.31 0 0 0-.31-.31h-.375a.836.836 0 0 1-.357.422l-.812.465V6.22l-.124.093c-.032.024-.523.383-1.403.662.575.573.909 1.35.909 2.18a3.093 3.093 0 0 1-3.09 3.09 3.093 3.093 0 0 1-3.09-3.09c0-.83.334-1.607.908-2.18-.879-.279-1.37-.637-1.403-.662l-.123-.093V3.553l-.812-.465a.843.843 0 0 1 0-1.46l.884-.506H.31v.927h3.395v.618H.927v10.197h16.686V2.667h-1.545v-.618z"/></g><g><path className='svg' fill="#48526b" d="M4.944 2.358c0 .08.043.154.112.194l3.79 2.165c.258.148.59.148.848 0l3.588-2.05H9.27v-.618h4.012L9.694-.001a.858.858 0 0 0-.848 0l-3.79 2.165a.225.225 0 0 0-.112.194z"/></g></g></g></svg>
                            <a href='#' className='w-100 ml-2 menu__item'>VEBINAR</a>
                        </h5>
                        <h5 className='mb-4 d-flex align-items-center hov'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"><g><g><g><path className='svg' fill="#48526b" d="M5.297 9.743h-.662V9.08h.662zm-1.324 0H3.31V9.08h.662zm1.986-.662h.662v.662H5.96zm.234 1.752l1.09 1.09V8.087H2.65v2.649h3.31c.088 0 .172.035.234.097z"/></g><g><path className='svg' fill="#48526b" d="M0 17.026c0 .183.148.331.331.331H18.21a.331.331 0 0 0 .33-.33H15.56v-.663h2.98v-.331h-6.953v.331a.662.662 0 0 1-.662.662h-3.31a.662.662 0 0 1-.663-.662v-.331H0v.331h2.98v.662z"/></g><g><path className='svg' fill="#48526b" d="M1.986 7.756c0-.183.149-.33.331-.33h5.298c.182 0 .33.147.33.33v4.966a.331.331 0 0 1-.565.234l-1.558-1.558H2.317a.331.331 0 0 1-.33-.331zm7.615 5.628h5.297v.663H9.601zm0-1.324h5.297v.662H9.601zm0-1.324h1.324v.662H9.601zm1.986 0h3.311v.662h-3.31zM.662 15.37h17.216V5.108a.993.993 0 0 0-.994-.994h-.016a3.647 3.647 0 0 1-3.486 3.309L11.16 9.646a.331.331 0 0 1-.565-.234V7.425h-.662a3.645 3.645 0 0 1-3.625-3.31H1.655a.993.993 0 0 0-.993.993z"/></g><g><path className='svg' fill="#48526b" d="M8.608 4.446h5.959v.662h-5.96zm0-1.325h5.959v.662h-5.96zm0-1.324h5.959v.662h-5.96zM6.952 3.783a2.983 2.983 0 0 0 2.98 2.98h.993c.183 0 .331.148.331.331v1.518L13.01 6.86a.331.331 0 0 1 .234-.097 2.983 2.983 0 0 0 2.98-2.98v-.662a2.983 2.983 0 0 0-2.98-2.98H9.932a2.983 2.983 0 0 0-2.98 2.98z"/></g><g><path className='svg' fill="#48526b" d="M7.615 16.033h3.31v.331h-3.31z"/></g></g></g></svg>
                            <a href='#' className='w-100 ml-2 menu__item'>FORUM</a>
                        </h5>
                        <h5 className='d-flex align-items-center hov'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20"><g><g><g><path className='svg' fill="#48526b" d="M14.067 9.133a.543.543 0 0 0-.904 0l-2.011 3.017h4.926z"/></g><g><path className='svg' fill="#48526b" d="M10.9 18.667c0 .3.243.544.543.544h1.665v-5.975H10.9z"/></g><g><path className='svg' fill="#48526b" d="M14.195 19.21h1.593c.3 0 .543-.243.543-.543v-5.431h-2.136z"/></g><g><path className='svg' fill="#48526b" d="M3.295 12.693h3.26v1.086h-3.26z"/></g><g><path className='svg' fill="#48526b" d="M15.788 4.002h-3.26a.543.543 0 0 1 0-1.086h3.26a.543.543 0 0 1 0 1.086zm-8.69 0a.543.543 0 1 1 0-1.086.543.543 0 0 1 0 1.086zm-2.173 0a.543.543 0 1 1 0-1.086.543.543 0 0 1 0 1.086zm-2.173 0a.543.543 0 1 1 0-1.086.543.543 0 0 1 0 1.086zM16.91.743H1.63C.73.743 0 1.474 0 2.373v2.716h18.54V2.373c0-.899-.731-1.63-1.63-1.63z"/></g><g><path className='svg' fill="#48526b" d="M2.209 12.15c0-.3.243-.544.543-.544h4.345c.3 0 .543.244.543.544v2.172c0 .3-.243.543-.543.543H2.752a.543.543 0 0 1-.543-.543zm.543-2.716h7.604a.543.543 0 0 1 0 1.086H2.752a.543.543 0 0 1 0-1.086zM0 15.409c0 .898.731 1.629 1.63 1.629h8.183v-4.345c0-.323.095-.636.274-.904 2.376-3.565 2.203-3.317 2.314-3.442H2.752a.543.543 0 0 1 0-1.086h9.777c.334 0 .595.302.534.64a1.627 1.627 0 0 1 1.908.629l2.173 3.259c.179.268.273.581.273.904v4.264a1.632 1.632 0 0 0 1.123-1.548V6.175H0z"/></g></g></g></svg>
                            <a href='#' className='w-100 ml-2 menu__item'>BLOG</a>
                        </h5>

                    </div>
              </div>

              <div id='main' className='' style={{width: '80%', height: 'fit-content'}}>
                   {/* HEADER */}
                    <div className='w-100 d-flex p-3 px-2 justify-content-between align-items-center bg-light'>
                        <div className='d-flex align-items-center'>
                            <a href='#' onClick={() => this.viewAside()} className='mx-2 nav-link burger'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18"><g><g><g><path className='burger__svg' fill="#303956" d="M1 2a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"/></g><g><path className='burger__svg' fill="#303956" d="M1 10a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"/></g><g><path className='burger__svg' fill="#303956" d="M1 18a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"/></g></g></g></svg>
                            </a>
                            <a href='#' className='mx-1 nav-link'>IT AKADEMIYA</a>
                            <a href='#' className='mx-1 nav-link'>ONLAYN REPETITOR</a>
                            <a href='#' className='mx-1 nav-link'>ONLAYN MAKTAB</a>
                        </div>
                        <div className='d-flex align-items-center'>
                            <a href='#' className='mx-2' style={{cursor: 'pointer'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24"><g><g><g><path fill="#303956" d="M15.75 10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75zM18 21.75v-10.5C18 10.009 16.99 9 15.75 9H2.25A2.253 2.253 0 0 0 0 11.25v10.5C0 22.991 1.01 24 2.25 24h13.5c1.24 0 2.25-1.009 2.25-2.25z"/></g><g><path fill="#303956" d="M14.25 10.5a.75.75 0 0 1-.75-.75V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 4.5 6v3.75a.75.75 0 0 1-1.5 0V6c0-3.309 2.691-6 6-6s6 2.691 6 6v3.75a.75.75 0 0 1-.75.75z"/></g><g><path fill="#303956" d="M9.5 15a.5.5 0 1 1-1.002-.002A.5.5 0 0 1 9.5 15zm1.5 0c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2z"/></g><g><path fill="#303956" d="M9 20a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 1 1.5 0v2.75A.75.75 0 0 1 9 20z"/></g></g></g></svg>
                            </a>
                            <a href='/login' className='mx-2 nav-link avtoriz'>Avtorizatsiya</a>
                            <a href='#' className='mx-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29"><g><g><g><path fill="#f0f0f0" d="M.685 10.087A14.486 14.486 0 0 0 0 14.5c0 1.539.24 3.021.685 4.413l13.815.63 13.815-.63C28.76 17.521 29 16.04 29 14.5c0-1.539-.24-3.021-.685-4.413L14.5 9.457z"/></g><g><g><path fill="#d80027" d="M28.315 10.087L14.5 9.457l-13.815.63c-.132.413-.245.833-.34 1.26h28.31a14.414 14.414 0 0 0-.34-1.26z"/></g><g><path fill="#d80027" d="M.345 17.652c.095.428.208.848.34 1.261h.001l13.814.63 13.815-.63c.132-.413.245-.833.34-1.26z"/></g></g><g><path fill="#6da544" d="M14.5 29c6.47 0 11.948-4.237 13.815-10.087H.685C2.552 24.763 8.03 29 14.5 29z"/></g><g><path fill="#338af3" d="M14.5 0C8.03 0 2.552 4.237.685 10.087h27.63C26.448 4.237 20.97 0 14.5 0z"/></g><g><g><path fill="#f0f0f0" d="M6.626 5.99c0-1.359.955-2.493 2.23-2.772a2.837 2.837 0 1 0 0 5.542 2.838 2.838 0 0 1-2.23-2.77z"/></g><g><path fill="#f0f0f0" d="M10.532 7.279l.192.59h.622l-.503.366.192.591-.503-.365-.503.365.192-.59-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M12.516 7.279l.192.59h.621l-.503.366.192.591-.502-.365-.503.365.192-.59-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M14.5 7.279l.191.59h.622l-.503.366.192.591-.503-.365-.503.365.193-.59-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M16.483 7.279l.192.59h.621l-.502.366.192.591-.503-.365-.503.365.192-.59-.503-.366h.622z"/></g><g><path  fill="#f0f0f0" d="M18.466 7.279l.193.59h.621l-.503.366.192.591-.503-.365-.502.365.192-.59-.503-.366h.621z"/></g><g><path  fill="#f0f0f0" d="M12.516 5.215l.192.591h.621l-.503.366.192.59-.502-.364-.503.365.192-.591-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M14.5 5.215l.191.591h.622l-.503.366.192.59-.503-.364-.503.365.193-.591-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M16.483 5.215l.192.591h.621l-.502.366.192.59-.503-.364-.503.365.192-.591-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M18.466 5.215l.193.591h.621l-.503.366.192.59-.503-.364-.502.365.192-.591-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M14.5 3.152l.191.591h.622l-.503.366.192.59-.503-.365-.503.366.193-.591-.503-.366h.621z"/></g><g><path fill="#f0f0f0" d="M16.483 3.152l.192.591h.621l-.502.366.192.59-.503-.365-.503.366.192-.591-.503-.366h.622z"/></g><g><path fill="#f0f0f0" d="M18.466 3.152l.193.591h.621l-.503.366.192.59-.503-.365-.502.366.192-.591-.503-.366h.621z"/></g></g></g></g></svg>
                            </a>
                            
                        </div>
                    </div>

                    {/* END HEADER */}

                    <div className='w-100 bg-light'> {/* HOME PAGE -- IT AKADEMIYA */}
                        
                        <Banner />


                    </div>

              </div>

            </div>
        )
    }
}

export default Menu 