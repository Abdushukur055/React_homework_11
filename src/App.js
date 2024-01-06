import React, { useState } from "react";
import "./component/first.css";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, title: "Abdushukur", check: false },
    { id: 2, title: "Muhammad", check: false },
    { id: 3, title: "Abduvoris", check: false },
  ]);
  const [actives, setActives] = useState([
    { id: 4, title: "Nodir", check: false },
  ]);

  const handleChangeUsers = (id) => {
    users.forEach((item) => {
      if (item.id === id) {
        item.check = !item.check;
      }
    });
  };
  const handleChangeActives = (id) => {
    actives.forEach((item) => {
      if (item.id === id) {
        item.check = !item.check;
      }
    });
  };

  const movetoItems = () => {
    users.forEach((item, index) => {
      if (item.check === true) {
        actives.push({ ...item, check: false });
        users.splice(index, 1);
        setActives([...actives]);
      }
    });
  };

  const movetoActives = () => {
    actives.forEach((item, index) => {
      if (item.check === true) {
        users.push({ ...item, check: false });
        actives.splice(index, 1);
        setUsers([...users]);
      }
    });
  };

  return (
    <div className="box-header">
      <div className="box">
        <h1>Users</h1>
        {users.map((item) => {
          return (
            <div className="box2">
              <span>
                {item.title}
                <input
                  type="checkbox"
                  onChange={() => handleChangeUsers(item.id)}
                />
              </span>
            </div>
          );
        })}
        <button onClick={movetoItems}>Otkazish</button>
      </div>
      <div className="box">
        <h1>Actives</h1>
        {actives.map((item) => {
          return (
            <div className="box2">
              <span>
                {item.title}
                <input
                  type="checkbox"
                  onChange={() => handleChangeActives(item.id)}
                />
              </span>
            </div>
          );
        })}
        <button onClick={movetoActives}>Otkazish</button>
      </div>
    </div>
   
  )
}

