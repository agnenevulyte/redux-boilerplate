import React, { useState } from "react";
import { connect } from "react-redux";
import { saveUser } from "./Redux/actions";
import "./App.css";

function App(props) {
  console.log("Hi i am reduxified props ===>> ", props);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleInputUsername = e => {
    return setUser(e.target.value);
  };

  const handleInputPassword = e => {
    return setPassword(e.target.value);
  };
  const submitInfo = () => {
    // fire redux action
    props.updateUser(user, password);
  };

  return (
    <div className="App">
      <p>user: {props.user}</p>
      <p>pw: {props.password}</p>
      <p>uid: {props.uid}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
          marginLeft: "150px"
        }}
      >
        <input
          name="user"
          placeholder="user"
          onChange={e => handleInputUsername(e)}
        />

        <input
          name="password"
          placeholder="password"
          onChange={e => handleInputPassword(e)}
        />

        <button onClick={submitInfo}>Submit</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.appState.loading,
  error: state.appState.error,
  user: state.login.username,
  password: state.login.password,
  uid: state.login.uid
});

const mapDispatchToProps = dispatch => ({
  updateUser: (un, pw) => dispatch(saveUser(un, pw))
});

// const mapDispatchToProps = dispatch => ({
//   updateUser: (un, pw) => dispatch({ type: 'SAVE_USER', username: un, password: pw, })
// });
export default connect(mapStateToProps, mapDispatchToProps)(App);
