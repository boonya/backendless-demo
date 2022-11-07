import {useQuery} from '@tanstack/react-query';
import PropTypes from 'prop-types';

/**
 * @typedef {object} Me
 * @property {string} login
 * @property {string} name
 * @property {string} avatarUrl
 * @property {string} url
 * @property {Date} updatedAt
 * @property {Date} createdAt
 */
export const ME_SHAPE = {
	login: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	updatedAt: PropTypes.instanceOf(Date).isRequired,
	createdAt: PropTypes.instanceOf(Date).isRequired,
};

/**
 * @param {object} response
 * @returns {Me}
 */
function extract({data}) {
	if (!data?.login) {
		return null;
	}

	return {
		login: data.login,
		name: data.name,
		avatarUrl: data.avatar_url,
		url: data.url,
		updatedAt: data?.updated_at && new Date(data.updated_at),
		createdAt: data?.created_at && new Date(data.created_at),
	};
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
export default function useFetchMe() {
	const state = useQuery(['/user']);

	return {
		data: state.data && extract(state),
		loading: Boolean(state.loading),
		error: state.error,
	};
}
