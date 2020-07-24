import React from 'react'
import './CardGoraffeContent.css'
import {GiraffeModel} from "../../models/GiraffeModel";
import DropdownMenu from "../dropdownMenu/DropdownMenu";


function useInputValue(defaultValue = '') {
    const [value, setValue] = React.useState(defaultValue)
    return {
        bind: {
            name,
            onChange: event => setValue(event.target.value)
        },
        value: () => value
    }
}

function CardContentItem({giraffeInfo, editGiraffe}) {
    let [fields, setFields] = React.useState(new GiraffeModel())
    let buttonChange = false
    const input = useInputValue('')
    const [buttonGreen, setButtonColor] = React.useState(false)


    function openSettings() {
//    TODO
    }

    function handleChange(field, e) {
        fields[field] = e.target.value;
        setFields(fields)

        if (handleValidation()) {
            setButtonColor(true)
        }
    }

    function handleValidation() {
        let formIsValid = true;
        if (!fields["name"] || !fields['height'] || !fields['weight'] || !fields['sex'] ||
            !fields['diet'] || !fields['temper'] || !fields['color']) {
            formIsValid = false;
        }
        return formIsValid;
    }

    function saveGiraffe(event) {
        event.preventDefault()

        if (handleValidation()) {
            editGiraffe(fields)
        } else {
            alert("All fields are required")
        }

    }

    return (
        <form className='card'>
            <div className="dropdown">
                <svg onClick={openSettings} className='settings-svg'>
                    <path
                        d="M10.793 1.45703C11.2852 1.94922 11.5312 2.54688 11.5312 3.25C11.5312 3.95312 11.2852 4.55078 10.793 5.04297C10.3008 5.53516 9.70312 5.78125 9 5.78125C8.29688 5.78125 7.69922 5.53516 7.20703 5.04297C6.71484 4.55078 6.46875 3.95312 6.46875 3.25C6.46875 2.54688 6.71484 1.94922 7.20703 1.45703C7.69922 0.964844 8.29688 0.71875 9 0.71875C9.70312 0.71875 10.3008 0.964844 10.793 1.45703ZM13.3945 1.45703C13.8867 0.964844 14.4844 0.71875 15.1875 0.71875C15.8906 0.71875 16.4883 0.964844 16.9805 1.45703C17.4727 1.94922 17.7188 2.54688 17.7188 3.25C17.7188 3.95312 17.4727 4.55078 16.9805 5.04297C16.4883 5.53516 15.8906 5.78125 15.1875 5.78125C14.4844 5.78125 13.8867 5.53516 13.3945 5.04297C12.9023 4.55078 12.6562 3.95312 12.6562 3.25C12.6562 2.54688 12.9023 1.94922 13.3945 1.45703ZM1.01953 1.45703C1.51172 0.964844 2.10938 0.71875 2.8125 0.71875C3.51562 0.71875 4.11328 0.964844 4.60547 1.45703C5.09766 1.94922 5.34375 2.54688 5.34375 3.25C5.34375 3.95312 5.09766 4.55078 4.60547 5.04297C4.11328 5.53516 3.51562 5.78125 2.8125 5.78125C2.10938 5.78125 1.51172 5.53516 1.01953 5.04297C0.527344 4.55078 0.28125 3.95312 0.28125 3.25C0.28125 2.54688 0.527344 1.94922 1.01953 1.45703Z"
                        fill="#435F40"/>
                </svg>
                <div className="dropdown-content">
                    <DropdownMenu/>
                </div>
            </div>
            
            <div className='container'>
                <svg className='giraffe-image'>
                    <rect width="145" height="145" rx="72.5" fill="white"/>
                    <path
                        d="M97 61.5V88.5C97 89.75 96.5625 90.8125 95.6875 91.6875C94.8125 92.5625 93.75 93 92.5 93H53.5C52.25 93 51.1875 92.5625 50.3125 91.6875C49.4375 90.8125 49 89.75 49 88.5V61.5C49 60.25 49.4375 59.1875 50.3125 58.3125C51.1875 57.4375 52.25 57 53.5 57H61.75L62.875 53.9062C63.125 53.3438 63.4375 52.8438 63.8125 52.4062C64.25 51.9688 64.75 51.625 65.3125 51.375C65.875 51.125 66.4688 51 67.0938 51H78.9062C79.8438 51 80.6875 51.2812 81.4375 51.8438C82.1875 52.3438 82.75 53.0312 83.125 53.9062L84.25 57H92.5C93.75 57 94.8125 57.4375 95.6875 58.3125C96.5625 59.1875 97 60.25 97 61.5ZM80.9688 82.9688C83.1562 80.7812 84.25 78.125 84.25 75C84.25 71.875 83.1562 69.2188 80.9688 67.0312C78.7812 64.8438 76.125 63.75 73 63.75C69.875 63.75 67.2188 64.8438 65.0312 67.0312C62.8438 69.2188 61.75 71.875 61.75 75C61.75 78.125 62.8438 80.7812 65.0312 82.9688C67.2188 85.1562 69.875 86.25 73 86.25C76.125 86.25 78.7812 85.1562 80.9688 82.9688ZM78.8125 69.1875C80.4375 70.8125 81.25 72.75 81.25 75C81.25 77.25 80.4375 79.1875 78.8125 80.8125C77.1875 82.4375 75.25 83.25 73 83.25C70.75 83.25 68.8125 82.4375 67.1875 80.8125C65.5625 79.1875 64.75 77.25 64.75 75C64.75 72.75 65.5625 70.8125 67.1875 69.1875C68.8125 67.5625 70.75 66.75 73 66.75C75.25 66.75 77.1875 67.5625 78.8125 69.1875Z"
                        fill="#D9D9D9"/>
                </svg>
                {giraffeInfo.isNew ?
                    <input onChange={handleChange.bind(this, "name")} placeholder='Имя' className='input-name'/> :
                    <input placeholder={giraffeInfo.name} className='input-name' readOnly/>}
                <svg className='svg-top-labels'>
                    <path
                        d="M27.9766 2.125C28.3672 2.125 28.5625 2.32031 28.5625 2.71094V6.56836C28.5625 6.73112 28.4974 6.8776 28.3672 7.00781C28.2695 7.10547 28.1393 7.1543 27.9766 7.1543C27.8138 7.1543 27.6836 7.10547 27.5859 7.00781L26.7559 6.17773L24.3633 8.52148C25.0794 9.66081 25.4375 10.9141 25.4375 12.2812C25.4375 14.2344 24.7539 15.8945 23.3867 17.2617C22.0195 18.6289 20.3594 19.3125 18.4062 19.3125C16.7786 19.3125 15.3301 18.8079 14.0605 17.7988C14.7441 16.985 15.265 16.0573 15.623 15.0156C16.3717 15.7969 17.2995 16.1875 18.4062 16.1875C19.4805 16.1875 20.3919 15.8132 21.1406 15.0645C21.9219 14.2832 22.3125 13.3555 22.3125 12.2812C22.3125 11.207 21.9219 10.2956 21.1406 9.54688C20.3919 8.76562 19.4805 8.375 18.4062 8.375C17.2995 8.375 16.3717 8.76562 15.623 9.54688C15.265 8.53776 14.7441 7.61003 14.0605 6.76367C15.3301 5.75456 16.7786 5.25 18.4062 5.25C19.7734 5.25 21.0267 5.60807 22.166 6.32422L24.5098 3.93164L23.6797 3.10156C23.5169 2.9388 23.4844 2.74349 23.582 2.51562C23.6797 2.25521 23.8587 2.125 24.1191 2.125H27.9766ZM2.48828 7.30078C3.85547 5.93359 5.51562 5.25 7.46875 5.25C9.42188 5.25 11.082 5.93359 12.4492 7.30078C13.8164 8.66797 14.5 10.3281 14.5 12.2812C14.5 13.9414 13.9792 15.4062 12.9375 16.6758C11.9284 17.9453 10.6263 18.7591 9.03125 19.1172V21.6562H10.7891C11.1797 21.6562 11.375 21.8516 11.375 22.2422V24.1953C11.375 24.5859 11.1797 24.7812 10.7891 24.7812H9.03125V26.5391C9.03125 26.9297 8.83594 27.125 8.44531 27.125H6.49219C6.10156 27.125 5.90625 26.9297 5.90625 26.5391V24.7812H4.14844C3.75781 24.7812 3.5625 24.5859 3.5625 24.1953V22.2422C3.5625 21.8516 3.75781 21.6562 4.14844 21.6562H5.90625V19.1172C4.3112 18.7591 2.99284 17.9453 1.95117 16.6758C0.942057 15.4062 0.4375 13.9414 0.4375 12.2812C0.4375 10.3281 1.12109 8.66797 2.48828 7.30078ZM4.68555 15.0645C5.4668 15.8132 6.39453 16.1875 7.46875 16.1875C8.54297 16.1875 9.45443 15.8132 10.2031 15.0645C10.9844 14.2832 11.375 13.3555 11.375 12.2812C11.375 11.207 10.9844 10.2956 10.2031 9.54688C9.45443 8.76562 8.54297 8.375 7.46875 8.375C6.39453 8.375 5.4668 8.76562 4.68555 9.54688C3.93685 10.2956 3.5625 11.207 3.5625 12.2812C3.5625 13.3555 3.93685 14.2832 4.68555 15.0645Z"
                        fill="#435F40"/>
                    <path
                        d="M77.0469 17.75C77.0469 18.7812 76.4531 19.6719 75.2656 20.4219C74.1094 21.1406 72.7031 21.5 71.0469 21.5C69.3906 21.5 67.9688 21.1406 66.7812 20.4219C65.625 19.6719 65.0469 18.7812 65.0469 17.75C65.0469 17.75 65.0469 17.7344 65.0469 17.7031C65.0469 17.4531 65.125 17.1562 65.2812 16.8125C65.4375 16.4375 65.9844 15.3125 66.9219 13.4375C67.7344 11.8125 68.4375 10.4062 69.0312 9.21875C69.4375 8.40625 70.1094 8 71.0469 8C71.9844 8 72.6562 8.40625 73.0625 9.21875C73.6875 10.4688 74.4062 11.9219 75.2188 13.5781C76.125 15.3594 76.6562 16.4219 76.8125 16.7656C76.9688 17.1094 77.0469 17.4219 77.0469 17.7031C77.0469 17.7344 77.0469 17.75 77.0469 17.75ZM71.0469 10.25L67.6719 17H74.4219L71.0469 10.25ZM95.0469 17.75C95.0469 18.4375 94.7812 19.0781 94.25 19.6719C93.7188 20.2344 92.9844 20.6875 92.0469 21.0312C91.1406 21.3438 90.1406 21.5 89.0469 21.5C87.3906 21.5 85.9688 21.1406 84.7812 20.4219C83.625 19.6719 83.0469 18.7812 83.0469 17.75C83.0469 17.75 83.0469 17.7344 83.0469 17.7031C83.0469 17.4531 83.125 17.1562 83.2812 16.8125C83.4375 16.4375 83.9844 15.3125 84.9219 13.4375C85.0781 13.125 85.1875 12.8906 85.25 12.7344C85.3438 12.5781 85.4688 12.3438 85.625 12.0312C85.8125 11.6875 85.9688 11.3906 86.0938 11.1406C86.2188 10.8906 86.3594 10.5938 86.5156 10.25C86.7031 9.90625 86.875 9.5625 87.0312 9.21875C87.4375 8.40625 88.1094 8 89.0469 8C89.9844 8 90.6562 8.40625 91.0625 9.21875C91.6875 10.4688 92.4062 11.9219 93.2188 13.5781C94.125 15.3594 94.6562 16.4219 94.8125 16.7656C94.9688 17.1094 95.0469 17.4219 95.0469 17.7031C95.0469 17.7344 95.0469 17.75 95.0469 17.75ZM85.6719 17H92.4219L89.0469 10.25L85.6719 17ZM89.7969 23C90.0156 23 90.1875 23.0625 90.3125 23.1875C90.4688 23.3438 90.5469 23.5312 90.5469 23.75V25.25C90.5469 25.4688 90.4688 25.6406 90.3125 25.7656C90.1875 25.9219 90.0156 26 89.7969 26H70.2969C70.0781 26 69.8906 25.9219 69.7344 25.7656C69.6094 25.6406 69.5469 25.4688 69.5469 25.25V23.75C69.5469 23.5312 69.6094 23.3438 69.7344 23.1875C69.8906 23.0625 70.0781 23 70.2969 23H78.5469V9.17188C77.3594 8.67188 76.6406 7.78125 76.3906 6.5H70.2969C70.0781 6.5 69.8906 6.4375 69.7344 6.3125C69.6094 6.15625 69.5469 5.96875 69.5469 5.75V4.25C69.5469 4.03125 69.6094 3.85938 69.7344 3.73438C69.8906 3.57813 70.0781 3.5 70.2969 3.5H77.0469C77.8281 2.5 78.8281 2 80.0469 2C81.2656 2 82.2656 2.5 83.0469 3.5H89.7969C90.0156 3.5 90.1875 3.57813 90.3125 3.73438C90.4688 3.85938 90.5469 4.03125 90.5469 4.25V5.75C90.5469 5.96875 90.4688 6.15625 90.3125 6.3125C90.1875 6.4375 90.0156 6.5 89.7969 6.5H83.7031C83.4531 7.78125 82.7344 8.67188 81.5469 9.17188V23H89.7969Z"
                        fill="#435F40"/>
                    <path
                        d="M145.875 21.5H150V24.5C150 24.9062 149.844 25.25 149.531 25.5312C149.25 25.8438 148.906 26 148.5 26H139.5C139.094 26 138.734 25.8438 138.422 25.5312C138.141 25.25 138 24.9062 138 24.5V3.5C138 3.09375 138.141 2.75 138.422 2.46875C138.734 2.15625 139.094 2 139.5 2H148.5C148.906 2 149.25 2.15625 149.531 2.46875C149.844 2.75 150 3.09375 150 3.5V6.5H145.875C145.625 6.5 145.5 6.625 145.5 6.875V7.625C145.5 7.875 145.625 8 145.875 8H150V11H145.875C145.625 11 145.5 11.125 145.5 11.375V12.125C145.5 12.375 145.625 12.5 145.875 12.5H150V15.5H145.875C145.625 15.5 145.5 15.625 145.5 15.875V16.625C145.5 16.875 145.625 17 145.875 17H150V20H145.875C145.625 20 145.5 20.125 145.5 20.375V21.125C145.5 21.375 145.625 21.5 145.875 21.5Z"
                        fill="#435F40"/>
                </svg>
                <div className='specifications-bar'>
                    {giraffeInfo.isNew ?
                        <input onChange={handleChange.bind(this, "sex")} placeholder='-'
                               className='specifications-bar-content'/> :
                        <input placeholder={giraffeInfo.sex.toUpperCase()} className='specifications-bar-content'
                               readOnly/>}
                    {giraffeInfo.isNew ?
                        <input onChange={handleChange.bind(this, "weight")} placeholder='-'
                               className='specifications-bar-content'/> :
                        <input placeholder={giraffeInfo.weight} className='specifications-bar-content'
                               readOnly/>}
                    {giraffeInfo.isNew ?
                        <input onChange={handleChange.bind(this, "height")} placeholder='-'
                               className='specifications-bar-content'/> :
                        <input placeholder={giraffeInfo.height} className='specifications-bar-content' readOnly/>}
                </div>
                <div className='pair'>
                    <div className='textLabel'><b>Цвет: </b></div>
                    {giraffeInfo.isNew ?
                        <input onChange={handleChange.bind(this, "color")} className='input-pair-labels'/> :
                        <input placeholder={giraffeInfo.color} className='input-pair-labels' readOnly/>}
                </div>
                <div className='pair'>
                    <div className='textLabel'><b>Диета:</b></div>
                    {giraffeInfo.isNew ?
                        <input onChange={handleChange.bind(this, "diet")} className='input-pair-labels'/> :
                        <input placeholder={giraffeInfo.diet} className='input-pair-labels' readOnly/>}

                </div>
                <div className='pair'>
                    <div className='textLabel'><b>Характер:</b></div>
                    {giraffeInfo.isNew ?
                        <input onChange={handleChange.bind(this, "temper")} className='input-pair-labels'/> :
                        <input placeholder={giraffeInfo.temper} className='input-pair-labels' readOnly/>}
                </div>
                {giraffeInfo.isNew ?
                    buttonGreen ? <div onClick={saveGiraffe} className='button-save button-save-green'>
                            <div>Сохранить</div>
                        </div>
                        : <div onClick={saveGiraffe} className='button-save'>
                            <div>Сохранить</div>
                        </div> : <div style={{marginBottom: '19px'}}/>}
            </div>
        </form>
    )
}

export default CardContentItem
