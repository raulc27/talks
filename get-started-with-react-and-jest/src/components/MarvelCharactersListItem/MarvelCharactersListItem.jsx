import React from 'react';
import PropTypes from 'prop-types';
import ListItemWithAvatar from '../ListItemWithAvatar';
import listItemWithAvatarStyle from '../ListItemWithAvatar/style/ListItemWithAvatar.scss';
import Style from './style/MarvelCharactersListItem.scss';

const MarvelCharactersListItem = ({ name, description, thumbnail }) => (
  <ListItemWithAvatar
    avatarUrl={thumbnail}
    style={{
      ...listItemWithAvatarStyle,
      avatar__root: Style.avatar__root,
    }}
  >
    <p>{name}</p>
    <p>{description}</p>
  </ListItemWithAvatar>
);

MarvelCharactersListItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string,
};

MarvelCharactersListItem.defaultProps = {
  description: '',
};

export default MarvelCharactersListItem;

