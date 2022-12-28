import React from "react";
import doctor from "../../assets/images/doctor.png";
import "./select.css";
import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";

const SelectGender = () => {
  return (
    <div className="selection_wrap">
      <div
        style={{ backgroundImage: `url(${doctor})` }}
        className="back_img"
      ></div>
      <div className="gender_selection">
        <div className="selection_title">Lütfen cinsiyetinizi seçin</div>
        <div className="genders">
          <div className="female_wrap">
            <div className="female">
              <img className="female_img" src={female} alt="" />
            </div>
            Kadın
          </div>
          <div className="male_wrap">
            <div className="male">
              <img className="male_img" src={male} alt="" />
            </div>
            Erkek
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectGender;
