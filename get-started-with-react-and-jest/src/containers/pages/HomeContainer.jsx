import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MarvelCharactersList from '../../components/MarvelCharactersList';
import ViewContainer from '../ViewContainer';
import { marvel } from '../../redux';

class HomeContainer extends Component {
  componentDidMount = () => {
    const { fetchCharactersAction } = this.props;
    fetchCharactersAction();
  }
  render() {
    const { isFetchingCharacters, characters } = this.props;
    return (
      <ViewContainer title="Marvel characters list">
        <MarvelCharactersList
          characters={characters}
          isLoading={isFetchingCharacters}
        />
      </ViewContainer>
    );
  }
}

HomeContainer.propTypes = {
  isFetchingCharacters: PropTypes.bool.isRequired,
  fetchCharactersAction: PropTypes.func.isRequired,
  characters: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = createStructuredSelector({
  isFetchingCharacters: marvel.selectors.isFetchingCharacters,
  characters: marvel.selectors.getCharacters,
});

const mapDispatchToProps = {
  fetchCharactersAction: marvel.actions.fetchCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
