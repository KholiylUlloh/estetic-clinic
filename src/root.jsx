import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./components/home/home";
import StoriesUI from "./components/storiesUI/storiesUI";
import "./global.css";

const Root = () => {
  let { username } = useParams();
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/story">
          <Route path=":username" element={<StoriesUI />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export default Root;
