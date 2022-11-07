import {renderHook} from '../../../test/render';
import VALIDATION_ERROR_RESULT from './__data__/ValidationError';
import SUCCESSFUL_RESULT from './__data__/successful';
import VALIDATION_ERROR_RESPONSE from './__response__/ValidationError.json';
import SUCCESSFUL_RESPONSE from './__response__/successful.json';
import useFetchMe from './useFetchMe';
import {useQuery} from '@tanstack/react-query';

jest.mock('@tanstack/react-query');

function render() {
	return renderHook(() => useFetchMe());
}

it('initial', () => {
	useQuery.mockReturnValue({});

	const {result} = render();

	expect(result.current).toMatchApolloQueryResult();
});

it('loading', () => {
	useQuery.mockReturnValue({loading: true});

	const {result} = render();

	expect(result.current).toMatchApolloQueryResult({loading: true});
});

it('successful', () => {
	useQuery.mockReturnValue(makeQueryResult(SUCCESSFUL_RESPONSE));

	const {result} = render();

	expect(result.current).toMatchApolloQueryResult(SUCCESSFUL_RESULT);
});

it('ValidationError', () => {
	useQuery.mockReturnValue(makeQueryResult(VALIDATION_ERROR_RESPONSE));

	const {result} = render();

	expect(result.current).toMatchApolloQueryResult(VALIDATION_ERROR_RESULT);
});
