import React, { useState } from "react";
import FemaleBack from "./femaleBack";
import FemaleFront from "./femaleFront";
import { FiCircle } from "react-icons/fi";
import { ReactComponent as Turn } from "../../assets/icons/rotate.svg";
import "./model.css";

const FemaleModel = () => {
  const [changeModel, setChangeModel] = useState(true);
  const [selectedKadinAreas, setSelectedKadinAreas] = useState([]);
  const handleAddOrDeleteKadin = (item) => {
    if (selectedKadinAreas.includes(item)) {
      selectedKadinAreas.splice(
        selectedKadinAreas.findIndex((f) => f === item),
        1
      );
      setSelectedKadinAreas([...selectedKadinAreas]);
    } else {
      selectedKadinAreas.push(item);
      setSelectedKadinAreas([...selectedKadinAreas]);
    }
  };
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
          <FiCircle size={24} color="white" />
          <p>Tüm Vücut</p>
        </div>
        <div className="turn">
          <Turn onClick={() => setChangeModel(!changeModel)} />
          <p>Döndür</p>
        </div>
      </div>
      <div className="submit_btn">
        <button>({selectedKadinAreas.length}) Bölge seçim yap</button>
      </div>
    </div>
  );
};

export default FemaleModel;
