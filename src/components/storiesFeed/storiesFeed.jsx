import React from "react";
import { useNavigate } from "react-router-dom";
import users from "../../utils/users";
import "./stories.css";

const StoriesFeed = () => {
  const navigate = useNavigate();
  const redirectToStories = (username) => {
    navigate(`/story/${username}`);
  };
  return (
    <div className="stories_wrapper">
      {users.map(({ id, name, img }) => {
        return (
          <div key={id} className="story_wrap">
            <div
              className="circle"
              onClick={() => redirectToStories(name.toLowerCase())}
            >
              <img className="user_img" src={img} alt="user" />
            </div>
            <div className="username">{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StoriesFeed;
