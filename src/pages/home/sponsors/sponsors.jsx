import React from 'react'
import ItemContainer from '../../../component/itemContainer/itemContainer'

import atam from '../../../img/atam__logo.png'
import digaTech from '../../../img/diga.tech__logo.png'
import ptc from '../../../img/ptc__logo.png'
import protech from '../../../img/protech__logo.png'
import genetec from '../../../img/genetec__logo.png'

class Sponsors extends React.Component {
    render() {
        return (
            <div className='pb-5'>
                <ItemContainer title='Bizning hamkorlarimiz'>
                    <div className='d-flex flex-wrap mt-4  justify-content-between'>
                        <div className='sponsors-item m-2'>
                            <img 
                                src={atam}
                            />
                        </div>

                        <div className='sponsors-item m-2'>
                            <img 
                                src={digaTech}
                            />
                        </div>

                        <div className='sponsors-item m-2'>
                            <img 
                                src={ptc}
                            />
                        </div>

                        <div className='sponsors-item m-2'>
                            <img 
                                src={protech}
                            />
                        </div>

                        <div className='sponsors-item m-2'>
                            <img 
                                src={genetec}
                            />
                        </div>

                    </div>
                </ItemContainer>
            </div>
        )
    }
}

export default Sponsors