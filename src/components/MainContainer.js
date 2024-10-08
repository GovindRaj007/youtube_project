import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" px-6 w-full">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
