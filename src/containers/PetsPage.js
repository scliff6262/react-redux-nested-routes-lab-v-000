import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div>
        <div>Pets Page</div>
        <PetsList/>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
