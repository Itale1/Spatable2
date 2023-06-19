

import React, { useState, useEffect } from "react"


function App() {
  const [spatable, setSpatable] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(res => setSpatable(res)) // принимает таблицу
    
  }, []);
  


return (
  
  <table className="table table-striped">
  <thead>

    <tr>

      <th>Дата</th>
      <th>Название</th>
      <th>Количество</th>
      <th>Расстояние</th>
    </tr>
  </thead>
  <tbody>
    {spatable.map((val, key) => {
        return (
          <tr key={key}>
          <td>{val.date}</td>
          <td>{val.name}</td>
          <td>{val.quanity}</td>
          <td>{val.distance}</td>
        </tr>
     
      )
    })}
  </tbody>
</table>

);
 
  
}

export default App;
