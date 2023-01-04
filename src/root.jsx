import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddMore from "./components/addMore/addMore";
import FemaleModel from "./components/genderModel/femaleModel";
import MaleModel from "./components/genderModel/maleModel";
import SelectGender from "./components/genderSelection/selectGender";
import Home from "./components/home/home";
import StoriesUI from "./components/storiesUI/storiesUI";
import "./global.css";

const Root = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const handleAddOrDelete = (item) => {
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
    // localStorage.setItem("item", selectedAreas);
  };
  const handleSelectAll = () => {
    const itemsObj = [
      "Yüz",
      "Boyun",
      "Göğüs",
      "Karın",
      "Omuz",
      "Genital",
      "Kol",
      "El Üstü",
      "Bacak",
      "Ayak Parmak Üstü",
      "Ense",
      "Sırt",
      "Bel",
    ];
    itemsObj.forEach((i) => {
      handleAddOrDelete(i);
    });
    // selectedAreas.splice(0, selectedAreas.length);
    // selectedAreas.push(...itemsObj);
    // console.log(selectedAreas);
  };

  const handelSelectFemAll = () => {
    const itemsObj = [
      "Yüz",
      "Boyun",
      "Göğüs",
      "Karın",
      "Kol",
      "El Üstü",
      "Bacak",
      "Ayak Parmak Üstü",
      "Ense",
      "Sırt",
      "Bel",
      "Dekolte",
      "Bikini Bölgesi",
      "Popo",
    ];
    itemsObj.forEach((i) => {
      handleAddOrDeleteKadin(i);
    });
  };

  const addMore = () => {
    setSelectedAreas([...selectedAreas, "Koltuk altı"]);
  };

  const addMoreFem = () => {
    setSelectedKadinAreas([...selectedKadinAreas, "Koltuk altı"]);
  };

  const [selectedKadinAreas, setSelectedKadinAreas] = useState([]);
  const handleAddOrDeleteKadin = (item) => {
    console.log(item);
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

  const deleteMaleItem = (item) => {
    let array = [...selectedAreas];
    let index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedAreas(array);
    }
  };
  const deleteFemItem = (item) => {
    let array = [...selectedKadinAreas];
    let index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
      setSelectedKadinAreas(array);
    }
  };
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story">
          <Route path=":username" element={<StoriesUI />} />
        </Route>
        <Route path="/selectgender" element={<SelectGender />} />
        <Route
          path="/female"
          element={
            <FemaleModel
              handleAddOrDeleteKadin={handleAddOrDeleteKadin}
              selectedKadinAreas={selectedKadinAreas}
              handelSelectFemAll={handelSelectFemAll}
            />
          }
        />
        <Route
          path="/male"
          element={
            <MaleModel
              selectedAreas={selectedAreas}
              handleAddOrDelete={handleAddOrDelete}
              handleSelectAll={handleSelectAll}
            />
          }
        />
        <Route
          path="/addmore"
          element={
            <AddMore
              selectedAreas={selectedAreas}
              selectedKadinAreas={selectedKadinAreas}
              addMore={addMore}
              deleteItem={deleteMaleItem}
              deleteFemItem={deleteFemItem}
              addMoreFem={addMoreFem}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Root;
