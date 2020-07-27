import React from 'react';
import TopBar from "../topBar/TopBar";
import AviaryInfoCard from "../aviaryInfoCard/AviaryInfoCard";
import GiraffeList from "../giraffeList/GiraffeList";
import UpdateCard from "../updatesCard/UpdatesCard";
import './MainContent.css'
import axios from "axios";
import {storeForAviary} from "../redux/store";


export default function MainContent() {
    let [giraffes, setGiraffe] = React.useState([])
    let [widget, setWidgets] = React.useState({update: true, aviary: true})
    const [_progressBarValue, setProgressBarValue] = React.useState([{completed: 20}])


    React.useEffect(() => {
        findGiraffes().then(
        )
    }, [])

    const findGiraffes = async () => {
        const res = await axios.get('/api/giraffes')
        setGiraffe(res.data.reverse())
    }

    function closeUpdateCard() {
        setWidgets({update: false, aviary: widget.aviary})
    }

    function closeAviaryCard() {
        setWidgets({update: widget.update, aviary: false})
    }

    function openUpdateCard() {
        setWidgets({update: true, aviary: widget.aviary})
    }

    function progressValue() {
        let count = 0
        for (let i = 0 ; i <giraffes.length ; i++){
            if (giraffes[i].aviary === storeForAviary.getState()){
                count++
            }
        }
        setProgressBarValue(count/10*100)
        return count
    }

    return (
        <div className='content-background'>
            <TopBar/>
            <GiraffeList giraffes={giraffes} setGiraffe={setGiraffe}/>
            <div className='widgets-background'>
                {widget.update ? <UpdateCard close={closeUpdateCard}/> : <div className='space-update'/>}
                {widget.aviary ? <AviaryInfoCard progressBarValue={_progressBarValue} close={closeAviaryCard} info={openUpdateCard}/> : <div/>}
            </div>
        </div>
    );
}
