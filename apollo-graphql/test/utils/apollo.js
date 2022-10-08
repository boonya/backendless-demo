import {ApolloError} from '@apollo/client';

export function makeQueryResult(payload = {}) {
	const {data, errors, loading} = payload;

	const error = errors?.length
		? new ApolloError({graphQLErrors: errors})
		: undefined;

	return {
		loading: Boolean(loading),
		data,
		error,
	};
}
