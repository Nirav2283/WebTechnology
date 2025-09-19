import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";


export default function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (data) => {
    setUser(data);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{handleLogin , user , handleLogout}}>
      {user ? <Dashboard /> : <Login />}
    </UserContext.Provider>
  )
}


function Login() {
  const {handleLogin} = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (username == "Nirav" && password == "1234") {
      handleLogin(username)
    } else {
      alert("invalid data");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">LOGIN</button>
    </form>
  );
}

function Dashboard() {
  const {user , handleLogout} = useContext(UserContext)
  return (
    <>
      <h1>Hello , {user} </h1>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
  
}
