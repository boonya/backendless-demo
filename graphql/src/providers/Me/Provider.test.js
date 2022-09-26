import {render} from '@testing-library/react';
import DataProvider from '.';
import ContextProvider from './ContextProvider';
import {useQuery} from '@apollo/client';
import ME_RESPONSE from './__response__/successful';
import ME_DATA from './__data__/successful';

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

  it('error', () => {
    const error = new Error('Test');
    useQuery.mockReturnValue({error});

    renderComponent();

    expect(ContextProvider).toBeCalledTimes(1);
    expect(ContextProvider).toBeCalledWith({
      children: 'children',
      data: undefined,
      loading: false,
      error,
    }, {});
  });

  it('data', () => {
    useQuery.mockReturnValue({data: ME_RESPONSE});

    renderComponent();

    expect(ContextProvider).toBeCalledTimes(1);
    expect(ContextProvider).toBeCalledWith({
      children: 'children',
      data: ME_DATA,
      loading: false,
      error: undefined,
    }, {});
  });
});
