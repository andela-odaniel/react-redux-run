import React, { PropTypes } from 'react';
import SmallTown from './SmallTown';

const TownListRow = ({name, id, towns}) => {
    debugger;
    return (
        <tr>
            <td>{name}</td>
            <td>{id}</td> 
            <td>{towns.map(obj => <SmallTown key={obj.id} id={obj.id} name={obj.name} postal={obj.postal} />)}</td> 
        </tr>    
    );
};

TownListRow.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    towns: PropTypes.array.isRequired
};

export default TownListRow;