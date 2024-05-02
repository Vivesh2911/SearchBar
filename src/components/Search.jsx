import React, { useState } from 'react';

export default function Search() {
  const [data, setData] = useState("");
  const [val, setVal] = useState([]);
  const arr = [
    'apple',
    'mango',
    'guava',
    'litchi',
    'grapes',
    'watermelon'
  ];

  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleClick = () => {
    setVal(arr.filter(item => item.includes(data)));
  }

  return (
    <div>
      <input type="text" placeholder='Search Here' onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <ul>

        {val.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
