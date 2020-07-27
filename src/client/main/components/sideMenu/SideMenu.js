import React from 'react';
import './SideMenu.css';


export default function SideMenu({selectedSideButton}) {
    let [menuButtons, setMenuButtons] = React.useState([
        {title: 'Главная', classes: 'side-menu-button', svg: '', text: 'side-menu-text'},
        {title: 'Управление', classes: 'side-menu-button', svg: '', text: 'side-menu-text'},
        {
            title: 'Жирафы',
            classes: 'side-menu-button side-menu-button-selected ',
            svg: 'side-menu-svg-selected',
            text: 'side-menu-text side-menu-text-selected'
        },
        {title: 'Сотрудники', classes: 'side-menu-button', svg: '', text: 'side-menu-text'},
        {title: 'Настройки', classes: 'side-menu-button', svg: '', text: 'side-menu-text'},
        {title: 'Поддержка', classes: 'side-menu-button', svg: '', text: 'side-menu-text'}
    ])

    function selected(_index) {
        setMenuButtons(menuButtons.map((item, index) => {
            if (index === _index) {
                item.classes = 'side-menu-button side-menu-button-selected '
                item.svg = 'side-menu-svg-selected'
                item.text = 'side-menu-text side-menu-text-selected'
            } else {
                item.classes = 'side-menu-button '
                item.svg = ''
                item.text = 'side-menu-text '
            }
            return item
        }))
        selectedSideButton(_index)
    }

    function buttonMain() {
        selected(0)
    }

    function buttonControl() {
        selected(1)
    }

    function buttonGiraffe() {
        selected(2)
    }

    function buttonEmployer() {
        selected(3)

    }

    function buttonSettings() {
        selected(4)
    }

    function buttonSupports() {
        selected(5)
    }

    return (<div>
            <div className='side-menu-flex-row'>
                <div className='giraffe-logo'/>
                <div className='side-menu-top-text'>
                    <div className='text-one'>Ферма заслуженных жираффов</div>
                    <div className='text-two'>России и СНГ</div>
                </div>
            </div>

            <span className='side-menu-content'>
                <nav onClick={buttonMain} className={menuButtons[0].classes}>
                    <svg className='side-menu-svg'>
                        <path className={menuButtons[0].svg}
                              d="M13.1719 5.9375C13.2969 5.875 13.4219 5.84375 13.5469 5.84375C13.6719 5.84375 13.7969 5.875 13.9219 5.9375L22.5469 13.0625V20.75C22.5469 20.9688 22.4688 21.1406 22.3125 21.2656C22.1875 21.4219 22.0156 21.5 21.7969 21.5H16.5469C16.3281 21.5 16.1406 21.4219 15.9844 21.2656C15.8594 21.1094 15.7969 20.9375 15.7969 20.75V16.25C15.7969 16.125 15.7656 16 15.7031 15.875C15.6406 15.75 15.5469 15.6562 15.4219 15.5938C15.2969 15.5312 15.1719 15.5 15.0469 15.5H12.0469C11.8281 15.5 11.6406 15.5781 11.4844 15.7344C11.3594 15.8594 11.2969 16.0312 11.2969 16.25V20.75C11.2969 20.9375 11.2188 21.1094 11.0625 21.2656C10.9375 21.4219 10.7656 21.5 10.5469 21.5H5.29688C5.07812 21.5 4.89062 21.4219 4.73438 21.2656C4.60938 21.1406 4.54688 20.9688 4.54688 20.75V13.0625L13.1719 5.9375ZM26.8594 10.7656C26.9844 10.8906 27.0469 11.0469 27.0469 11.2344C27.0469 11.3594 27 11.4688 26.9062 11.5625L25.7344 13.0156C25.6094 13.1719 25.4688 13.25 25.3125 13.25C25.1562 13.25 25.0312 13.2031 24.9375 13.1094L13.9219 4.01562C13.7969 3.95313 13.6719 3.92188 13.5469 3.92188C13.4219 3.92188 13.2969 3.95313 13.1719 4.01562L2.15625 13.1094C2.0625 13.2031 1.95312 13.25 1.82812 13.25C1.64062 13.25 1.48438 13.1719 1.35938 13.0156L0.1875 11.5625C0.09375 11.4688 0.046875 11.3594 0.046875 11.2344C0.046875 11.0469 0.109375 10.8906 0.234375 10.7656L12.0938 1.01562C12.5312 0.671875 13.0156 0.5 13.5469 0.5C14.0781 0.5 14.5469 0.671875 14.9531 1.01562L19.1719 4.48438V1.0625C19.1719 0.90625 19.2188 0.78125 19.3125 0.6875C19.4375 0.5625 19.5781 0.5 19.7344 0.5H22.3594C22.5156 0.5 22.6406 0.5625 22.7344 0.6875C22.8594 0.78125 22.9219 0.90625 22.9219 1.0625V7.57812L26.8594 10.7656Z"
                              fill="#F3DBC7"/>
                    </svg>
                    <span className={menuButtons[0].text}>{menuButtons[0].title}</span>
                </nav>

                <nav onClick={buttonControl} className={menuButtons[1].classes}>
                    <svg className='side-menu-svg'>
                        <path className={menuButtons[1].svg}
                              d="M6.5625 0.6875L7.35938 1.4375C7.45312 1.5625 7.5 1.70313 7.5 1.85938C7.5 1.98438 7.45312 2.10937 7.35938 2.23438L3.9375 5.60938L3.23438 6.35938C3.10938 6.45312 2.96875 6.5 2.8125 6.5C2.65625 6.5 2.51562 6.45312 2.39062 6.35938L0.1875 4.10938C0.0625 4.01562 0 3.89062 0 3.73438C0 3.57813 0.0625 3.4375 0.1875 3.3125L0.890625 2.60938C1.01562 2.48437 1.15625 2.42188 1.3125 2.42188C1.46875 2.42188 1.59375 2.48437 1.6875 2.60938L2.76562 3.64062L5.76562 0.6875C5.85938 0.5625 5.98438 0.5 6.14062 0.5C6.29688 0.5 6.4375 0.5625 6.5625 0.6875ZM6.5625 8.14062L7.35938 8.9375C7.45312 9.03125 7.5 9.15625 7.5 9.3125C7.5 9.46875 7.4375 9.60938 7.3125 9.73438L3.9375 13.1094L3.23438 13.8125C3.10938 13.9375 2.96875 14 2.8125 14C2.65625 14 2.51562 13.9375 2.39062 13.8125L0.1875 11.6094C0.0625 11.4844 0 11.3594 0 11.2344C0 11.0781 0.0625 10.9375 0.1875 10.8125L0.890625 10.0625C1.01562 9.96875 1.15625 9.92188 1.3125 9.92188C1.46875 9.92188 1.59375 9.96875 1.6875 10.0625L2.76562 11.0938L5.76562 8.14062C5.85938 8.01562 5.98438 7.95312 6.14062 7.95312C6.29688 7.95312 6.4375 8.01562 6.5625 8.14062ZM1.35938 16.9062C1.82812 16.4688 2.375 16.25 3 16.25C3.625 16.25 4.15625 16.4688 4.59375 16.9062C5.03125 17.3438 5.25 17.875 5.25 18.5C5.25 19.125 5.03125 19.6562 4.59375 20.0938C4.15625 20.5312 3.625 20.75 3 20.75C2.375 20.75 1.82812 20.5312 1.35938 20.0938C0.921875 19.6562 0.703125 19.125 0.703125 18.5C0.703125 17.875 0.921875 17.3438 1.35938 16.9062ZM23.25 17C23.4688 17 23.6406 17.0781 23.7656 17.2344C23.9219 17.3594 24 17.5312 24 17.75V19.25C24 19.4688 23.9219 19.6562 23.7656 19.8125C23.6406 19.9375 23.4688 20 23.25 20H9.75C9.53125 20 9.34375 19.9375 9.1875 19.8125C9.0625 19.6562 9 19.4688 9 19.25V17.75C9 17.5312 9.0625 17.3594 9.1875 17.2344C9.34375 17.0781 9.53125 17 9.75 17H23.25ZM23.25 2C23.4688 2 23.6406 2.07813 23.7656 2.23438C23.9219 2.35938 24 2.53125 24 2.75V4.25C24 4.46875 23.9219 4.65625 23.7656 4.8125C23.6406 4.9375 23.4688 5 23.25 5H9.75C9.53125 5 9.34375 4.9375 9.1875 4.8125C9.0625 4.65625 9 4.46875 9 4.25V2.75C9 2.53125 9.0625 2.35938 9.1875 2.23438C9.34375 2.07813 9.53125 2 9.75 2H23.25ZM23.25 9.5C23.4688 9.5 23.6406 9.57812 23.7656 9.73438C23.9219 9.85938 24 10.0312 24 10.25V11.75C24 11.9688 23.9219 12.1562 23.7656 12.3125C23.6406 12.4375 23.4688 12.5 23.25 12.5H9.75C9.53125 12.5 9.34375 12.4375 9.1875 12.3125C9.0625 12.1562 9 11.9688 9 11.75V10.25C9 10.0312 9.0625 9.85938 9.1875 9.73438C9.34375 9.57812 9.53125 9.5 9.75 9.5H23.25Z"
                              fill="#F3DBC7"/>
                    </svg>
                    <span className={menuButtons[1].text}>{menuButtons[1].title}</span>
                </nav>
                <nav onClick={buttonGiraffe} className={menuButtons[2].classes}>
                    <svg className='side-menu-svg'>
                        <path className={menuButtons[2].svg}
                              d="M23.9062 16.5625C24.125 17.1875 24.0156 17.7344 23.5781 18.2031L21.4219 20.0781C21.1406 20.3594 20.7969 20.5 20.3906 20.5H18C17.5 20.5 17.0938 20.2969 16.7812 19.8906L14.625 16.8906C13.9375 17.2969 13.2188 17.5 12.4688 17.5C11.5625 17.5 10.7344 17.25 9.98438 16.75C9.26562 16.25 8.71875 15.6094 8.34375 14.8281C8.3125 14.7031 8.21875 14.625 8.0625 14.5938C7.9375 14.5625 7.82812 14.5938 7.73438 14.6875L7.17188 15.25C7.04688 15.4062 7.03125 15.5625 7.125 15.7188C7.59375 16.625 8.25 17.375 9.09375 17.9688C9.96875 18.5625 10.9375 18.8906 12 18.9531V19L13.9219 22.8438C14.1719 23.3438 14.1406 23.8281 13.8281 24.2969C13.5469 24.7656 13.125 25 12.5625 25H1.5C1.09375 25 0.734375 24.8438 0.421875 24.5312C0.140625 24.25 0 23.9062 0 23.5V19.7031C0 17.7344 0.125 15.9844 0.375 14.4531C0.625 12.9219 1.03125 11.5 1.59375 10.1875C2.1875 8.84375 3 7.71875 4.03125 6.8125C5.0625 5.875 6.32812 5.125 7.82812 4.5625L17.2969 1.04688C17.6094 0.921875 17.7969 1.01562 17.8594 1.32812C18.2969 3.01562 17.7656 4.29687 16.2656 5.17188C16.9219 5.29688 17.5312 5.53125 18.0938 5.875C18.6875 6.21875 19.2031 6.65625 19.6406 7.1875C20.0781 7.6875 20.4062 8.25 20.625 8.875L23.9062 16.5625ZM14.5781 11.1719C14.7969 11.3906 15.0625 11.5 15.375 11.5C15.6875 11.5 15.9531 11.3906 16.1719 11.1719C16.3906 10.9531 16.5 10.6875 16.5 10.375C16.5 10.0625 16.3906 9.79688 16.1719 9.57812C15.9531 9.35938 15.6875 9.25 15.375 9.25C15.0625 9.25 14.7969 9.35938 14.5781 9.57812C14.3594 9.79688 14.25 10.0625 14.25 10.375C14.25 10.6875 14.3594 10.9531 14.5781 11.1719Z"
                              fill="#F3DBC7"/>
                    </svg>
                    <span className={menuButtons[2].text}>{menuButtons[2].title}</span>
                </nav>
                <nav onClick={buttonEmployer} className={menuButtons[3].classes}>
                    <svg className='side-menu-svg'>
                        <path className={menuButtons[3].svg}
                              d="M12.7031 9.45312C11.6719 10.4844 10.4375 11 9 11C7.5625 11 6.32812 10.4844 5.29688 9.45312C4.26562 8.42188 3.75 7.1875 3.75 5.75C3.75 4.3125 4.26562 3.07812 5.29688 2.04688C6.32812 1.01562 7.5625 0.5 9 0.5C10.4375 0.5 11.6719 1.01562 12.7031 2.04688C13.7344 3.07812 14.25 4.3125 14.25 5.75C14.25 7.1875 13.7344 8.42188 12.7031 9.45312ZM12.6094 12.5C14.1094 12.5 15.375 13.0312 16.4062 14.0938C17.4688 15.125 18 16.3906 18 17.8906V19.25C18 19.875 17.7812 20.4062 17.3438 20.8438C16.9062 21.2812 16.375 21.5 15.75 21.5H2.25C1.625 21.5 1.09375 21.2812 0.65625 20.8438C0.21875 20.4062 0 19.875 0 19.25V17.8906C0 16.3906 0.515625 15.125 1.54688 14.0938C2.60938 13.0312 3.89062 12.5 5.39062 12.5H5.8125C6.84375 13 7.90625 13.25 9 13.25C10.0938 13.25 11.1562 13 12.1875 12.5H12.6094ZM25.6875 9.6875C24.8125 10.5625 23.75 11 22.5 11C21.25 11 20.1875 10.5625 19.3125 9.6875C18.4375 8.8125 18 7.75 18 6.5C18 5.25 18.4375 4.1875 19.3125 3.3125C20.1875 2.4375 21.25 2 22.5 2C23.75 2 24.8125 2.4375 25.6875 3.3125C26.5625 4.1875 27 5.25 27 6.5C27 7.75 26.5625 8.8125 25.6875 9.6875ZM24.75 12.5C26.1875 12.5 27.4219 13.0156 28.4531 14.0469C29.4844 15.0781 30 16.3125 30 17.75C30 18.375 29.7812 18.9062 29.3438 19.3438C28.9062 19.7812 28.375 20 27.75 20H19.4531C19.4531 19.9688 19.4531 19.9219 19.4531 19.8594C19.4844 19.7969 19.5 19.75 19.5 19.7188V17.8906C19.5 16.1094 18.875 14.5469 17.625 13.2031C18.4688 12.7344 19.3438 12.5 20.25 12.5H20.4375C21.1562 12.75 21.8438 12.875 22.5 12.875C23.1562 12.875 23.8438 12.75 24.5625 12.5H24.75Z"
                              fill="#F3DBC7"/>
                    </svg>
                    <span className={menuButtons[3].text}>{menuButtons[3].title}</span>
                </nav>
                <nav onClick={buttonSettings} className={menuButtons[4].classes}>
                    <svg className='side-menu-svg' >
                        <path className={menuButtons[4].svg}
                              d="M22.8281 14.8125C23.1094 14.9375 23.2031 15.1562 23.1094 15.4688C22.5781 17.125 21.7188 18.5938 20.5312 19.875C20.3438 20.0938 20.125 20.1406 19.875 20.0156L17.8594 18.8438C17.0156 19.5625 16.0625 20.1094 15 20.4844V22.7812C15 23.0938 14.8594 23.2812 14.5781 23.3438C12.8594 23.7188 11.1562 23.7188 9.46875 23.3438C9.15625 23.2812 9 23.0938 9 22.7812V20.4844C7.9375 20.1094 6.98438 19.5625 6.14062 18.8438L4.17188 20.0156C3.89062 20.1406 3.65625 20.0938 3.46875 19.875C2.28125 18.5938 1.42188 17.125 0.890625 15.4688C0.796875 15.1875 0.890625 14.9688 1.17188 14.8125L3.14062 13.6406C3.04688 13.1094 3 12.5625 3 12C3 11.4375 3.04688 10.8906 3.14062 10.3594L1.17188 9.1875C0.890625 9.0625 0.796875 8.84375 0.890625 8.53125C1.42188 6.875 2.28125 5.40625 3.46875 4.125C3.65625 3.90625 3.89062 3.875 4.17188 4.03125L6.14062 5.15625C6.98438 4.4375 7.9375 3.89062 9 3.51562V1.21875C9 0.90625 9.14062 0.71875 9.42188 0.65625C11.1406 0.28125 12.8594 0.28125 14.5781 0.65625C14.8594 0.71875 15 0.90625 15 1.21875V3.51562C16.0625 3.89062 17.0156 4.4375 17.8594 5.15625L19.8281 3.98438C20.1094 3.85937 20.3438 3.90625 20.5312 4.125C21.7188 5.40625 22.5781 6.875 23.1094 8.53125C23.2031 8.84375 23.1094 9.0625 22.8281 9.1875L20.8594 10.3594C21.0469 11.4531 21.0469 12.5469 20.8594 13.6406L22.8281 14.8125ZM9.32812 14.6719C10.0781 15.3906 10.9688 15.75 12 15.75C13.0312 15.75 13.9062 15.3906 14.625 14.6719C15.375 13.9219 15.75 13.0312 15.75 12C15.75 10.9688 15.375 10.0938 14.625 9.375C13.9062 8.625 13.0312 8.25 12 8.25C10.9688 8.25 10.0781 8.625 9.32812 9.375C8.60938 10.0938 8.25 10.9688 8.25 12C8.25 13.0312 8.60938 13.9219 9.32812 14.6719Z"
                              fill="#F3DBC7"/>
                    </svg>
                    <span className={menuButtons[4].text}>{menuButtons[4].title}</span>
                </nav>
                <nav onClick={buttonSupports} className={menuButtons[5].classes}>
                    <svg className='side-menu-svg' >
                        <path className={menuButtons[5].svg}
                              d="M23.5312 19.5625C23.875 19.9062 24.0469 20.3125 24.0469 20.7812C24.0469 21.25 23.875 21.6562 23.5312 22L21.0469 24.4844C20.7344 24.8281 20.3281 25 19.8281 25C19.3594 25 18.9531 24.8281 18.6094 24.4844L13.125 19C12.5938 18.4688 12.2656 17.8281 12.1406 17.0781C12.0156 16.3281 12.125 15.6406 12.4688 15.0156L7.45312 10H4.54688L0.046875 4L3.04688 1L9.04688 5.5V8.40625L14.0625 13.4219C14.6875 13.0781 15.375 12.9688 16.125 13.0938C16.875 13.2188 17.5156 13.5469 18.0469 14.0781L23.5312 19.5625ZM15.6094 11.5469C15.2031 11.5469 14.8125 11.5938 14.4375 11.6875L10.5938 7.84375C10.5625 5.9375 11.2031 4.3125 12.5156 2.96875C13.3594 2.125 14.3438 1.54688 15.4688 1.23438C16.625 0.921875 17.7812 0.90625 18.9375 1.1875C19.1562 1.25 19.2812 1.39062 19.3125 1.60938C19.375 1.82813 19.3281 2 19.1719 2.125L15.7031 5.64062L16.2188 8.82812L19.4062 9.34375L22.9219 5.875C23.0781 5.71875 23.25 5.67188 23.4375 5.73438C23.6562 5.76563 23.7969 5.89062 23.8594 6.10938C24.1406 7.23438 24.125 8.375 23.8125 9.53125C23.5 10.6875 22.9219 11.6875 22.0781 12.5312C21.4844 13.0938 20.7969 13.5469 20.0156 13.8906L19.125 13C18.1562 12.0312 16.9844 11.5469 15.6094 11.5469ZM10.7344 15.3906C10.5156 16.3594 10.5938 17.3438 10.9688 18.3438L5.15625 24.1094C4.5625 24.7031 3.84375 25 3 25C2.1875 25 1.48438 24.7031 0.890625 24.1094C0.328125 23.5469 0.046875 22.8438 0.046875 22C0.046875 21.1875 0.34375 20.4844 0.9375 19.8906L8.0625 12.7188L10.7344 15.3906ZM2.25 22.7969C2.46875 23.0156 2.73438 23.125 3.04688 23.125C3.35938 23.125 3.625 23.0156 3.84375 22.7969C4.0625 22.5781 4.17188 22.3125 4.17188 22C4.17188 21.6875 4.0625 21.4219 3.84375 21.2031C3.625 20.9844 3.35938 20.875 3.04688 20.875C2.73438 20.875 2.46875 20.9844 2.25 21.2031C2.03125 21.4219 1.92188 21.6875 1.92188 22C1.92188 22.3125 2.03125 22.5781 2.25 22.7969Z"
                              fill="#F3DBC7"/>
                    </svg>
                    <span className={menuButtons[5].text}>{menuButtons[5].title}</span>
                </nav>
            </span>
        </div>
    );
}