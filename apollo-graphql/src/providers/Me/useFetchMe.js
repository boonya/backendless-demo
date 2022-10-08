import {pick} from '../../utils/functions';
import {useQuery} from '@apollo/client';
import {loader} from 'graphql.macro';
import PropTypes from 'prop-types';

const QUERY_FETCH_ME = loader('./FetchMe.gql');

/**
 * @typedef {object} Me
 * @property {string} login
 * @property {string} name
 * @property {string} avatarUrl
 * @property {string} url
 * @property {string} websiteUrl
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */
export const ME_SHAPE = {
	login: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	websiteUrl: PropTypes.string.isRequired,
	updatedAt: PropTypes.instanceOf(Date).isRequired,
	createdAt: PropTypes.instanceOf(Date).isRequired,
};

/**
 * @param {object} response
 * @returns {Me}
 */
function extract({data}) {
	const result = pick(data?.viewer, Object.keys(ME_SHAPE));

	if (!result) {
		return null;
	}

	return {
		...result,
		updatedAt: result?.updatedAt && new Date(result.updatedAt),
		createdAt: result?.createdAt && new Date(result.createdAt),
	};
}

/**
 * @typedef {object} Result
 * @property {Me} [data]
 * @property {boolean} loading
 * @property {import('@apollo/client').ApolloError} [error]
 */

/**
 * @returns {Result}
 */
export function useResponse(state) {
	return {
		data: state.data && extract(state),
		loading: Boolean(state.loading),
		error: state.error,
	};
}

/**
 * @returns {Result}
 */
export default function useFetchMe() {
	const state = useQuery(QUERY_FETCH_ME);

	return useResponse(state);
}
