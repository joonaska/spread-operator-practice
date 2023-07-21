import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setList((last) => [...last, item]);
    setItem("");
  }

  console.log(list);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((x) => (
            <li> {x} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
