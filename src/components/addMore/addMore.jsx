import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/icons/icon-add.svg";
import { ReactComponent as Close } from "../../assets/icons/icon-close.svg";
import "./addmore.css";

const AddMore = ({
  selectedAreas,
  selectedKadinAreas,
  addMore,
  deleteItem,
  deleteFemItem,
  addMoreFem,
}) => {
  const location = useLocation();
  // const itemsData = localStorage.getItem("item").split(",");
  const state = location.state.prev.includes("male");
  return (
    <div className="addmore">
      <div className="add_item-wrap">
        <div className="title">Seçim yapabilirsiniz;</div>
        <div className="add_item">
          Koltuk altı
          <Plus onClick={state ? addMore : addMoreFem} />
        </div>
      </div>
      <div className="selected_items-wrap">
        <div className="title">Seçimiş olduğunuz bölgeler;</div>
        <div className="selected_items">
          {state
            ? selectedAreas?.map((item, idx) => {
                return (
                  <div key={idx + 1} className="selected_item">
                    {item}
                    <Close onClick={() => deleteItem(item)} />
                  </div>
                );
              })
            : selectedKadinAreas?.map((item, idx) => {
                return (
                  <div key={idx + 1} className="selected_item">
                    {item}
                    <Close onClick={() => deleteFemItem(item)} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default AddMore;
