import {useQuery, gql} from '@apollo/client';
import PropTypes from 'prop-types';

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
 * @typedef {object} Result
 * @property {Me} [data]
 * @property {boolean} loading
 * @property {Error} [error]
 */

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

  return {
    data: state.data?.viewer,
    loading: Boolean(state.loading),
    error: state.error,
  }
}
