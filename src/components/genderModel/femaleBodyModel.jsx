import React, { useState } from "react";
import femaleBodyFront from "../../assets/images/model_kadin_on.png";
import femaleBodyBack from "../../assets/images/model_kadin_arka.png";
import { ReactComponent as NavigateBack } from "../../assets/icons/navbackicon.svg";
import { ReactComponent as Rotate } from "../../assets/icons/rotate.svg";
import "./model.css";
import { Link } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";

const FemaleBodyModel = () => {
  const [changemodel, setChangeModel] = useState(false);
  return (
    <div className="model_wrap">
      <Link to={"/selectgender"}>
        <NavigateBack className="nav_back" />
      </Link>
      {changemodel ? (
        <img className="body_model" src={femaleBodyFront} alt="front" />
      ) : (
        <img src={femaleBodyBack} alt="back" />
      )}
      <div className="action_icon">
        <FaRegCircle size={24} fill="white" />
        <p>Tüm Vücut</p>
      </div>
      <div className="rotate_icon">
        <Rotate onClick={() => setChangeModel(!changemodel)} />
        Döndür
      </div>
      <button className="select_btn">(4) Bölge seçim yap</button>
    </div>
  );
};

export default FemaleBodyModel;
