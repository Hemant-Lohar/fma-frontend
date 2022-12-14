import { useState, useEffect } from "react";
import "./app.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [session, setSession] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    axios.get("https://fma-api.onrender.com/api/get").then((responce) => {
      setuserdata(responce.data);
      console.log(responce.data);
    });
  }, []);

  const register = async () => {
    await axios
      .post("https://fma-api.onrender.com/api/registration", {
        name: name,
        gender: gender,
        age: age,
        session: session,
      })
      .then(alert("Registration Successfully !"));
  };

  return (
    <div className="App">
      <h1>Admission form for the Yoga Classes</h1>

      <div className="form">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            name="gender"
            id="gneder"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="session">session</label>
          <input
            type="text"
            name="session"
            id="session"
            onChange={(e) => {
              setSession(e.target.value);
            }}
          />
        </div>

        <button onClick={register}>Submit</button>
      </div>

      <div className="list">
        <h3>data</h3>
        {userdata.map((item,key) => {
          return (
            <>
              <p key={item.name}>
                name: {item.name} | age: {item.age}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
