import React from "react";
import "./storiesUI.css";
import Stories from "react-insta-stories";
import storiesData from "../../utils/stories";

const StoriesUI = () => {
  return (
    <div className="container">
      <Stories
        loop={true}
        stories={storiesData}
        defaultInterval={7000}
        width={"100vw"}
      />
    </div>
  );
};

export default StoriesUI;
