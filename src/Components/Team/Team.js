import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {

    const {strAlternate,strCountry,strDescription,
strFacebook,strLeague,idTeam,strSport,strStadium,strTeamBadge,
strTwitter,strWebsite
} = props.tm;

 
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="card bor " >
            <div>
                <img className="img-fluid teamImg p-4 "
                src={strTeamBadge} alt="" srcset="" />
            </div>

            <div>

            <h6 className="text-center text-danger">{strAlternate}</h6>
          
<Link to ={'/teamdetails/'+idTeam}>
{props.showBtn && <button className="btn-danger"

onClick={()=>handleAddCountry(props.con)}

> Explore This Team</button>}



</Link>
            </div>

      

        </div>
    );
};

export default Team;