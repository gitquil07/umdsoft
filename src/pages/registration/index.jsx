import React, {useState} from "react";
import {Link} from 'react-router-dom';


const Registration = () => {

  let [username, setUsername] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [errorReg, setErrorReg] = useState("");

  let [toggle, setToggle] = useState(false);


  const handleSubmit = async (e) =>  {
    let formData  = new FormData(document.forms[0]);

    let dataToJson = {};
    formData.forEach((value, name) => {
      dataToJson[name] = value;
    });

    let response = await fetch("", {
      method: "post",
      body: JSON.stringify(dataToJson)
    });

    if(!response.ok){
      let error = response.json();
      setErrorReg(error.message);
    }

    e.preventDefault();
  }

  const setType = (e) => { 
    setToggle(!toggle);
    e.preventDefault();
  }


  return(
    <div className="regWrapper">
      <h1 className="formHeader">Ro'yxatdan o'tish</h1>
      <div className="regForm">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">F.I.SH</label>
          <div className="inputs">
            <span className="inputIcon"></span>
            <input 
                id="username"
                type="text" 
                name="username"
                onChange={e => setUsername(e.target.value)}
                value={username}
                placeholder="To'liq kiriting" />
          </div>
          <label htmlFor="">Telefon</label>
          <div className="inputs">
          <span className="inputIcon"></span>
            <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                onChange={e => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                placeholder="+998" />
          </div>
          <label htmlFor="password">Parol</label>
          <div className="inputs">
          <span className="inputIcon"></span>
            <input 
                id="password"
                type={toggle? 'text' : 'password'}
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="******************" />
                <button onClick={e => setType(e)}>{toggle? "hide" : 'show'}</button>
          </div>
          <label htmlFor="confirmPassword">Parolni tasdiqlash</label>
          <div className="inputs">
          <span className="inputIcon"></span>
            <input 
                id="confirmPassword"
                type={toggle? "text" : "password"}
                name="confirmPassword"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="******************" />
          </div>
          <button type="submit" className="subBtn">ro'yxatdan o'tish</button>
        </form>
      </div>
      <p className="formFooter">
        Menda akkount bor!&nbsp;
        <Link to="/login">Kirish</Link>
      </p>
    </div>
  );

};


export default Registration;