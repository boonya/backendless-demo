import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {graphql} from 'msw';

const mockedClient = new ApolloClient({
	uri: 'fake-graphql',
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
});

export default function withApollo(props) {
	return (story) => (
		<ApolloProvider client={mockedClient} {...props}>
			{story()}
		</ApolloProvider>
	);
}

/**
 * @typedef {object} MswCallbackOptions
 * @property {number} [options.statusCode] http status code (200 by default, 500 in case of error)
 * @property {number} [options.delay] delay to response in milliseconds (300 by default)
 *
 * @param {object} response
 * @param {MswCallbackOptions} [options]
 * @param {string} [operation]
 * @returns {Function}
 */
function createMswCallback(response, options) {
	const delay = options?.delay || 300;
	const statusCode = options?.statusCode || 200;

	return async (req, res, ctx) => {
		return res(
			ctx.delay(delay),
			ctx.status(statusCode),
			response?.data && ctx.data(response?.data),
			response?.errors && ctx.errors(response?.errors),
		);
	};
}

/**
 * @see https://mswjs.io/docs/
 *
 * @param {string} queryName
 * @param {object} response
 * @param {MswCallbackOptions} [options]
 * @returns {object}
 */
export function query(queryName, response, options) {
	return graphql.query(queryName, createMswCallback(response, options, `query ${queryName}`));
}

/**
 * @see https://mswjs.io/docs/
 *
 * @param {string} mutationName
 * @param {object} response
 * @param {MswCallbackOptions} [options]
 * @returns {object}
 */
export function mutation(mutationName, response, options) {
	return graphql.mutation(mutationName, createMswCallback(response, options, `mutation ${mutationName}`));
}
