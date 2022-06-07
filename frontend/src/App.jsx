import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    age: ""
  })
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let res = await axios.get("https://asgn.shreyazz.repl.co/api/getData");
    setData(res.data);
  };
  const sendData = async () => {
    let res = await axios.post("https://asgn.shreyazz.repl.co/api/addData", {
      name: userInfo.name,
      email: userInfo.email,
      age: userInfo.age
    })
    console.log(res)
    getData()
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
  }
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo(prevState => ({
        ...prevState,
        [id]: value
    }));
  }
  return (
    <div>
      <div className="btnWrapper">
      <button onClick={getData}>Refresh Table</button>
      <button onClick={() => setAdd(!add)}>Add User</button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {data.map((user) => {
        return (
          <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
        </tr>
        );
      })}
      </table>
      {add && <form method="POST" onSubmit={handleSubmit}>
        <input type="text" placeholder="name" id="name" onChange={handleChange}/>
        <input type="email" placeholder="email" id="email" onChange={handleChange}/>
        <input type="number" placeholder="age" id="age" onChange={handleChange}/>
        <input type="submit" value="enter" />
      </form>}
    </div>
  );
};

export default App;
