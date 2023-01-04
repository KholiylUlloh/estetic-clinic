import React, { useState } from "react";
import MaleFront from "./maleFront";
import MaleBack from "./maleback";
import { FiCircle } from "react-icons/fi";
import { ReactComponent as Turn } from "../../assets/icons/rotate.svg";
import "./model.css";
import { Link } from "react-router-dom";

const MaleModel = ({ selectedAreas, handleAddOrDelete, handleSelectAll }) => {
  const [changeModel, setChangeModel] = useState(true);
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
          <FiCircle onClick={handleSelectAll} size={24} color="white" />
          <p>Tüm Vücut</p>
        </div>
        <div className="turn">
          <Turn onClick={() => setChangeModel(!changeModel)} />
          <p>Döndür</p>
        </div>
      </div>
      <div className="submit_btn">
        <Link to="/addmore" state={{ prev: "male" }}>
          <button>({selectedAreas.length}) Bölge seçim yap</button>
        </Link>
      </div>
    </div>
  );
};

export default MaleModel;
