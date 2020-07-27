import React from 'react';
import './styles.css'
import {storeForAviary} from "./redux/store";
import {SET_NUMBER_OF_AVIARIES} from "./redux/types";

const style = {
    addAviaryButton: {
        background: '#D9D9D9',
        borderRadius: '52px',
        cursor: 'pointer',
        height: '20px',
        weight: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
    },
    svg: {
        width: '10px',
        height: '10px'
    }
}

function AddAviary({aviaries, setAviary}) {
    function submitHandler(event) {
        event.preventDefault()
        aviaries.map((aviary) =>
            aviary.selected = false
        )

        setAviary(aviaries.concat([
            {
                id: (aviaries.length + 1),
                selected: true
            }
        ]));

        storeForAviary.dispatch({
            type: SET_NUMBER_OF_AVIARIES,
            id: aviaries.length + 1
        })
    }

    return (
        <div style={style.addAviaryButton} onClick={submitHandler}>
            <svg style={style.svg}>
                <path
                    d="M8.9375 3.84375C9.1237 3.84375 9.28125 3.91536 9.41016 4.05859C9.55339 4.1875 9.625 4.34505 9.625 4.53125V5.21875C9.625 5.40495 9.55339 5.56966 9.41016 5.71289C9.28125 5.8418 9.1237 5.90625 8.9375 5.90625H5.84375V9C5.84375 9.1862 5.77214 9.34375 5.62891 9.47266C5.5 9.61589 5.34245 9.6875 5.15625 9.6875H4.46875C4.28255 9.6875 4.11784 9.61589 3.97461 9.47266C3.8457 9.34375 3.78125 9.1862 3.78125 9V5.90625H0.6875C0.501302 5.90625 0.336589 5.8418 0.193359 5.71289C0.0644531 5.56966 0 5.40495 0 5.21875V4.53125C0 4.34505 0.0644531 4.1875 0.193359 4.05859C0.336589 3.91536 0.501302 3.84375 0.6875 3.84375H3.78125V0.75C3.78125 0.563802 3.8457 0.40625 3.97461 0.277344C4.11784 0.134115 4.28255 0.0625 4.46875 0.0625H5.15625C5.34245 0.0625 5.5 0.134115 5.62891 0.277344C5.77214 0.40625 5.84375 0.563802 5.84375 0.75V3.84375H8.9375Z"
                    fill="white"/>
            </svg>
        </div>)
}

export default AddAviary