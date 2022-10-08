import DataProvider from '.';
import {makeQueryResult} from '../../../test/utils/apollo';
import ContextProvider from './ContextProvider';
import ME_DATA from './__data__/successful.json';
import ME_RESPONSE_ERROR from './__response__/ValidationError.json';
import ME_RESPONSE from './__response__/successful.json';
import {ApolloError, useQuery} from '@apollo/client';
import {render} from '@testing-library/react';

jest.mock('@apollo/client');
jest.mock('./ContextProvider');

beforeEach(() => {
	ContextProvider.mockReturnValue(null);
});

function renderComponent() {
	return render(<DataProvider>children</DataProvider>);
}

it('components should have an appropriate displayName value.', () => {
	expect(DataProvider.displayName).toBe('Me.DataProvider');
	expect(ContextProvider.displayName).toBe('Me.ContextProvider');
});

describe('should interpolate response on to the context', () => {
	it('initially', () => {
		useQuery.mockReturnValue({});

		renderComponent();

		expect(ContextProvider).toBeCalledTimes(1);
		expect(ContextProvider).toBeCalledWith({
			children: 'children',
			data: undefined,
			loading: false,
			error: undefined,
		}, {});
	});

	it('loading', () => {
		useQuery.mockReturnValue({loading: true});

		renderComponent();

		expect(ContextProvider).toBeCalledTimes(1);
		expect(ContextProvider).toBeCalledWith({
			children: 'children',
			data: undefined,
			loading: true,
			error: undefined,
		}, {});
	});

	it('data', () => {
		useQuery.mockReturnValue(makeQueryResult(ME_RESPONSE));

		renderComponent();

		expect(ContextProvider).toBeCalledTimes(1);
		expect(ContextProvider).toBeCalledWith({
			children: 'children',
			data: ME_DATA,
			loading: false,
			error: undefined,
		}, {});
	});

	it('error', () => {
		useQuery.mockReturnValue(makeQueryResult(ME_RESPONSE_ERROR));

		renderComponent();

		expect(ContextProvider).toBeCalledTimes(1);
		expect(ContextProvider).toBeCalledWith({
			children: 'children',
			data: undefined,
			loading: false,
			// error: expect.objectContaining({graphqlErrors: ME_RESPONSE_ERROR.errors})
			error: expect.any(ApolloError),
		}, {});
	});
});
