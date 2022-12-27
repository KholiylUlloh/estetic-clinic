import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Stars } from "../../assets/icons/stars.svg";
import { ReactComponent as About } from "../../assets/icons/about.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/right.svg";
import { Slide } from "react-reveal";
import "./home.css";
import StoriesFeed from "../storiesFeed/storiesFeed";
import StoriesUI from "../storiesUI/storiesUI";

const Home = () => {
  const [showStoriesModal, setShowStoriesModal] = useState(false);
  return (
    <div className="home_wrap">
      <div className="header">
        <Logo />
        <Phone />
      </div>
      <div className="promotion_wrap">
        <div className="promotion">
          <div className="title">Lazer epilasyonda</div>
          <div className="subtitle">%98 başarı oranı</div>
          <div className="rating">
            <Stars />
          </div>
        </div>
      </div>
      <Slide left>
        <div className="about_wrap">
          <div className="about_service">
            <div className="right">
              <About />
              Hizmet hakkında bilgi
            </div>
            <div className="left">
              <RightIcon />
            </div>
          </div>
        </div>
      </Slide>
      <Slide top>
        <div className="google_wrap">
          <div className="google_comments">
            <div className="right">
              <Google />
              Google yorumları gör
            </div>
            <div className="left">
              <RightIcon />
            </div>
          </div>
        </div>
      </Slide>
      <div className="stories_section">
        <div className="story_title">Stories</div>
        <StoriesFeed
          setShowStoriesModal={setShowStoriesModal}
          showStoriesModal={showStoriesModal}
        />
      </div>
      <div className="purchase_btn-wrap"></div>
      {showStoriesModal ? <StoriesUI /> : null}
    </div>
  );
};

export default Home;
