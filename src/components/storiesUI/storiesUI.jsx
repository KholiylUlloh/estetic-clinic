import React from "react";
import "./storiesUI.css";
import Stories from "react-insta-stories";
import { useParams } from "react-router-dom";

const StoriesUI = () => {
  // const storiesData = {
  //   "John":[{
  //     type: "image",
  //     url: "https://img.kingpowerclick.com/cdn-cgi/image/format=auto/kingpower-com/image/upload/w_640,h_640/v1638154417/prod/4543139-L1.jpg"
  //   }]
  // }

  const stories = [
    "https://res.cloudinary.com/dvlhps1ij/image/upload/v1672204899/sailboat-gcd0df3802_640_pcd5xl.jpg",
    "https://res.cloudinary.com/dvlhps1ij/image/upload/v1672204904/horse-gfde2e24f4_640_faxkra.jpg",
  ];

  const params = useParams();
  console.log(params);
  return (
    <div className="outer_wrap">
      <Stories
        storyStyles={{ width: "100vw", height: "100vh", borderRadius: "1px" }}
        loop
        stories={stories}
        width={"100%"}
        height={"100vh"}
      />
    </div>
  );
};

export default StoriesUI;
