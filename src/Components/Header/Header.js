import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { teamContex } from "../../App";
import Team from "../Team/Team";

const Header = () => {


    const [state,setState] = useContext(teamContex);

  let history = useHistory();

  const handleAddCountry =(country)=>{

    // history.push("/teamdetails");
      }

  return (
    <div className="container">
        

      <div className=" row m-3 p-3">
        {state.map((team) => (

<div className=" col col-md-6 col-sm-6 col-lg-3 card-deck">
          <Team tm={team} key={team.idTeam}
          
          handleAddCountry={handleAddCountry}
          showBtn={true}
          ></Team>



          </div>
        ))}
    
      </div>
    </div>
  );
};

export default Header;
