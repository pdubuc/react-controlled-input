import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={changeNameHandler} />
      <p>{name}</p>
    </div>
  );
}
