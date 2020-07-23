import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading';
import List from '../List';
import MarvelCharactersListItem from '../MarvelCharactersListItem';

class MarvelCharactersList extends Component {
  renderCharacter = character => (
    <MarvelCharactersListItem
      key={character.get('id')}
      name={character.get('name')}
      thumbnail={`${character.getIn(['thumbnail', 'path'])}.${character.getIn(['thumbnail', 'extension'])}`}
      description={character.get('description')}
    />
  );
  render() {
    const { characters, isLoading } = this.props;
    return (
      <Fragment>
        {
          isLoading ? (
            <Loading color="#999" type="spin" />
          ) : (
            <List>
              {
                characters
                .map(this.renderCharacter)
                .reduce((acc, curr) => {
                  acc.push(curr);
                  return acc;
                }, [])
              }
            </List>
          )
        }
      </Fragment>
    );
  }
}

MarvelCharactersList.propTypes = {
  characters: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MarvelCharactersList;
