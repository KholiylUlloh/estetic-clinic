import React, { useState } from "react";
import FemaleBack from "./femaleBack";
import FemaleFront from "./femaleFront";
import { FiCircle } from "react-icons/fi";
import { ReactComponent as Turn } from "../../assets/icons/rotate.svg";
import "./model.css";
import { Link } from "react-router-dom";

const FemaleModel = ({
  handleAddOrDeleteKadin,
  selectedKadinAreas,
  handelSelectFemAll,
}) => {
  const [changeModel, setChangeModel] = useState(true);
  return (
    <div className="model-wrap">
      <div className="fem_model-area">
        {!changeModel ? (
          <FemaleBack
            handleAddOrDeleteKadin={handleAddOrDeleteKadin}
            selectedKadinAreas={selectedKadinAreas}
          />
        ) : (
          <FemaleFront
            handleAddOrDeleteKadin={handleAddOrDeleteKadin}
            selectedKadinAreas={selectedKadinAreas}
          />
        )}
        <div className="select_all">
          <FiCircle onClick={handelSelectFemAll} size={24} color="white" />
          <p>Tüm Vücut</p>
        </div>
        <div className="turn">
          <Turn onClick={() => setChangeModel(!changeModel)} />
          <p>Döndür</p>
        </div>
      </div>
      <div className="submit_btn">
        <Link to="/addmore" state={{ prev: "fem" }}>
          <button>({selectedKadinAreas.length}) Bölge seçim yap</button>
        </Link>
      </div>
    </div>
  );
};

export default FemaleModel;
