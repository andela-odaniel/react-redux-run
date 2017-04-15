import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as townsActions from '../../actions/townsActions';
import TownList from './TownsList';

class TownsPage extends React.Component {
    constructor(props, context) {
        // debugger;
        super(props, context);
    }

    // townRow(town, index) {
    //     // debugger;
    //     return <div key={index}>{town.name}</div>;
    // }

    render() {
        // debugger;
        return (
            <div>
                <h1>Towns</h1>
                <TownList towns={this.props.towns} />
            </div>
        );
    }
}

    // actions: PropTypes.object.isRequired,
TownsPage.propTypes = {
    towns: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    // debugger;
    return {
        towns: state.towns
    };
}


// mapDispatchToProps determine which actions are available in the component
function mapDispatchToProps(dispatch) {
    // debugger;
    return {
        // getTowns: town => dispatch(townsActions.getTowns())
        // bindActionCreators wiil go through townsActions and find all actions then wrap it and pass to dispatch
        actions: bindActionCreators(townsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TownsPage);