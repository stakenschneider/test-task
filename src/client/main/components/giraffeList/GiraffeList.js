import CardContentItem from "../CardContentItem";
import React from "react";
import {GiraffeModel} from "../../models/GiraffeModel";

export default function GiraffeList() {
    let [giraffes, setGiraffe] = React.useState([
        new GiraffeModel(1,'Мотильда', 800, 4, 'ж', 'Стандарт', 'Растительная', 'Кокетка', '1.img'),
        new GiraffeModel(2,'Гога', 900, 4.9, 'м', 'Жирафовый', 'Шашлычная', 'Вспылчивый', '1.img'),
        new GiraffeModel(3,'Шнур', 800, 5.7, 'ж', 'Нездоровый', 'Жвачная', 'Хулиган', '1.img'),
        new GiraffeModel(4,'Леонид', 1000, 6, 'ж', 'Леонидовый', 'Ест детей', 'Нарцисс', '1.img'),
        new GiraffeModel(5,'Мотильда', 600, 500, 'ж', 'Стандарт', 'Растительная', 'Кокетка', '1.img'),
        new GiraffeModel(6,'Гога', 600, 500, 'ж', 'Жирафовый', 'Жвачная', 'Нарцисс', '1.img'),
        new GiraffeModel(7,'Мотильда', 600, 500, 'ж', 'Нездоровый', 'Шашлычная', 'Хулиган', '1.img'),
        new GiraffeModel(8,'Мотильда', 600, 500, 'ж', 'Стандарт', 'Ест детей', 'Вспылчивый', '1.img'),
        new GiraffeModel(9,'Мотильда', 600, 500, 'ж', 'Стандарт', 'Растительная', 'Кокетка', '1.img'),
        new GiraffeModel(10,'Гога', 600, 500, 'ж', 'Жирафовый', 'Жвачная', 'Нарцисс', '1.img'),
        new GiraffeModel(11,'Мотильда', 600, 500, 'ж', 'Нездоровый', 'Шашлычная', 'Хулиган', '1.img'),
        new GiraffeModel(12,'Мотильда', 600, 500, 'ж', 'Стандарт', 'Ест детей', 'Вспылчивый', '1.img')
    ])

    // function addGiraffeHandler(){
    //     store.dispatch({ type: ADD_GIRAFFE })
    //
    //     store.subscribe(()=>{
    //         const state = store.getState()
    //         console.log(giraffes)
    //         // setGiraffe(giraffes.concat([
    //         //     new GiraffeModel('Masha', 1, 1, 'ж', 'Стандарт', 'Растительная', 'Кокетка', '1.img'),
    //         // ]))
    //
    //     })
    // }

    return (<div>
            <div className='giraffe-label-container'>
                <div className='common-text giraffes-label'>Жирафы</div>
                <div className='add-giraffe'>
                    <svg className='add-giraffe-svg'>
                        <path
                            d="M14.625 6.5625C14.9297 6.5625 15.1875 6.67969 15.3984 6.91406C15.6328 7.125 15.75 7.38281 15.75 7.6875V8.8125C15.75 9.11719 15.6328 9.38672 15.3984 9.62109C15.1875 9.83203 14.9297 9.9375 14.625 9.9375H9.5625V15C9.5625 15.3047 9.44531 15.5625 9.21094 15.7734C9 16.0078 8.74219 16.125 8.4375 16.125H7.3125C7.00781 16.125 6.73828 16.0078 6.50391 15.7734C6.29297 15.5625 6.1875 15.3047 6.1875 15V9.9375H1.125C0.820312 9.9375 0.550781 9.83203 0.316406 9.62109C0.105469 9.38672 0 9.11719 0 8.8125V7.6875C0 7.38281 0.105469 7.125 0.316406 6.91406C0.550781 6.67969 0.820312 6.5625 1.125 6.5625H6.1875V1.5C6.1875 1.19531 6.29297 0.9375 6.50391 0.726562C6.73828 0.492187 7.00781 0.375 7.3125 0.375H8.4375C8.74219 0.375 9 0.492187 9.21094 0.726562C9.44531 0.9375 9.5625 1.19531 9.5625 1.5V6.5625H14.625Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
            <section className='parent'>
                {giraffes.map((giraffe) => {
                    return (
                        <div className='giraffe-card' key={giraffe.id}>
                            <CardContentItem giraffeInfo={giraffe}/>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}