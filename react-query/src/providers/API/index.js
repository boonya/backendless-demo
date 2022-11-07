import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PropTypes from 'prop-types';

// Define a default query function that will receive the query key
const defaultQueryFn = async ({queryKey}) => {
	const result = await fetch(`${process.env.REACT_APP_GITHUB_API}${queryKey[0]}`, {
		headers: {
			Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
		},
	});
	return result.json();
};

// provide the default query function to your app via the query client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryFn: defaultQueryFn,
		},
	},
});

export default function API({children}) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}

API.propTypes = {
	children: PropTypes.node.isRequired,
};
