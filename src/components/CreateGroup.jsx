import React, { useEffect, useRef, useState } from "react";
import "./CreateGroup.css";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { createShowDivBtn, createGroupBtn } from '../redux/createSlice.js';


function CreateGroup() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [addarray, setaddarray] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    const myId = nanoid(5);
    
      // console.log(myArray)
    
    dispatch(createShowDivBtn());
    dispatch(createGroupBtn(input));
    if(localStorage.getItem ("myArray")){
      const myArray = 
      {
        id: myId,
        input: input, 
        color: selectedColor,
        message: ["fist message"]
      }
      const storedData = localStorage.getItem("myArray");
      const parsedData = storedData ? JSON.parse(storedData) : [];
      const newArr = [...parsedData, myArray]
      // setaddarray(...addarray,newArr)
      localStorage.setItem("myArray", JSON.stringify(newArr));
    } 
    else{
      const myArray = [
      {
        id: myId,
        input: input, 
        color: selectedColor,
        message: ["fist message"]
      }]
      // setaddarray(myArray)
      localStorage.setItem("myArray", JSON.stringify(myArray));
    }
  }

  return (
    <div className="form">
      <p className="form-text">Create new group</p>
      <div>
        <label className="form-text">Group name</label>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          id="fname"
          placeholder="enter group name"
        />
      </div>

      <div className="choose-color">
        <p className="form-text">Choose colour</p>

        <span style={{ position: "relative", bottom: "52px", left: "180px" }}>
          <span className="selectColor"
          onClick={()=>{setSelectedColor('pink')}}
            style={{backgroundColor: "pink"}}
          />
          <span className="selectColor"
          onClick={()=>{setSelectedColor("blue")}}
            style={{backgroundColor: "blue"}}
          />
          <span className="selectColor"
          onClick={()=>{ setSelectedColor("orangered")}}
            style={{backgroundColor: "orangered"}}
          />
          <span className="selectColor"
          onClick={() =>{setSelectedColor("purple")}}
            style={{backgroundColor: "purple"}}
          />

          <span className="selectColor"
            onClick={()=>{setSelectedColor("gray")}}
            style={{backgroundColor: "gray"}}
          />
          <span className="selectColor"
            onClick={()=>{setSelectedColor("violet")}}
            style={{ backgroundColor: "violet"}}
          />
        </span>
      </div>

      <button onClick={handleSubmit} className="submit" type="submit">
        Create
      </button>
    </div>
  );
}

export default CreateGroup;
