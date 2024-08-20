import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const newCount = useMemo(() => {
    console.log("Fonksiyon çalıştırıldı.");
    [new Array(100000)].forEach((item) => {});
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Sayacın değeri {count}
      </button>
      <p>Hesaplanan değer : {newCount}</p>
      <br></br>
      <br></br>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="İsminiz"
      ></input>
      <p>İsminiz : {name}</p>
    </div>
  );
};

export default UseMemo;
