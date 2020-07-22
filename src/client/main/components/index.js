import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles.css'
import './sideMenu/SideMenu.css';
import CardContentItem from "./CardContentItem";
import {GiraffeModel} from "../models/GiraffeModel";
import TopBar from "./topBar/TopBar";
import AviaryInfoCard from "./aviaryInfoCard/AviaryInfoCard";
import SideMenu from "./sideMenu/SideMenu";

function App() {
    const [aviaries, setAviary] = React.useState([
        {id:'1', selected: true},
        {id:'2', selected: false},
        {id:'3', selected: false}
    ])

    const [giraffes, setGiraffe] = React.useState([
        new GiraffeModel('Мотильда', 800, 4, 'ж', 'Стандарт', 'Растительная',  'Кокетка', '1.img'),
        new GiraffeModel('Гога', 900, 4.9, 'м', 'Жирафовый', 'Шашлычная',  'Вспылчивый', '1.img'),
        new GiraffeModel('Шнур', 800, 5.7, 'ж', 'Нездоровый', 'Жвачная',  'Хулиган', '1.img'),
        new GiraffeModel('Леонид', 1000, 6, 'ж', 'Леонидовый', 'Ест детей',  'Нарцисс', '1.img'),
        new GiraffeModel('Мотильда', 600, 500, 'ж', 'Стандарт', 'Растительная',  'Кокетка', '1.img'),
        new GiraffeModel('Гога', 600, 500, 'ж', 'Жирафовый', 'Жвачная',  'Нарцисс', '1.img'),
        new GiraffeModel('Мотильда', 600, 500, 'ж', 'Нездоровый', 'Шашлычная',  'Хулиган', '1.img'),
        new GiraffeModel('Мотильда', 600, 500, 'ж', 'Стандарт', 'Ест детей',  'Вспылчивый', '1.img'),
        new GiraffeModel('Мотильда', 600, 500, 'ж', 'Стандарт', 'Растительная',  'Кокетка', '1.img'),
        new GiraffeModel('Гога', 600, 500, 'ж', 'Жирафовый', 'Жвачная',  'Нарцисс', '1.img'),
        new GiraffeModel('Мотильда', 600, 500, 'ж', 'Нездоровый', 'Шашлычная',  'Хулиган', '1.img'),
        new GiraffeModel('Мотильда', 600, 500, 'ж', 'Стандарт', 'Ест детей',  'Вспылчивый', '1.img')
    ])

    return (
        <div>
            <div className='main-background'>
                <div className='flex-row'>
                <SideMenu/>
                <div className='content-background'>
                    <TopBar aviaries={aviaries} setAviary={setAviary}/>
                    <section className='parent'>
                        {giraffes.map((giraffe) =>
                        {return (
                            <div className='giraffe-card'>
                                <CardContentItem giraffeInfo={giraffe}/>
                            </div>
                        )
                        })}
                    </section>
                    <AviaryInfoCard/>
                </div>
                </div>
                {/*<div className='renewal-background'/>*/}
            </div>
        </div>
    )
}

export default hot(App)
