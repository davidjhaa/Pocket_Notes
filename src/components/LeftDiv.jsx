// import React,{useContext,useEffect,useState,} from "react";
// import "./LeftDiv.css";
// import RightDiv from "./RightDiv";
// import CreateGroup from "./CreateGroup.jsx";
// import GroupName from "./GroupName.jsx";
// import {useDispatch, useSelector } from 'react-redux';
// import { createShowDivBtn } from '../redux/createSlice.js';

// export default function LeftDiv() {
//   const dispatch = useDispatch();
//   const create = useSelector(state => state.content.create);
 
//   const [arr, setarr] = useState([]);

//   useEffect(() => {
//     const storedData = localStorage.getItem("myArray");
//       const parsedData = storedData ? JSON.parse(storedData) : [];
//       setarr(parsedData);
//   },[]);
  

//   return (
//     <>
//       <div className="left">
//         <h2>Pocket Notes</h2> 
        
//           {
//             arr.map((obj, index) =>{
//               return <div key={index}>
//                 {console.log(obj.input)}
//                 <GroupName gname={obj.input} color={obj.color} />
//                 </div>
//             })
//           } 

//         <div className="notes">
//           <button className="addBtn" onClick={()=> {dispatch(createShowDivBtn())}}>
//             +
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import "./LeftDiv.css";
// import CreateGroup from "./CreateGroup.jsx";
import GroupName from "./GroupName.jsx";
import {useDispatch, useSelector } from 'react-redux';
import { createShowDivBtn } from '../redux/createSlice.js';

export default function LeftDiv() {
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  const val = useSelector(state => state.content.showDiv)
  // const val = useSelector(state => state.content.create);
  useEffect(() => {
    // Function to handle localStorage changes
    const handleStorageChange = () => {
      const storedData = localStorage.getItem("myArray");
      const parsedData = storedData ? JSON.parse(storedData) : [];
      console.log(parsedData)
      // for(let i = 0; i < parsedData.length; i++){
      //   console.log(parsedData[i]);
      // }
      setArr(parsedData);
    };

    // Set initial data from localStorage
    handleStorageChange();

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener("storage", handleStorageChange);
    // };
  }, [val]); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <div className="left">
        <h2 className="notes-heading">Pocket Notes</h2>
        {arr.map((obj) => {
          console.log(obj.input);
          return (
            <div key={obj.id} className="gnamediv">
              <GroupName gname={obj.input} color={obj.color} />
            </div>
          );
        })}
        <div className="notes">
          <button className="addBtn" onClick={()=> {dispatch(createShowDivBtn())}}>
             +
          </button>
        </div>
      </div>
    </>
  );
}
