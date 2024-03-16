import React, { useContext } from "react";
import "./RightDiv.css";
import removebg from "../Images/removebg.png";
import CreateNewGroup from "./CreateGroup";
import { useSelector } from 'react-redux';


export default function RightDiv(props) {
  const showDiv = useSelector(state => state.content.showDiv);
   const createContent = useSelector(state => state.content.create);
  // const create = useSelector(state => state.content.create);
  return (

    <>
      <div className="img">
        <img src={removebg} alt="Description of the image" />
        <h2>Pocket Notes</h2>
        <span>{showDiv &&  <CreateNewGroup />}</span>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>

      </div>
    </>
  );
}
