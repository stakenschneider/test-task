import React from 'react'
import './AviaryInfoCard.css'

function AviaryInfoCard() {

    return (
        <div className='aviary-background'>
            <div className='aviary-info-flex-row'>
                <svg className='close'>
                    <path
                        d="M13.136 10.396C13.3514 10.6115 13.4508 10.8766 13.4343 11.1915C13.4508 11.5064 13.3514 11.7716 13.136 11.987L12.3405 12.7825C12.125 12.998 11.8516 13.1057 11.5201 13.1057C11.2218 13.1057 10.9649 12.998 10.7495 12.7825L7.16974 9.2028L3.59001 12.7825C3.37457 12.998 3.1094 13.0974 2.79452 13.0808C2.47964 13.0974 2.21447 12.998 1.99902 12.7825L1.20353 11.987C0.988083 11.7716 0.880359 11.4981 0.880359 11.1667C0.880359 10.8684 0.988083 10.6115 1.20353 10.396L4.78326 6.81631L1.20353 3.23658C0.988083 3.02114 0.872073 2.75597 0.8555 2.44109C0.872073 2.1262 0.988083 1.86104 1.20353 1.64559L1.99902 0.850097C2.21447 0.63465 2.47135 0.526927 2.76966 0.526927C3.10112 0.526927 3.37457 0.63465 3.59001 0.850097L7.16974 4.42982L10.7495 0.850097C10.9649 0.63465 11.2218 0.526927 11.5201 0.526927C11.8516 0.526927 12.125 0.63465 12.3405 0.850097L13.136 1.64559C13.3514 1.86104 13.4508 2.1262 13.4343 2.44109C13.4508 2.75597 13.3514 3.02114 13.136 3.23658L9.55623 6.81631L13.136 10.396Z"
                        fill="white"/>
                </svg>
                <div className='common-text percentage'>75%</div>
                <div className='percentage-label'>Заполнение вольера</div>
            </div>

            <div className='percentage-bar-flex-row'>
                <div className='percentage-bar-parent'>
                    <div className='percentage-bar-child'/>
                </div>
                <div className='info-button'>
                    <div className='common-text info-button-label'>Информация</div>
                </div>
            </div>
        </div>
    )
}

export default AviaryInfoCard