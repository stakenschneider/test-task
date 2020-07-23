import React from 'react';
import TopBar from "../topBar/TopBar";
import AviaryInfoCard from "../aviaryInfoCard/AviaryInfoCard";
import GiraffeList from "../giraffeList/GiraffeList";
import '../styles.css'
import UpdateCard from "../updatesCard/UpdatesCard";

export default function MainContent() {

    return (
        <div className='content-background'>
            <TopBar/>
            <GiraffeList/>
            <UpdateCard/>
            <AviaryInfoCard/>
        </div>
    );
}