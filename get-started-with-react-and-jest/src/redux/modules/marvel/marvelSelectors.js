import MODULE_NAME from './marvelConstants';
import { asImmutable } from '../../../utils';

export const isFetchingCharacters = state => state.getIn([`${MODULE_NAME}`, 'isFetchingCharacters'], false);
export const getFetchCharactersError = state => state.getIn([`${MODULE_NAME}`, 'fetchError'], asImmutable({}));
export const getCharacters = state => state.getIn([`${MODULE_NAME}`, 'characters'], asImmutable({}));
