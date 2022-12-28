import React, { useState } from "react";
import femaleBodyFront from "../../assets/images/model_kadin_on.png";
import femaleBodyBack from "../../assets/images/model_kadin_arka.png";
import { ReactComponent as NavigateBack } from "../../assets/icons/navbackicon.svg";
import { ReactComponent as ActionInfo } from "../../assets/icons/actioninfo.svg";
import { ReactComponent as Rotate } from "../../assets/icons/rotate.svg";
import "./model.css";
import { Link } from "react-router-dom";

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
      <ActionInfo color="white" className="action_icon" />
      <Rotate
        onClick={() => setChangeModel(!changemodel)}
        className="rotate_icon"
      />
    </div>
  );
};

export default FemaleBodyModel;
