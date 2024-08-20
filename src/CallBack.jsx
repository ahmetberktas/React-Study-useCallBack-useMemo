import React, { useState, useCallback } from "react";
import Button from "./Button";

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = useCallback(() => {
    setCount(count + 1);
  },[]);

  return (
    <div>
      <Button onClick={handleClick}></Button>
      <p>{count}</p>
      <p>{name}</p>
      <br></br>
      <br></br>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="İsim"
      ></input>
    </div>
  );
};

export default CallBack;
