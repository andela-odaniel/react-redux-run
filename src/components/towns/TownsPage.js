import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as townsActions from '../../actions/townsActions';
import TownList from './TownsList';

class TownsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            towns: []
        };
        this.filterTownsByCityName = this.filterTownsByCityName.bind(this);
        this.filterTownsByTownName = this.filterTownsByTownName.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            towns: nextProps.towns
        });
    }

    filterTownsByCityName(event){
        const cityName = event.target.value;
        if(cityName.length > 0) {
            this.setState({ 
                towns: this.props.towns.filter((city) => {
                    return city.name.indexOf(cityName) >= 0;
                })
            });
        }else{
            this.setState({
                towns: this.props.towns
            });
        }
        
    }

    filterTownsByTownName(event){
        const townName = event.target.value;
        if(townName.length > 0){
            this.setState({ 
                towns: this.props.towns.filter((city) => {
                    return city.towns.filter(town => town.name.indexOf(townName) > -1 ).length > 0;
                })
            });
        }else{
            this.setState({
                towns: this.props.towns
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Towns</h1>
                <input type="text" onChange={this.filterTownsByTownName}/>
                <TownList towns={this.state.towns} />
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