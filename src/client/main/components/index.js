import React from 'react';
import {hot} from 'react-hot-loader/root';
import './sideMenu/SideMenu.css';
import SideMenu from "./sideMenu/SideMenu";
import MainContent from "./mainContent/MainContent";

function App() {
    const [button, setButton] = React.useState(2)

    function selectedSideButton(id) {
        setButton(id)
    }

    return (
        <div>
            <div className='main-background'>
                <div className='flex-row'>
                    <SideMenu selectedSideButton={selectedSideButton}/>
                    {button === 2 ? <MainContent/> : <div/>}
                </div>
            </div>
        </div>
    )
}

export default hot(App)
