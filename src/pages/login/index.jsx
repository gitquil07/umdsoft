import React,{useState} from "react";
import { Link } from "react-router-dom";


const Login = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [errorReg, setErrorReg] = useState("");


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

  return(
    <div className="regWrapper">
      <h1 className="formHeader">Tizimga kirish</h1>
      <div className="regForm">
        <form onSubmit={handleSubmit} className="form">
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
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="******************" />
          </div>
          <button type="submit" className="subBtn">kirish</button>
          <Link to="/forgot password" className="forgotPswd">Parolingizni unutingizmi</Link>
        </form>
      </div>
      <p className="formFooter">
        Sizda akkount yoqmi?!&nbsp;
        <Link to="/registration">Ro'yxatdan o'tish</Link>
      </p>
    </div>
  );
};


export default Login;
