import React,{ useState } from "react";
import { Link } from "react-router-dom";


const ForgotPswd = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [errorReg, setErrorReg] = useState("");


  const handleSubmit = async (e) =>  {
    let formData  = new FormData(document.forms[0]);

    let dataToJson = {};
    formData.forEach((value, name) => {
      dataToJson[name] = value;
    });

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

  const close = e => {
    let message = e.target.parentElement,
        form = message.parentElement;

        // Remove message from form
        form.removeChild(message);

  }

  return(
    <div className="modalReg modalReg__img-bg">
      <div className="centerElement">

        <div className="regWrapper">
          <h1 className="formHeader">Parolni tiklash</h1>
          <div className="regForm">
            <div className="message">
              Ro'yxatdan o'tgan telefon raqamingizni kiriting.
    Aktivlashtirish kodi sizga yuboriladi.
              <span className="close" onClick={close}>x</span>
            </div>
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
              <p>
              Parolingizni qanday tiklash haqida sizga elektron pochta 
    xabarini yuboramiz.
              </p>
              <button type="submit" className="subBtn">Qo'llanmani jo'natish</button>
            </form>

          </div>
          <p className="formFooter">
            Parolni unutingizmi?&nbsp;
            <Link to="/registration">Kirish</Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default ForgotPswd;
