import React from "react";
// import chooseHall from "./chooseHall";
// import {userHistory} from "react-dom"
// import ReactDOM from "react-dom";

const MovieCard = ({ menuData }) => {

  // let history = userHistory()
  //   console.log(menuData);

  return (
    <>
        
      <section className="main-card--cointainer">
  
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <switch>
                  <a href="D:\test\complete_react2021\public\images\form.html">
                  <span className="card-tag  subtle">
          
                      Book Now </span>
                
                  ``
                 </a>
                 </switch>
                 
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MovieCard;
