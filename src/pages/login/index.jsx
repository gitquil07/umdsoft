import React,{ useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Login = ({state}) => {

  let [phoneNumber, setPhoneNumber] = useState("");
  let [password, setPassword] = useState("");
  let [errorReg, setErrorReg] = useState("");
  
  let [toggle, setToggle] = useState(false);

  let innerState;
  if(typeof state == "undefined"){
    innerState = true; 
  }else{
    innerState = state;
  }

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
    <div className={`modalReg ${typeof state !== "undefined"? "modalReg__opacity-bg" : "modalReg__img-bg"} ${!innerState? "hideElem" : ""}`}>
      <div className={`closeModal ${typeof state == "undefined"? "hideElem" : ""}`}>
        <div className="closeModal-container">
          <div className="crossLine crossLine__right-to-bottom"></div>
          <div className="crossLine crossLine__left-to-bottom"></div>
        </div>
      </div>
      <div className="centerElement">
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
                    type={toggle? "text" : "password"}
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder={toggle? "" : "******************"} />
                    <i className={`fas fa-eye__grey ${toggle? 'fa-eye-slash' : 'fa-eye' }`} onClick={() => setToggle(!toggle)}></i>
              </div>
              <button type="submit" className="subBtn">kirish</button>
              <Link to="/forgotPswd" className="forgotPswd">Parolingizni unutingizmi</Link>
            </form>
          </div>
          <p className="formFooter">
            Sizda akkount yoqmi?!&nbsp;
            <Link to="/registration">Ro'yxatdan o'tish</Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Login;
