import React, { useState, useEffect } from "react";
import "./RightContent.css";


function RightContent() {
  const [message, setMessage] = useState("");
  const [messageArray, setMessageArray] = useState([]);
  const handleClick = () => {
    const storedData = localStorage.getItem("myArray");
      const parsedData = storedData ? JSON.parse(storedData) : [];
      console.log(parsedData[0].message)
      
  };


  // useEffect(() => {
  //   const storedData = localStorage.getItem("myArray");
  //     const parsedData = storedData ? JSON.parse(storedData) : [];
  //     setMessageArray(parsedData);
  // },[message]);

  return (
    <div className="contentArea">
      <header className="header">
        <p>heading here</p>
      </header>
      <div className="message">
        <div className="message_div">
          {messageArray.map((msg, index) => {
            return (
              <div key={index} className="data">
                {msg}
                <p>
                  {new Date().getHours()}:{new Date().getMinutes()}:
                  {new Date().getSeconds()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="input-box">
        <textarea
          type="text"
          placeholder="Enter your text"
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="send-btn" onClick={handleClick}>
          Send
        </p>
      </div>
    </div>
  );
}

export default RightContent;
