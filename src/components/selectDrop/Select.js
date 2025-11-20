import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../selectDrop/Select.css'
import ClickAwayListener from '@mui/material/ClickAwayListener';


const Select = ({ data, placeholder, icon }) => {

    const [isOpenSelect, setisOpenSelect] = useState(false)
    const [selectedIndex, setselectedIndex] = useState(0)
    const [selectedItem, setselectedItem] = useState(placeholder)

    const [listData, setlistData] = useState(data)
    const [listData2, setlistData2] = useState(data)

    const openselect = () => {
        setisOpenSelect(!isOpenSelect);
    }
    const closeselect = (index, item) => {
        setselectedIndex(index);
        setisOpenSelect(!isOpenSelect);
        setselectedItem(item);
    }

    const filterlist = (e) => {
        const keyword = e.target.value.toLowerCase();

        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword);
        })
        const list2 = list.filter((item, index) => list.indexOf(item) === index);
        setlistData(list2)
    }

    return (
        <>  <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
            <div className="selectdrop cursor position-relative">
                {icon}
                <span className="openselect" onClick={openselect}>{selectedItem.length > 14 ? selectedItem.substr(0, 14) + "..." : selectedItem}
                    <KeyboardArrowDownIcon className="arrow" />
                </span>
                {isOpenSelect === true &&
                    <div className="selectDrop">
                        <div className="searchfield">
                            <input type="text" placeholder="Search here .." onChange={filterlist} />
                        </div>
                        <ul className="searchresults">
                            <li key={0} onClick={() => closeselect(0, placeholder)} className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder}</li>
                            {
                                listData.map((item, index) => {
                                    return (
                                        <li key={index + 1} onClick={() => closeselect(index + 1, item)} className={`${selectedIndex === index + 1 ? 'active' : ''}`}>{item}</li>
                                    )
                                }

                                )
                            }
                        </ul>
                    </div>
                }
            </div>
        </ClickAwayListener>
        </>
    )
}

export default Select