import {makeQueryResult} from '../../../test/utils/apollo';
import ContextProvider from './ContextProvider';
import ME_RESPONSE from './__response__/successful.json';
import {useResponse} from './useFetchMe';
import PropTypes from 'prop-types';

export default function FakeProvider({children, ...response}) {
	const queryResult = makeQueryResult({...ME_RESPONSE, ...response});
	const payload = useResponse(queryResult);

	return <ContextProvider {...payload}>{children}</ContextProvider>;
}

FakeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
