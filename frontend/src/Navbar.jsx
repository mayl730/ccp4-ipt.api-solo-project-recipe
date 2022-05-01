import React from "react";
// import Upload from "./Upload.jsx";

export default function Navbar(props) {
  const { setView, setPhotos, photos } = props;
  return (
    <div className="navbar">
      <h1>Recipe API</h1>
      <ul>
        <li>All</li>
        <li>Search (Id or Name)</li>
        <li>Search (Calories)</li>
        <li>Search (Ingredients)</li>
        <li>Add Recipe</li>
        <li>Edit Recipe</li>
        <li>Delete Recipe</li>
      </ul>
      <p
        className=""
        onClick={() => {
          setView("Home");
        }}
      >
        Home
      </p>

      {/* <Upload setPhotos={setPhotos} photos={photos} /> */}
    </div>
  );
}
