import React from 'react'
import './TopBar.css'
import '../styles.css'
import AddAviary from "../AddAviary";

function TopBar() {
    const [aviaries, setAviary] = React.useState([
        {id: '1', selected: true},
        {id: '2', selected: false},
        {id: '3', selected: false}
    ])

    function onClickAviary(id) {
        const id_ = +/\d+/.exec(id.currentTarget.innerText)
        console.log(id_);
        setAviary(aviaries.map(aviary => {
            aviary.selected = id_ == aviary.id;
            return aviary;
        }));
    }

    return (
        <div className='top-bar-container'>
            <div className='top-bar-common'>
                <section className='top-bar-common'>
                    {aviaries.map((aviary) => {
                        if (aviary.selected) {
                            return (
                                <div key={aviary.id}
                                     onClick={onClickAviary}
                                     className='top-bar-labels top-bar-labels-selected'>Вольер {aviary.id}</div>
                            )
                        } else {
                            return (
                                <div key={aviary.id}
                                     onClick={onClickAviary}
                                     className={'top-bar-labels'}>Вольер {aviary.id}</div>
                            )
                        }
                    })}
                    {aviaries.length < 9 ? <AddAviary aviaries={aviaries} setAviary={setAviary}/> : <div/>}
                </section>
                <div className='top-bar-common-right'>
                    <svg className='bell'>
                        <path
                            d="M20.625 16.9688C20.9062 17.2812 21.0469 17.625 21.0469 18C21.0469 18.4062 20.9062 18.7656 20.625 19.0781C20.3438 19.3594 19.9844 19.5 19.5469 19.5H1.54688C1.26562 19.5 1 19.4375 0.75 19.3125C0.53125 19.1562 0.359375 18.9688 0.234375 18.75C0.109375 18.5 0.046875 18.25 0.046875 18C0.046875 17.625 0.1875 17.2812 0.46875 16.9688C0.5 16.9375 0.546875 16.875 0.609375 16.7812C1.07812 16.3125 1.4375 15.8906 1.6875 15.5156C1.96875 15.1406 2.26562 14.4375 2.57812 13.4062C2.89062 12.3438 3.04688 11.125 3.04688 9.75C3.04688 7.9375 3.60938 6.35938 4.73438 5.01562C5.85938 3.67187 7.29688 2.82812 9.04688 2.48438V1.5C9.04688 1.09375 9.1875 0.75 9.46875 0.46875C9.78125 0.15625 10.1406 0 10.5469 0C10.9531 0 11.2969 0.15625 11.5781 0.46875C11.8906 0.75 12.0469 1.09375 12.0469 1.5V2.48438C13.2031 2.70313 14.2344 3.15625 15.1406 3.84375C16.0469 4.53125 16.75 5.39062 17.25 6.42188C17.7812 7.45312 18.0469 8.5625 18.0469 9.75C18.0469 11.125 18.2031 12.3438 18.5156 13.4062C18.8281 14.4375 19.1094 15.1406 19.3594 15.5156C19.6406 15.8906 20.0156 16.3125 20.4844 16.7812C20.5469 16.875 20.5938 16.9375 20.625 16.9688ZM3.23438 17.25H17.8594C16.4844 15.4062 15.7969 12.9219 15.7969 9.79688C15.7969 9.76562 15.7969 9.75 15.7969 9.75C15.7969 8.3125 15.2812 7.07812 14.25 6.04688C13.2188 5.01562 11.9844 4.5 10.5469 4.5C9.10938 4.5 7.875 5.01562 6.84375 6.04688C5.8125 7.07812 5.29688 8.3125 5.29688 9.75C5.29688 9.75 5.29688 9.76562 5.29688 9.79688C5.29688 12.9219 4.60938 15.4062 3.23438 17.25ZM12.6562 23.1094C12.0625 23.7031 11.3594 24 10.5469 24C9.73438 24 9.03125 23.7031 8.4375 23.1094C7.84375 22.5469 7.54688 21.8438 7.54688 21H13.5469C13.5469 21.8438 13.25 22.5469 12.6562 23.1094Z"
                            fill="#567354"/>
                    </svg>
                    <div className='avatar'/>
                    <div className='common-text email '>hello@giraffe.com</div>
                </div>
            </div>
            <div className='separator'>
                <div className='separator-selected'/>
            </div>
        </div>
    )
}

export default TopBar
