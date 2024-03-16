import React, { useState } from "react";

function Textarea(){
  const [message, setMessage] = useState("");
    return(
        <div className="box">
        <textarea
          type="text"
          placeholder="Enter your text"
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="send-btn">
          Send
        </p>
      </div>
    )
}
export default Textarea;