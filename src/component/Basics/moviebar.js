import React, { useState } from "react";
import "./style.css";
import Movies from "./movieApi.js";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Movies.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Moviebar = () => {
  const [menuData, setMenuData] = useState(Movies);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Movies);
      return;
    }

    const updatedList = Movies.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MovieCard menuData={menuData} />
    </>
  );
};

export default Moviebar;
