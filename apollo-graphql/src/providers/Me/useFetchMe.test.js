import {renderHook} from '../../../test/render';
import {makeQueryResult} from '../../../test/utils/apollo';
import VALIDATION_ERROR_DATA from './__data__/ValidationError';
import SUCCESSFUL_DATA from './__data__/successful';
import VALIDATION_ERROR_RESPONSE from './__response__/ValidationError.json';
import SUCCESSFUL_RESPONSE from './__response__/successful.json';
import useFetchMe from './useFetchMe';
import {useQuery} from '@apollo/client';

jest.mock('@apollo/client');

function render() {
	return renderHook(() => useFetchMe());
}

it('successful', () => {
	useQuery.mockReturnValue(makeQueryResult(SUCCESSFUL_RESPONSE));

	const {result} = render();

	expect(result.current).toEqual(SUCCESSFUL_DATA);
});

it('ValidationError', () => {
	useQuery.mockReturnValue(makeQueryResult(VALIDATION_ERROR_RESPONSE));

	const {result} = render();

	expect(result.current).toEqual(VALIDATION_ERROR_DATA);
});
