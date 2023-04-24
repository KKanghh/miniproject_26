import React, { useState, useContext } from "react";
import AuthContext from "../store/auth-context";
import { Button } from "react-bootstrap";
import "../App.css";

function Auth() {
  const ctx = useContext(AuthContext);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const buttonClickHandler = () => {
    ctx.onLogin(input.name);
  };
  return (
    <>
      <div class="loginForm">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous"></link>
        <form>
          <h3>당신의 혼밥 친구를 찾아보세요!</h3>
          <div class="loginBox">
            <div class="form-group">
              <label htmlFor="name" class="form-label mt-4">아이디</label>
              <input
                style={{ width: "90%", margin: "0 auto" }}
                class="form-control"
                type="text"
                name="name"
                value={input.name}
                onChange={inputHandler}
              />
            </div>

            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                style={{ width: "90%", margin: "0 auto" }}
                class="form-control"
                type="password"
                name="password"
                value={input.password}
                onChange={inputHandler}
              />
            </div>

            <div class="d-grid gap-2" style={{ width: "90%", margin: "30px auto 10px auto" }}>
              <button type="button" class="btn btn-lg btn-primary" onClick={buttonClickHandler}>Log in</button>

            </div>

            <div class="d-grid gap-2" style={{ width: "90%", margin: "0 auto 5% auto" }}>
              <button type="button" class="btn btn-lg btn-secondary">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Auth;
