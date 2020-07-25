import CardContentItem from "../cardGiraffeContent/CardContentItem";
import React from "react";
import {GiraffeModel} from "../../models/GiraffeModel";
import axios from 'axios'

export default function GiraffeList() {
    let [giraffes, setGiraffe] = React.useState([])

    React.useEffect(() => {
        findGiraffes().then(
            console.log('done')
        )
    }, [])

    const findGiraffes = async () => {
        const res = await axios.get('/api/giraffes')
        setGiraffe(res.data.reverse())
    }

    const updateGiraffe = async (id, giraffe) => {
        return await axios.put(`/api/giraffe/${id}`, giraffe)
    }

    const addGiraffe = async (giraffe) => {
        return await axios.post('/api/giraffe', giraffe, {})
    }

    const deleteGiraffe = async (id) => {
        await axios.delete(`/api/giraffe/${id}`)
        setGiraffe(giraffes.filter(item => item._id !== id))
    }

    function addNewCard(event) {
        // Если еще не закончено редактирование или создание жирафа, жирафов добавить нельзя
        if (giraffes.filter((item) => item.isNew || item.isUpdated).length === 0) {
            event.preventDefault()
            setGiraffe([
                new GiraffeModel(new Date(), 'Имя', '-', '-', '-', '', '', '', '', true, false),
            ].concat(giraffes));
        }
    }

    function editGiraffe(id) {
        // Если еще не закончено редактирование или создание жирафа, жирафов добавить нельзя
        if (giraffes.filter((item) => item.isNew || item.isUpdated).length === 0) {
            setGiraffe(
                giraffes.map((item) => {
                    if (item._id === id) {
                        item.isUpdated = true
                        item.isNew = false
                    }
                    return item
                })
            )
        }
    }

    function saveNewGiraffe(giraffeInfo) {
        addGiraffe(giraffeInfo).then((res) => {
                setGiraffe(
                    giraffes.map((item) => {
                        if (item.isNew) {
                            item._id = res.data._id
                            item.color = giraffeInfo.color
                            item.weight = giraffeInfo.weight
                            item.name = giraffeInfo.name
                            item.height = giraffeInfo.high
                            item.sex = giraffeInfo.sex
                            item.diet = giraffeInfo.diet
                            item.temper = giraffeInfo.temper
                            item.image = giraffeInfo.image
                            item.isNew = false
                        }
                        return item
                    })
                )
            }, (err) => {
                alert(err)
            }
        )
    }

    function updateG(giraffeInfo) {
        updateGiraffe(giraffeInfo.id, giraffeInfo).then((res) => {
                setGiraffe(
                    giraffes.map((item) => {
                        if (item._id === res.data._id) {
                            item.color = res.data.color
                            item.weight = res.data.weight
                            item.name = res.data.name
                            item.height = res.data.high
                            item.sex = res.data.sex
                            item.diet = res.data.diet
                            item.temper = res.data.temper
                            item.image = res.data.image
                            item.isUpdated = false
                            item.isNew = false
                        }
                        return item
                    })
                )
            }, err => {
                alert(err)
            }
        )
    }

    function saveGiraffe(giraffeInfo) {
        if (giraffeInfo.isNew) {
            saveNewGiraffe(giraffeInfo)
        } else {
            updateG(giraffeInfo)
        }
    }

    return (<div>
            <div className='giraffe-label-container'>
                <div className='giraffes-label'>Жирафы</div>
                <div className='add-giraffe-top'>
                    <div className='add-giraffe' onClick={addNewCard}>
                        <svg className='add-giraffe-svg'>
                            <path
                                d="M14.625 6.5625C14.9297 6.5625 15.1875 6.67969 15.3984 6.91406C15.6328 7.125 15.75 7.38281 15.75 7.6875V8.8125C15.75 9.11719 15.6328 9.38672 15.3984 9.62109C15.1875 9.83203 14.9297 9.9375 14.625 9.9375H9.5625V15C9.5625 15.3047 9.44531 15.5625 9.21094 15.7734C9 16.0078 8.74219 16.125 8.4375 16.125H7.3125C7.00781 16.125 6.73828 16.0078 6.50391 15.7734C6.29297 15.5625 6.1875 15.3047 6.1875 15V9.9375H1.125C0.820312 9.9375 0.550781 9.83203 0.316406 9.62109C0.105469 9.38672 0 9.11719 0 8.8125V7.6875C0 7.38281 0.105469 7.125 0.316406 6.91406C0.550781 6.67969 0.820312 6.5625 1.125 6.5625H6.1875V1.5C6.1875 1.19531 6.29297 0.9375 6.50391 0.726562C6.73828 0.492187 7.00781 0.375 7.3125 0.375H8.4375C8.74219 0.375 9 0.492187 9.21094 0.726562C9.44531 0.9375 9.5625 1.19531 9.5625 1.5V6.5625H14.625Z"
                                fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <section className='parent'>
                {giraffes.map((giraffe) => {
                    let classes = []
                    giraffe.isNew || giraffe.isUpdated ? classes.push('giraffe-card box-shadow-giraffe-card') : classes.push('giraffe-card')

                    return (
                        <div className={classes} key={giraffe.id}>
                            <CardContentItem giraffeInfo={giraffe} saveGiraffe={saveGiraffe}
                                             deleteGiraffe={deleteGiraffe} editGiraffe={editGiraffe}/>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}