import React from 'react'
import './CardGiraffeContent.css'
import {GiraffeModel} from "../../models/GiraffeModel";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import axios from "axios";
import {storeForAviary} from "../redux/store";

function CardContentItem({giraffeInfo, saveGiraffe, deleteGiraffe, editGiraffe}) {
    let [fields, setFields] = React.useState(new GiraffeModel())
    const [buttonGreen, setButtonColor] = React.useState(false)
    const [files, setFiles] = React.useState()

    storeForAviary.subscribe(() => {
        storeForAviary.getState()
    })

    function handleChange(field, e) {
        fields[field] = e.target.value;
        setFields(fields)

        if (handleValidation()) {
            setButtonColor(true)
        }
    }

    function handleValidation() {
        let formIsValid = true;
        fields['aviary'] = storeForAviary.getState();
        setFields(fields)

        if (!fields["name"] || !fields['height'] || !fields['weight'] || !fields['sex'] ||
            !fields['diet'] || !fields['temper'] || !fields['color']) {
            formIsValid = false;
        }
        return formIsValid;
    }

    function _saveGiraffe(event) {
        event.preventDefault()

        if (fields['sex'] !== undefined && fields['sex'] !== 'm' && fields['sex'] !== 'M' && fields['sex'] !== 'w' && fields['sex'] !== 'W'
            && fields['sex'] !== 'м' && fields['sex'] !== 'М' && fields['sex'] !== 'Ж' && fields['sex'] !== 'Ж') {
            alert('Invalid input for field sex')
            return
        }

        if (fields['height'] !== undefined && /\D/.test(fields['height'])) {
            alert('Invalid input for field height')
            return
        }

        if (fields['weight'] !== undefined && /\D/.test(fields['weight'])) {
            alert('Invalid input for field weight')
            return
        }

        if (buttonGreen || giraffeInfo.isUpdated) {
            if (giraffeInfo.isUpdated) {
                fields['id'] = giraffeInfo._id;
                fields['isUpdated'] = true;
            } else {
                fields['isNew'] = true;
            }
            sendFiles().then(r => {
            })
            saveGiraffe(fields)
            setFields(fields)
        } else {
            alert("All fields are required")
        }
    }

    function _editGiraffe() {
        editGiraffe(giraffeInfo._id)
    }


    function _deleteGiraffe() {
        deleteGiraffe(giraffeInfo._id)
    }

    const state = giraffeInfo.isNew || giraffeInfo.isUpdated

    const handleFileChange = (event) => {
        if (event.target.files.length === 0) return
        setFiles(event.target.files)
    }
    const sendFiles = async (event) => {
        let formData = new FormData()
        if (files[0] !== undefined) {
            formData.append('file', files[0])
        }
        fields['image'] = files[0].name
        setFields(fields)

        const {data} = await axios.post('/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (data.success) {
            setFiles()
        }
    }


    return (
        <form className='card'>
            <div className="dropdown">
                <svg className='settings-svg'>
                    <path
                        d="M10.793 1.45703C11.2852 1.94922 11.5312 2.54688 11.5312 3.25C11.5312 3.95312 11.2852 4.55078 10.793 5.04297C10.3008 5.53516 9.70312 5.78125 9 5.78125C8.29688 5.78125 7.69922 5.53516 7.20703 5.04297C6.71484 4.55078 6.46875 3.95312 6.46875 3.25C6.46875 2.54688 6.71484 1.94922 7.20703 1.45703C7.69922 0.964844 8.29688 0.71875 9 0.71875C9.70312 0.71875 10.3008 0.964844 10.793 1.45703ZM13.3945 1.45703C13.8867 0.964844 14.4844 0.71875 15.1875 0.71875C15.8906 0.71875 16.4883 0.964844 16.9805 1.45703C17.4727 1.94922 17.7188 2.54688 17.7188 3.25C17.7188 3.95312 17.4727 4.55078 16.9805 5.04297C16.4883 5.53516 15.8906 5.78125 15.1875 5.78125C14.4844 5.78125 13.8867 5.53516 13.3945 5.04297C12.9023 4.55078 12.6562 3.95312 12.6562 3.25C12.6562 2.54688 12.9023 1.94922 13.3945 1.45703ZM1.01953 1.45703C1.51172 0.964844 2.10938 0.71875 2.8125 0.71875C3.51562 0.71875 4.11328 0.964844 4.60547 1.45703C5.09766 1.94922 5.34375 2.54688 5.34375 3.25C5.34375 3.95312 5.09766 4.55078 4.60547 5.04297C4.11328 5.53516 3.51562 5.78125 2.8125 5.78125C2.10938 5.78125 1.51172 5.53516 1.01953 5.04297C0.527344 4.55078 0.28125 3.95312 0.28125 3.25C0.28125 2.54688 0.527344 1.94922 1.01953 1.45703Z"
                        fill="#435F40"/>
                </svg>
                <div className="dropdown-content">
                    <DropdownMenu editGiraffe={_editGiraffe} deleteGiraffe={_deleteGiraffe}/>
                </div>
            </div>
            <div className='container'>
                {state ? <label htmlFor="file">
                        <svg className='giraffe-image'>
                            <rect width="145" height="145" rx="72.5" fill="white"/>
                            <path
                                d="M97 61.5V88.5C97 89.75 96.5625 90.8125 95.6875 91.6875C94.8125 92.5625 93.75 93 92.5 93H53.5C52.25 93 51.1875 92.5625 50.3125 91.6875C49.4375 90.8125 49 89.75 49 88.5V61.5C49 60.25 49.4375 59.1875 50.3125 58.3125C51.1875 57.4375 52.25 57 53.5 57H61.75L62.875 53.9062C63.125 53.3438 63.4375 52.8438 63.8125 52.4062C64.25 51.9688 64.75 51.625 65.3125 51.375C65.875 51.125 66.4688 51 67.0938 51H78.9062C79.8438 51 80.6875 51.2812 81.4375 51.8438C82.1875 52.3438 82.75 53.0312 83.125 53.9062L84.25 57H92.5C93.75 57 94.8125 57.4375 95.6875 58.3125C96.5625 59.1875 97 60.25 97 61.5ZM80.9688 82.9688C83.1562 80.7812 84.25 78.125 84.25 75C84.25 71.875 83.1562 69.2188 80.9688 67.0312C78.7812 64.8438 76.125 63.75 73 63.75C69.875 63.75 67.2188 64.8438 65.0312 67.0312C62.8438 69.2188 61.75 71.875 61.75 75C61.75 78.125 62.8438 80.7812 65.0312 82.9688C67.2188 85.1562 69.875 86.25 73 86.25C76.125 86.25 78.7812 85.1562 80.9688 82.9688ZM78.8125 69.1875C80.4375 70.8125 81.25 72.75 81.25 75C81.25 77.25 80.4375 79.1875 78.8125 80.8125C77.1875 82.4375 75.25 83.25 73 83.25C70.75 83.25 68.8125 82.4375 67.1875 80.8125C65.5625 79.1875 64.75 77.25 64.75 75C64.75 72.75 65.5625 70.8125 67.1875 69.1875C68.8125 67.5625 70.75 66.75 73 66.75C75.25 66.75 77.1875 67.5625 78.8125 69.1875Z"
                                fill="#D9D9D9"/>

                        </svg>
                        <input type="file" accept="image/*" name="photo" id="file" hidden onChange={handleFileChange}/>
                    </label> :
                    giraffeInfo.image === 'NoImage' ?
                        <svg className='giraffe-image'>
                            <rect width="145" height="145" rx="72.5" fill="white"/>
                            <path
                                d="M97 61.5V88.5C97 89.75 96.5625 90.8125 95.6875 91.6875C94.8125 92.5625 93.75 93 92.5 93H53.5C52.25 93 51.1875 92.5625 50.3125 91.6875C49.4375 90.8125 49 89.75 49 88.5V61.5C49 60.25 49.4375 59.1875 50.3125 58.3125C51.1875 57.4375 52.25 57 53.5 57H61.75L62.875 53.9062C63.125 53.3438 63.4375 52.8438 63.8125 52.4062C64.25 51.9688 64.75 51.625 65.3125 51.375C65.875 51.125 66.4688 51 67.0938 51H78.9062C79.8438 51 80.6875 51.2812 81.4375 51.8438C82.1875 52.3438 82.75 53.0312 83.125 53.9062L84.25 57H92.5C93.75 57 94.8125 57.4375 95.6875 58.3125C96.5625 59.1875 97 60.25 97 61.5ZM80.9688 82.9688C83.1562 80.7812 84.25 78.125 84.25 75C84.25 71.875 83.1562 69.2188 80.9688 67.0312C78.7812 64.8438 76.125 63.75 73 63.75C69.875 63.75 67.2188 64.8438 65.0312 67.0312C62.8438 69.2188 61.75 71.875 61.75 75C61.75 78.125 62.8438 80.7812 65.0312 82.9688C67.2188 85.1562 69.875 86.25 73 86.25C76.125 86.25 78.7812 85.1562 80.9688 82.9688ZM78.8125 69.1875C80.4375 70.8125 81.25 72.75 81.25 75C81.25 77.25 80.4375 79.1875 78.8125 80.8125C77.1875 82.4375 75.25 83.25 73 83.25C70.75 83.25 68.8125 82.4375 67.1875 80.8125C65.5625 79.1875 64.75 77.25 64.75 75C64.75 72.75 65.5625 70.8125 67.1875 69.1875C68.8125 67.5625 70.75 66.75 73 66.75C75.25 66.75 77.1875 67.5625 78.8125 69.1875Z"
                                fill="#D9D9D9"/>

                        </svg> :
                        <img className='photo' src={`http://localhost:8080/uploads/${giraffeInfo.image}`}
                             alt="Profile Image"/>
                }
                {state ?
                    <input onChange={handleChange.bind(this, "name")} placeholder={giraffeInfo.name}
                           className='input-name'/> :
                    <input placeholder={giraffeInfo.name} className='input-name' disabled/>}
                <div className='svg-top-labels'>
                    <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.9766 0.125C28.3672 0.125 28.5625 0.320312 28.5625 0.710938V4.56836C28.5625 4.73112 28.4974 4.8776 28.3672 5.00781C28.2695 5.10547 28.1393 5.1543 27.9766 5.1543C27.8138 5.1543 27.6836 5.10547 27.5859 5.00781L26.7559 4.17773L24.3633 6.52148C25.0794 7.66081 25.4375 8.91406 25.4375 10.2812C25.4375 12.2344 24.7539 13.8945 23.3867 15.2617C22.0195 16.6289 20.3594 17.3125 18.4062 17.3125C16.7786 17.3125 15.3301 16.8079 14.0605 15.7988C14.7441 14.985 15.265 14.0573 15.623 13.0156C16.3717 13.7969 17.2995 14.1875 18.4062 14.1875C19.4805 14.1875 20.3919 13.8132 21.1406 13.0645C21.9219 12.2832 22.3125 11.3555 22.3125 10.2812C22.3125 9.20703 21.9219 8.29557 21.1406 7.54688C20.3919 6.76562 19.4805 6.375 18.4062 6.375C17.2995 6.375 16.3717 6.76562 15.623 7.54688C15.265 6.53776 14.7441 5.61003 14.0605 4.76367C15.3301 3.75456 16.7786 3.25 18.4062 3.25C19.7734 3.25 21.0267 3.60807 22.166 4.32422L24.5098 1.93164L23.6797 1.10156C23.5169 0.938802 23.4844 0.74349 23.582 0.515625C23.6797 0.255208 23.8587 0.125 24.1191 0.125H27.9766ZM2.48828 5.30078C3.85547 3.93359 5.51562 3.25 7.46875 3.25C9.42188 3.25 11.082 3.93359 12.4492 5.30078C13.8164 6.66797 14.5 8.32812 14.5 10.2812C14.5 11.9414 13.9792 13.4062 12.9375 14.6758C11.9284 15.9453 10.6263 16.7591 9.03125 17.1172V19.6562H10.7891C11.1797 19.6562 11.375 19.8516 11.375 20.2422V22.1953C11.375 22.5859 11.1797 22.7812 10.7891 22.7812H9.03125V24.5391C9.03125 24.9297 8.83594 25.125 8.44531 25.125H6.49219C6.10156 25.125 5.90625 24.9297 5.90625 24.5391V22.7812H4.14844C3.75781 22.7812 3.5625 22.5859 3.5625 22.1953V20.2422C3.5625 19.8516 3.75781 19.6562 4.14844 19.6562H5.90625V17.1172C4.3112 16.7591 2.99284 15.9453 1.95117 14.6758C0.942057 13.4062 0.4375 11.9414 0.4375 10.2812C0.4375 8.32812 1.12109 6.66797 2.48828 5.30078ZM4.68555 13.0645C5.4668 13.8132 6.39453 14.1875 7.46875 14.1875C8.54297 14.1875 9.45443 13.8132 10.2031 13.0645C10.9844 12.2832 11.375 11.3555 11.375 10.2812C11.375 9.20703 10.9844 8.29557 10.2031 7.54688C9.45443 6.76562 8.54297 6.375 7.46875 6.375C6.39453 6.375 5.4668 6.76562 4.68555 7.54688C3.93685 8.29557 3.5625 9.20703 3.5625 10.2812C3.5625 11.3555 3.93685 12.2832 4.68555 13.0645Z"
                            fill="#435F40"/>
                    </svg>
                    <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.0469 15.75C12.0469 16.7812 11.4531 17.6719 10.2656 18.4219C9.10938 19.1406 7.70312 19.5 6.04688 19.5C4.39062 19.5 2.96875 19.1406 1.78125 18.4219C0.625 17.6719 0.046875 16.7812 0.046875 15.75C0.046875 15.75 0.046875 15.7344 0.046875 15.7031C0.046875 15.4531 0.125 15.1562 0.28125 14.8125C0.4375 14.4375 0.984375 13.3125 1.92188 11.4375C2.73438 9.8125 3.4375 8.40625 4.03125 7.21875C4.4375 6.40625 5.10938 6 6.04688 6C6.98438 6 7.65625 6.40625 8.0625 7.21875C8.6875 8.46875 9.40625 9.92188 10.2188 11.5781C11.125 13.3594 11.6562 14.4219 11.8125 14.7656C11.9688 15.1094 12.0469 15.4219 12.0469 15.7031C12.0469 15.7344 12.0469 15.75 12.0469 15.75ZM6.04688 8.25L2.67188 15H9.42188L6.04688 8.25ZM30.0469 15.75C30.0469 16.4375 29.7812 17.0781 29.25 17.6719C28.7188 18.2344 27.9844 18.6875 27.0469 19.0312C26.1406 19.3438 25.1406 19.5 24.0469 19.5C22.3906 19.5 20.9688 19.1406 19.7812 18.4219C18.625 17.6719 18.0469 16.7812 18.0469 15.75C18.0469 15.75 18.0469 15.7344 18.0469 15.7031C18.0469 15.4531 18.125 15.1562 18.2812 14.8125C18.4375 14.4375 18.9844 13.3125 19.9219 11.4375C20.0781 11.125 20.1875 10.8906 20.25 10.7344C20.3438 10.5781 20.4688 10.3438 20.625 10.0312C20.8125 9.6875 20.9688 9.39062 21.0938 9.14062C21.2188 8.89062 21.3594 8.59375 21.5156 8.25C21.7031 7.90625 21.875 7.5625 22.0312 7.21875C22.4375 6.40625 23.1094 6 24.0469 6C24.9844 6 25.6562 6.40625 26.0625 7.21875C26.6875 8.46875 27.4062 9.92188 28.2188 11.5781C29.125 13.3594 29.6562 14.4219 29.8125 14.7656C29.9688 15.1094 30.0469 15.4219 30.0469 15.7031C30.0469 15.7344 30.0469 15.75 30.0469 15.75ZM20.6719 15H27.4219L24.0469 8.25L20.6719 15ZM24.7969 21C25.0156 21 25.1875 21.0625 25.3125 21.1875C25.4688 21.3438 25.5469 21.5312 25.5469 21.75V23.25C25.5469 23.4688 25.4688 23.6406 25.3125 23.7656C25.1875 23.9219 25.0156 24 24.7969 24H5.29688C5.07812 24 4.89062 23.9219 4.73438 23.7656C4.60938 23.6406 4.54688 23.4688 4.54688 23.25V21.75C4.54688 21.5312 4.60938 21.3438 4.73438 21.1875C4.89062 21.0625 5.07812 21 5.29688 21H13.5469V7.17188C12.3594 6.67188 11.6406 5.78125 11.3906 4.5H5.29688C5.07812 4.5 4.89062 4.4375 4.73438 4.3125C4.60938 4.15625 4.54688 3.96875 4.54688 3.75V2.25C4.54688 2.03125 4.60938 1.85938 4.73438 1.73438C4.89062 1.57813 5.07812 1.5 5.29688 1.5H12.0469C12.8281 0.5 13.8281 0 15.0469 0C16.2656 0 17.2656 0.5 18.0469 1.5H24.7969C25.0156 1.5 25.1875 1.57813 25.3125 1.73438C25.4688 1.85938 25.5469 2.03125 25.5469 2.25V3.75C25.5469 3.96875 25.4688 4.15625 25.3125 4.3125C25.1875 4.4375 25.0156 4.5 24.7969 4.5H18.7031C18.4531 5.78125 17.7344 6.67188 16.5469 7.17188V21H24.7969Z"
                            fill="#435F40"/>
                    </svg>
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.875 19.5H12V22.5C12 22.9062 11.8438 23.25 11.5312 23.5312C11.25 23.8438 10.9062 24 10.5 24H1.5C1.09375 24 0.734375 23.8438 0.421875 23.5312C0.140625 23.25 0 22.9062 0 22.5V1.5C0 1.09375 0.140625 0.75 0.421875 0.46875C0.734375 0.15625 1.09375 0 1.5 0H10.5C10.9062 0 11.25 0.15625 11.5312 0.46875C11.8438 0.75 12 1.09375 12 1.5V4.5H7.875C7.625 4.5 7.5 4.625 7.5 4.875V5.625C7.5 5.875 7.625 6 7.875 6H12V9H7.875C7.625 9 7.5 9.125 7.5 9.375V10.125C7.5 10.375 7.625 10.5 7.875 10.5H12V13.5H7.875C7.625 13.5 7.5 13.625 7.5 13.875V14.625C7.5 14.875 7.625 15 7.875 15H12V18H7.875C7.625 18 7.5 18.125 7.5 18.375V19.125C7.5 19.375 7.625 19.5 7.875 19.5Z"
                            fill="#435F40"/>
                    </svg>

                </div>
                <div className='specifications-bar'>
                    {state ?
                        <input onChange={handleChange.bind(this, "sex")} placeholder={giraffeInfo.sex}
                               className='specifications-bar-content'/> :
                        <input placeholder={giraffeInfo.sex.toUpperCase()} className='specifications-bar-content'
                               disabled/>}
                    {state ?
                        <input onChange={handleChange.bind(this, "weight")} placeholder={giraffeInfo.weight}
                               className='specifications-bar-content'/> :
                        <input placeholder={giraffeInfo.weight} className='specifications-bar-content'
                               disabled/>}
                    {state ?
                        <input onChange={handleChange.bind(this, "height")} placeholder={giraffeInfo.height}
                               className='specifications-bar-content'/> :
                        <input placeholder={giraffeInfo.height} className='specifications-bar-content' disabled/>}
                </div>
                <div className='pair'>
                    <div className='textLabel'><b>Цвет: </b></div>
                    {state ?
                        <input onChange={handleChange.bind(this, "color")} placeholder={giraffeInfo.color}
                               className='input-pair-labels'/> :
                        <input placeholder={giraffeInfo.color} className='input-pair-labels' disabled/>}
                </div>
                <div className='pair'>
                    <div className='textLabel'><b>Диета:</b></div>
                    {state ?
                        <input onChange={handleChange.bind(this, "diet")} placeholder={giraffeInfo.diet}
                               className='input-pair-labels'/> :
                        <input placeholder={giraffeInfo.diet} className='input-pair-labels' disabled/>}

                </div>
                <div className='pair'>
                    <div className='textLabel'><b>Характер:</b></div>
                    {state ?
                        <input onChange={handleChange.bind(this, "temper")} placeholder={giraffeInfo.temper}
                               className='input-pair-labels'/> :
                        <input placeholder={giraffeInfo.temper} className='input-pair-labels' disabled/>}
                </div>
                {state ?
                    buttonGreen || giraffeInfo.isUpdated ? <
                            div onClick={_saveGiraffe} className='button-save button-save-green'>
                            <div>Сохранить</div>
                        </div> :
                        <div onClick={_saveGiraffe} className='button-save'>
                            <div>Сохранить</div>
                        </div> :
                    <div style={{marginBottom: '19px'}}/>}
            </div>
        </form>
    )
}

export default CardContentItem
