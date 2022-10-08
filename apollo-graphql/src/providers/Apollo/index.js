import {logError} from '../../utils/logger';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import PropTypes from 'prop-types';
import {useMemo} from 'react';

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_GITHUB_API,
});

const authLink = setContext((_, {headers}) => {
	const token = process.env.REACT_APP_GITHUB_TOKEN;
	if (!token?.trim()) {
		logError('Auth token:')(`To authenticate requests, please generate a **new personal auth token** from https://github.com/settings/tokens with the following scopes:

    \`\`\`
    repo
      repo:status
      repo_deployment
      public_repo
    admin:org
      read:org
    user[all]
    \`\`\`
    `);
	}
	return {headers: {...headers, authorization: `Bearer ${token}`}};
});

const logErrors = onError(({operation, graphQLErrors, networkError}) => {
	if (graphQLErrors?.length) {
		logError(`GraphQL: "${operation.operationName}" operation has failed.`)(graphQLErrors);
	}
	if (networkError) {
		logError(`Network: "${operation.operationName}" operation has failed.`)(networkError, networkError.errors);
	}
});

export default function ApolloBootstrap({children}) {
	const client = useMemo(() => {
		return new ApolloClient({
			link: from([authLink, logErrors, httpLink]),
			connectToDevTools: true,
			cache: new InMemoryCache(),
		});
	}, []);

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
}

ApolloBootstrap.propTypes = {
	children: PropTypes.node.isRequired,
};
