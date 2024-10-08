import React from "react";
import Button from "./Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const list = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Skills",
  "Data structures",
  "Sketch comedy",
  "Dj",
  "Mantras",
  "JavaScript",
  "Movies",
  "Courses",
  "Recently uploaded",
  "Watched",
  "Meditation Music",
];

const ButtonList = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="absolute mt-[50px] w-5/6 overflow-x-auto flex items-center ">
      <IoIosArrowBack className="cursor-pointer" onClick={slideLeft} />
      <div
        id="slider"
        className="w-full h-full flex overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth"
      >
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
      <IoIosArrowForward className="cursor-pointer  " onClick={slideRight} />
    </div>
  );
};

export default ButtonList;
