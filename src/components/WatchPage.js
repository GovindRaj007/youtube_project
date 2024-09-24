import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex gap-4 ml-[140px] pt-[24px] box-border absolute mt-[57px]  ">
      <div className="flex flex-col basis-[60%]">
        <div>
          <iframe
            className="rounded-xl"
            width="862"
            height="479"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <CommentsContainer videoId={searchParams.get("v")} />
        </div>
      </div>
      <div className="basis-[30%] pr-[24px]">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
