import React, { useState } from "react";
import MaleBodyFront from "../../assets/images/model_erkek.png";
import MaleBodyBack from "../../assets/images/model_erkek_arka.png";
import { ReactComponent as NavigateBack } from "../../assets/icons/navbackicon.svg";
import { ReactComponent as ActionInfo } from "../../assets/icons/actioninfo.svg";
import { ReactComponent as Rotate } from "../../assets/icons/rotate.svg";
import "./model.css";
import { Link } from "react-router-dom";

const MaleBodyModel = () => {
  const [changemodel, setChangeModel] = useState(false);
  return (
    <div className="model_wrap">
      <Link to={"/selectgender"}>
        <NavigateBack className="nav_back" />
      </Link>
      {changemodel ? (
        <img className="body_model" src={MaleBodyFront} alt="front" />
      ) : (
        <img src={MaleBodyBack} alt="back" />
      )}
      <ActionInfo color="white" className="action_icon" />
      <Rotate
        onClick={() => setChangeModel(!changemodel)}
        className="rotate_icon"
      />
    </div>
  );
};

export default MaleBodyModel;
