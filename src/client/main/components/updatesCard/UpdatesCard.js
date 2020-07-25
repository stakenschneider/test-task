import React from 'react'
import './UpdatesCard.css'

function UpdateCard({close}) {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};

    function parse(date) {
        return date.toLocaleString("ru", options).split('г.')[0]
    }

    const [updates, setUpdates] = React.useState([
        {
            id: '1',
            date: parse(new Date(3600 * 24 * 1000)),
            action: 'Новый жираф',
            giraffe: 'Матильда',
            status: 'Ожидается'
        },
        {id: '2', date: parse(new Date()), action: 'Редактировать', giraffe: 'Пряник', status: 'Выполнено'},
        {id: '3', date: parse(new Date()), action: 'Удалить', giraffe: 'Лучик', status: 'Не подтвержден'},
        {id: '4', date: parse(new Date()), action: 'Перевод', giraffe: 'Егор', status: 'Отклонено'},
        {id: '5', date: parse(new Date()), action: 'Редактировать', giraffe: 'Пряник', status: 'Ожидается'},
        {id: '6', date: parse(new Date()), action: 'Удалить', giraffe: 'Лучик', status: 'Не подтвержден'},
        {id: '7', date: parse(new Date()), action: 'Перевод', giraffe: 'Егор', status: 'Отклонено'},
        {id: '8', date: parse(new Date()), action: 'Новый жираф', giraffe: 'Шнур', status: 'Выполнено'}
    ])

    return (
        <div className='background'>
            <div className='updates-top-bar'>
                <div className='update-label'>Обновления</div>
                <svg onClick={close} className='close-button-svg' width="11" height="11" viewBox="0 0 11 11" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.3405 8.59534C10.508 8.76291 10.5854 8.96915 10.5725 9.21406C10.5854 9.45897 10.508 9.66521 10.3405 9.83278L9.72174 10.4515C9.55417 10.6191 9.34149 10.7028 9.08369 10.7028C8.85167 10.7028 8.65188 10.6191 8.48431 10.4515L5.70007 7.66726L2.91584 10.4515C2.74827 10.6191 2.54203 10.6964 2.29712 10.6835C2.05221 10.6964 1.84597 10.6191 1.6784 10.4515L1.05968 9.83278C0.892115 9.66521 0.80833 9.45252 0.80833 9.19472C0.80833 8.9627 0.892115 8.76291 1.05968 8.59534L3.84392 5.81111L1.05968 3.02687C0.892115 2.8593 0.801885 2.65306 0.788995 2.40816C0.801885 2.16325 0.892115 1.95701 1.05968 1.78944L1.6784 1.17072C1.84597 1.00315 2.04577 0.919364 2.27779 0.919364C2.53559 0.919364 2.74827 1.00315 2.91584 1.17072L5.70007 3.95495L8.48431 1.17072C8.65188 1.00315 8.85167 0.919364 9.08369 0.919364C9.34149 0.919364 9.55417 1.00315 9.72174 1.17072L10.3405 1.78944C10.508 1.95701 10.5854 2.16325 10.5725 2.40816C10.5854 2.65306 10.508 2.8593 10.3405 3.02687L7.55623 5.81111L10.3405 8.59534Z"
                        fill="#435F40"/>
                </svg>
            </div>
            <div className='update-selector'/>
            <div className='row-table top-labels'>
                <div className='top-table-labels table-labels-date'>Дата</div>
                <div className='top-table-labels table-labels-action'>Действие</div>
                <div className='top-table-labels table-labels-giraffe'>Жираф</div>
                <div style={{marginLeft: '20px'}} className='top-table-labels '>Статус</div>
            </div>
            <div className='content-scroll'>
                {updates.map((update) => {
                    return (<div>
                            <div className='table-selector'/>
                            <div className='row-hover'>
                                <div className='row-table'>
                                    <div className='table-labels table-labels-date'>{update.date}</div>
                                    <div className='table-labels table-labels-action'>{update.action}</div>
                                    <div className='table-labels table-labels-giraffe'>{update.giraffe}</div>
                                    {update.status === 'Выполнено' ?
                                        <div className='labels-mark complete'>
                                            <div className='table-labels table-labels-status'>{update.status}</div>
                                        </div> : update.status === 'Отклонено' ?
                                            <div className='labels-mark rejected'>
                                                <div className='table-labels table-labels-status'>{update.status}</div>
                                            </div>
                                            : update.status === 'Ожидается' ?
                                                <div className='labels-mark expected'>
                                                    <div
                                                        className='table-labels table-labels-status'>{update.status}</div>
                                                </div> :
                                                <div className='labels-mark not-confirm'>
                                                    <div
                                                        className='table-labels table-labels-status'>{update.status}</div>
                                                </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UpdateCard
