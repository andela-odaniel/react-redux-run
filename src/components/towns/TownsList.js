import React, { PropTypes } from 'react';
import TownListRow from './TownListRow';

const TownList = ({ towns }) => {
    // debugger;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th> 
                    <th>ID</th>
                    <th>Towns</th>
                </tr>    
            </thead>
            <tbody>
                {towns.map(town => <TownListRow key={town.id} name={town.name} id={town.id} towns={town.towns} />)}    
            </tbody>
        </table>    
    );
};

TownList.propTypes = {
    towns: PropTypes.array.isRequired
};

export default TownList;