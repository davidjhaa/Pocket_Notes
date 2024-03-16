import React, { useState } from "react";
import './GroupName.css';
import TextArea from './TextArea';
import RightContent from "./RightContent";
import { useDispatch } from "react-redux";
import { createGroupBtn } from '../redux/createSlice';

function GroupName({gname, color}) {
    const [showRightContent, setShowRightContent] = useState(false);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(createGroupBtn(gname));
        setShowRightContent(true);
       
    }

    return(
        <div className="groupName-container">
            <label className="gnamelabel"  onClick={handleClick} >
                <div className="circle" style={{backgroundColor: color}}></div>
                <div className="name">{gname}</div>
            </label>
            {showRightContent && <RightContent />}
        </div>
    )
}

export default GroupName;

