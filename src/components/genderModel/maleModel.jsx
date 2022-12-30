import React, { useState } from "react";
import MaleFront from "./maleFront";
import MaleBack from "./maleback";
import { FiCircle } from "react-icons/fi";
import { ReactComponent as Turn } from "../../assets/icons/rotate.svg";
import "./model.css";

const MaleModel = () => {
  const [changeModel, setChangeModel] = useState(true);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const handleAddOrDelete = (item) => {
    console.log(item);
    if (selectedAreas.includes(item)) {
      selectedAreas.splice(
        selectedAreas.findIndex((f) => f === item),
        1
      );
      setSelectedAreas([...selectedAreas]);
    } else {
      selectedAreas.push(item);
      setSelectedAreas([...selectedAreas]);
    }
  };
  return (
    <div className="model-wrap">
      <div className="model-area">
        {!changeModel ? (
          <MaleBack
            selectedAreas={selectedAreas}
            handleAddOrDelete={handleAddOrDelete}
          />
        ) : (
          <MaleFront
            selectedAreas={selectedAreas}
            handleAddOrDelete={handleAddOrDelete}
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
        <button>({selectedAreas.length}) Bölge seçim yap</button>
      </div>
    </div>
  );
};

export default MaleModel;
