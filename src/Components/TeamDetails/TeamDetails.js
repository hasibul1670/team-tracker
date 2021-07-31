import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { teamContex } from '../../App';
import Team from '../Team/Team';

const TeamDetails = () => {
    const [state,setState] = useContext(teamContex);

    let { id } = useParams();

    const team = state.find (tm=>tm.idTeam === id )
    console.log(team);
  

    return (
        <div className="container border text-center ">
            <h2 className="text-danger text-bold ">Team Details</h2>
            <h3 className="text-success text-bold">Team Name:{team.strAlternate}</h3>
            <h5>Est: {team.intFormedYear}</h5>
            <p>{team.strDescriptionEN}</p>
            <h5>Related Sport Field : {team.strSport}</h5>

            <h3>League: {team.strLeague}</h3>
            <h4> country : {team.strCountry}</h4>
            <h5>Gender : {team.strGender}</h5>
            <Team tm={team}></Team>

     { team.strGender === 'Male' ?<img src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/06/22/a990dd9f-2561-4376-9647-44d1be9d0b02/kRzhvBqN.jpg" alt="" srcset="" /> :
<img src="https://i.pinimg.com/originals/44/65/e1/4465e19afb8d53d62289f6fec3045ca6.jpg" alt="" srcset="" />}
        </div>
    );
};

export default TeamDetails;