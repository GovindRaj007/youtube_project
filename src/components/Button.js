import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="w-max px-4 py-1 my-5 mr-2 bg-gray-200 rounded-md hover:scale-105 ease-in-out duration-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
