import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import FemaleModel from "./components/genderModel/femaleModel";
import MaleModel from "./components/genderModel/maleModel";
import SelectGender from "./components/genderSelection/selectGender";
import Home from "./components/home/home";
import StoriesUI from "./components/storiesUI/storiesUI";
import "./global.css";

const Root = () => {
  let { username } = useParams();
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story">
          <Route path=":username" element={<StoriesUI />} />
        </Route>
        <Route path="/selectgender" element={<SelectGender />} />
        <Route path="/female" element={<FemaleModel />} />
        <Route path="/male" element={<MaleModel />} />
      </Routes>
    </div>
  );
};

export default Root;
