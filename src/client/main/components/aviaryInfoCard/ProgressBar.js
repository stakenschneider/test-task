import React from 'react'

const ProgressBar = (props) => {
    const {completed} = props;

    const style = {
        containerStyles: {
            width: '323px',
            height: '31px',
            backgroundColor: "#435F40",
            borderRadius: '35px',

        },
        fillerStyles: {
            margin: '5px',
            height: '70%',
            width: `${completed}%`,
            backgroundColor: '#F3DBC7',
            borderRadius: 'inherit',
            textAlign: 'right'
        }
    }

    return (
        <div style={style.containerStyles}>
            <div style={style.fillerStyles}>
            </div>
        </div>
    );
};

export default ProgressBar;