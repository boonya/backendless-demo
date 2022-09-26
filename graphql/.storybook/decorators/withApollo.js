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
  // eslint-disable-next-line react/display-name
  return (story) => (
    <ApolloProvider client={mockedClient} {...props}>
      {story()}
    </ApolloProvider>
  );
}

/**
 * @typedef {object} MswCallbackOptions
 * @property {number} [options.status] http status code (200 by default, 500 in case of error)
 * @property {number} [options.delay] delay to response in milliseconds (300 by default)
 * @property {Error} [options.error] An error object to throw
 *
 * @param {string} operation
 * @param {object} response
 * @param {MswCallbackOptions} [options]
 * @returns {Function}
 */
function createMswCallback(operation, response, options = {}) {
  const {error} = options;

  const delay = options.delay || 300;
  const status = options.status || error ? 500 : 200;

  return async (req, res, ctx) => {
    const args = [
      ctx.delay(delay),
      ctx.status(status),
    ];

    if (error) {
      args.push(ctx.data({error}));
    }
    else {
      args.push(ctx.data(response));
    }

    return res(...args);
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
  return graphql.query(queryName, createMswCallback(`query ${queryName}`, response, options));
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
  return graphql.mutation(mutationName, createMswCallback(`mutation ${mutationName}`, response, options));
}
