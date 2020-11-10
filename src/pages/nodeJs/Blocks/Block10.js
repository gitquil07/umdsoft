import React from 'react'
import { Form, Button, Tab, Tabs } from 'react-bootstrap'
import st from '../nodeJs.module.css'

class Block10 extends React.Component {

    render() {
        return(
             <div className={st.section}>
                <h1 className={st.block__h1} >Web Dasturlash. Intensiv-interaktiv kurslarimizga hoziroq yoziling</h1>
                <div className='d-flex flex-wrap align-items-center mb-5'>
                    <h1 className={`${st.green} ${st.block__h1} mb-0 ${st.fs_70}`}>6 950 000 so`m</h1>
                    <span className={`ml-4 ${st.span__month}`}>
                        <h5 className={`font-weight-normal mb-0 mt-2 ${st.block__h5}`}>kursning to`liq narxi*</h5>
                        <p className={` ${st.block__p} my-1`}>Shartnoma asosida oyma oy to`lash imkoni mavjud*</p>
                    </span>
                </div>
                <div className={`${st.section__blocks} pb-4`}>
                    <div className='w-100'>                    
                        <Tabs defaultActiveKey="payInstPlan" id="payment">
                            <Tab eventKey="payInstPlan"  title="Bo`lib to`lash">
                                <div className={`bg-white ${st.payment__item}`}>
                                    <p>lorem1</p>
                                </div>
                            </Tab>
                            <Tab eventKey="payFull" title="Birdaniga to`lash">
                                <div className={`bg-white ${st.payment__item}`}>
                                    <p>lorem2</p>
                                </div>
                            </Tab>
                            <Tab eventKey="payComp"  title="3 tomonlama shartnoma orqali to`lash" >
                                <div className={`bg-white ${st.payment__item}`}>
                                    <p>lorem3</p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                    
                </div>
             </div>
        )
    }
}

export default Block10