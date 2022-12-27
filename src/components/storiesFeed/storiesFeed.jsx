import React from "react";
import users from "../../utils/users";
import "./stories.css";

const StoriesFeed = ({ setShowStoriesModal, showStoriesModal }) => {
  return (
    <div className="stories_wrapper">
      {users.map(({ id, name, img }) => {
        return (
          <div key={id} className="story_wrap">
            <div className="circle" onClick={() => setShowStoriesModal(true)}>
              <img src={img} alt="user" />
            </div>
            <div className="username">{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StoriesFeed;
