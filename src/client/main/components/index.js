import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles.css'
import './sideMenu/SideMenu.css';
// import {GiraffeModel} from "../models/GiraffeModel";
import CardContentItem from "./CardContentItem";


function App() {

    return (
        <div>
            <div className='main-background'>
                <div className='content-background'>
                    <section className='parent'>
                        {giraffes.map((giraffe) =>
                        {return (
                            <div className='giraffe-card'>
                                <CardContentItem giraffeInfo={giraffe}/>
                            </div>
                        )
                        })}
                    </section>
                </div>
                <div className='aviary-background'/>
                {/*<div className='renewal-background'/>*/}
            </div>

        </div>
    )
}

export default hot(App)