import React, { createContext, useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import NoMatch from "./Components/NoMatch/NoMatch";
import TeamDetails from "./Components/TeamDetails/TeamDetails";



export const teamContex =createContext();

function App() {

  const [state, setState] = useState([]);

  
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=")

      .then((data) => data.json())
      .then((data) => {
        setState(data.teams);
      });
  }, []);

  return (

    <teamContex.Provider value={[state, setState] } >



    <Router>
 <Switch>
 <Route  path="/teamdetails/:id">
          <TeamDetails></TeamDetails>

          </Route>

 <Route exact path="/">
          <Header></Header>

          </Route>


          <Route path="*">
            <NoMatch />
          </Route>

          </Switch>
    


    </Router>

    </teamContex.Provider>
 
  

  );
}

export default App;
