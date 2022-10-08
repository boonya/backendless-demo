import {MockedProvider} from '@apollo/client/testing';

export default function withApollo(options) {
	return (props) => <MockedProvider {...props} {...options} />;
}
