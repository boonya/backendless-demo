import {useQuery, gql} from '@apollo/client';
import PropTypes from 'prop-types';
import {pick} from '../../utils/functions';

/**
 * @typedef {object} Me
 * @property {string} login
 * @property {string} name
 * @property {string} avatarUrl
 * @property {string} url
 * @property {string} websiteUrl
 */
export const ME_SHAPE = {
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

/**
 * @param {object} response
 * @returns {Me}
 */
function extract({data}) {
  return pick(data.viewer, Object.keys(ME_SHAPE));
}

/**
 * @typedef {object} Result
 * @property {Me} [data]
 * @property {boolean} loading
 * @property {Error} [error]
 */

/**
 * @returns {Result}
 */
export function useResponse(state) {
  return {
    data: state.data && extract(state),
    loading: Boolean(state.loading),
    error: state.error,
  }
}

/**
 * @returns {Result}
 */
export default function useFetchMe() {
  const state = useQuery(gql`query FetchMe {
    viewer {
      login
      name
      avatarUrl
      url
      websiteUrl
    }
  }`);

  return useResponse(state);
}
