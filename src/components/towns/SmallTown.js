import React, { PropTypes } from 'react';
const SmallTown = ({ name, id, postal }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{postal}</td>
        </tr>
    );
};

SmallTown.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    postal: PropTypes.string.isRequired
};

export default SmallTown;