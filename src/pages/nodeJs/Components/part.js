import React from 'react'
import st from "../nodeJs.module.css";

export default class Parts extends React.Component {

    constructor(props) {
        super(props)   
        this.state = { isOpen: false }
    }

    handler = () => {
        this.setState({isOpen: !(this.state.isOpen)});
    }

    render() {
        return(
            <div className='position-relative'>
                <button className={`${st.part} ${st.block__a}`} onMouseOver={this.handler} onMouseOut={this.handler}>{this.props.title}</button>
                <div className={`${st.drop} ${(this.state.isOpen)? st.drop__active : '' }`}>
                    <div className={st.drop__chevr}></div>
                    <h5 className={st.drop__h5}>Umumiy soat: <span className={st.drop__span}> 5s. <i class={`far fa-clock ${st.drop__time}`}></i></span></h5> 
                    <h5 className={st.drop__h5}>Amaliyot: <span className={st.drop__span}>10s <i class={`far fa-clock ${st.drop__time}`}></i></span></h5> 
                    <h5 className={st.drop__h5}>Imtihon</h5>
                </div>
            </div>
        )
    }
}