import React from "react";
import { PanelElement } from '../../../component';
import './userEdit.css';
import ProfileModal from "./ProfileModal";
import {Button} from "reactstrap";
import {createBootstrapComponent} from "react-bootstrap/ThemeProvider";
import {scryRenderedComponentsWithType} from "react-dom/test-utils";


const UserEdit = ({avatar, username}) => {

    const changeImg = (e) => {
      let img = document.querySelector('.edit-avatar img');
          img.src = URL.createObjectURL(e.target.files[0]);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // let input = document.querySelector('#avatar'),
      //     formData = new FormData(document.forms[0]),
      //     file = input.files[0].name;

      //     formData.append('file', file);
          
      //     fetch('', {
      //       method: "post",
      //       headers: {
      //         ContentType: "application/json"
      //       },
      //       body:formData
      //     });

    }  

    return (
     <div>
         <form onSubmit={e => handleSubmit(e)} encType="multipart/form-data">
             <div className="panel">
                 <div>
                     <h1>PROFIL MA'LUMOTLARI</h1>
                     <div className="panel-content">
                         <div className="panel-offsets">
                             {/* <img src={require(`../../../svg/${avatar}.png`)} alt={username}/> */}
                             <input id="avatar" onChange={e => changeImg(e)} type="file" className="visually-hidden" name="avatar" accept=".png, .jpeg, .jpg" />
                             <label htmlFor="avatar"></label>
                             <img src={require(`../../../img/team-2.png`)} />
                         </div>
                         {/* <div className="username">
              <p>Umdsoft Online Academy /</p>
              {username}
            </div> */}
                         <div className="username">
                             <p>Umdsoft online academy/
                             </p>
                             Istamov Xurshid
                         </div>
                         <div className="user-info">
                             Profilingiz nomi umumiy
                             profildagi URL manzilingiz qismi
                             sifatida ishlatiladi
                         </div>
                     </div>
                 </div>
             </div>
             <button className="profile-buttons">o'zgartirish</button>
         </form>
         <ProfileModal/>
     </div>


    );
}

export default UserEdit;