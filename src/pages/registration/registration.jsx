import React, {useState} from "react";
import st from './registration.module.css';


const Registration = () => {

  let [username, setUsername] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [errorReg, setErrorReg] = useState("");


  const handleSubmit = async (e) =>  {
    let formData  = new FormData();

    formData.append("username", username);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password)

    // let dataToJson = {};
    // formData.forEach((value, name) => {
    //   dataToJson[name] = value;
    // });

    let response = await fetch("", {
      method: "post",
      body: formData
    });

    if(!response.ok){
      let error = response.json();
      setErrorReg(error.message);
    }

    e.preventDefault();
  }

  return(
    <div className={st.regWrapper}>
      <h1>Ro'yxatdan o'tish</h1>
      <div className={st.regForm}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">F.I.SH</label>
          <div className={st.inputs}>
            <input 
                id="username"
                type="text" 
                name="username"
                onChange={e => setUsername(e.target.value)}
                value={username} />
          </div>
          <label htmlFor="">Telefon</label>
          <div className={st.inputs}>
            <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                onChange={e => setPhoneNumber(e.target.value)}
                value={phoneNumber} />
          </div>
          <label htmlFor="password">Parol</label>
          <div className={st.inputs}>
            <input 
                id="password"
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password} />
          </div>
          <label htmlFor="confirmPassword">Parolni tasdiqlash</label>
          <div className={st.inputs}>
            <input 
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword} />
          </div>
          <button type="submit" className={st.subBtn}>ro'yxatdan o'tish</button>
        </form>
      </div>
      <span className={st.refToLogin}>
        Menda akkount bor! 
        <a href="#" >Kirish</a>
      </span>
    </div>
  );

};


export default Registration;