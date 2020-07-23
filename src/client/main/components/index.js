import React from 'react';
import {hot} from 'react-hot-loader/root';
import './sideMenu/SideMenu.css';
import SideMenu from "./sideMenu/SideMenu";
import MainContent from "./mainContent/MainContent";

function App() {
    return (
        <div>
            <div className='main-background'>
                <div className='flex-row'>
                    <SideMenu/>
                    <MainContent/>
                </div>
            </div>
        </div>
    )
}

export default hot(App)
