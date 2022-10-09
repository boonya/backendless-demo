import {ApolloError} from '@apollo/client/errors';

export function makeQueryResult(payload = {}) {
	const {data, errors, loading} = payload;

	const error = Array.isArray(errors)
		? new ApolloError({graphQLErrors: errors})
		: undefined;

	return {
		loading: Boolean(loading),
		data,
		error,
	};
}
