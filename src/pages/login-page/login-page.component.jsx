import React, { useState, useContext } from "react";
import { StyledLoginPage } from "./login-page.styles";
import Header from "../../components/header/header.component";
import api from "../../config.json";
import { TokenContext } from "../../contexts/contexts";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: ""
  });
  const { setToken } = useContext(TokenContext);
  const { userName, password } = userData;
  const handleSubmit = e => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Both user name and password should be provided.");
      return;
    }
    fetch(`${api.url}auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: userName, password })
    })
      .then(async res => {
        const json = await res.json();
        if (json.code === 200) setToken(json.data.token);
        else throw new Error();
      })
      .catch(() =>
        alert(
          "Something went wrong. Probably there's no such user in the back-end."
        )
      );
  };
  const handleChange = e => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  return (
    <StyledLoginPage>
      <Header classNames="login-header" />
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={userName}
            type="text"
            placeholder="User name"
            name="userName"
            id="userName"
            className="form-control"
          />
          <input
            onChange={handleChange}
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="form-control"
          />
          <input type="submit" className="btn btn-info" value="Log In" />
        </form>
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
