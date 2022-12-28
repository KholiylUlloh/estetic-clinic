import React from "react";
import doctor from "../../assets/images/doctor.png";
import "./select.css";
import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";
import { Link } from "react-router-dom";

const SelectGender = () => {
  return (
    <div className="selection_wrap">
      <div className="content_wrap">
        <img src={doctor} alt="doctor" />
        <div className="gender_selection">
          <div className="selection_title">Lütfen cinsiyetinizi seçin</div>
          <div className="genders">
            <Link to={"/female"} className="female_wrap">
              <div className="female">
                <img className="female_img" src={female} alt="" />
              </div>
              Kadın
            </Link>
            <Link to={"/male"} className="male_wrap">
              <div className="male">
                <img className="male_img" src={male} alt="" />
              </div>
              Erkek
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectGender;
