import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  if (!isMenuOpen) return null; // Early return pattern

  return (
    <div id="menu" className="mt-[50px] h-full  z-10 p-5 shadow-lg w-48  font-normal bg-white sticky  ">
      <ul className="flex flex-col gap-2 pb-2 border-b-[0.5px] border-gray-400">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="flex flex-col gap-2 py-2 border-b-[0.5px] border-gray-400">
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li>Your clips</li>
      </ul>

      <h2 className=" py-2 font-semibold">Subscriptions</h2>
      <ul className="flex flex-col gap-2">
        <li>India Today</li>
        <li>TV9 Telugu Live</li>
        <li>NDTV</li>
        <li>TEDx Talks</li>
        <li>cricket.com</li>
        <li>Star Sports</li>
      </ul>

      <h2 className=" py-2 font-semibold">Explore</h2>
      <ul className="flex flex-col gap-2">
        <li>Trending</li>
        <li>Shopping</li>
        <li>News</li>
        <li>Live</li>
        <li>Courses</li>
        <li>Playables</li>
      </ul>
    </div>
  );
};

export default SideBar;
