import React from 'react';
import TopBar from "../topBar/TopBar";
import AviaryInfoCard from "../aviaryInfoCard/AviaryInfoCard";
import GiraffeList from "../giraffeList/GiraffeList";
import UpdateCard from "../updatesCard/UpdatesCard";
import './MainContent.css'

export default function MainContent() {
    let [widget, setWidgets] = React.useState({update: true, aviary: true})

    function closeUpdateCard() {
        setWidgets({update: false, aviary: widget.aviary})
    }

    function closeAviaryCard() {
        setWidgets({update: widget.update, aviary: false})

    }

    function openUpdateCard() {
        setWidgets({update: true, aviary: widget.aviary})
    }

    return (
        <div className='content-background'>
            <TopBar/>
            <GiraffeList/>
            <div className='widgets-background'>
                {widget.update ? <UpdateCard close={closeUpdateCard}/> : <div className='space-update'/>}
                {widget.aviary ? <AviaryInfoCard close={closeAviaryCard} info={openUpdateCard}/> : <div/>}
            </div>
        </div>
    );
}
