import App from '.';
import wrapper from '../../../test/decorators/wrapper';
import MeProvider from '../../providers/Me';
import MeContextProvider from '../../providers/Me/ContextProvider';
import ME_DATA from '../../providers/Me/__data__/successful';
import {ApolloError} from '@apollo/client';
import {render, screen} from '@testing-library/react';

jest.mock('../../providers/Me');

it('should render Greetings if loading.', () => {
	MeProvider.mockImplementation(wrapper({loading: true}, MeContextProvider));

	render(<App />);

	screen.getByText('Please wait...');
});

it('should render Greetings if error.', () => {
	MeProvider.mockImplementation(wrapper({error: new ApolloError({graphQLErrors: []})}, MeContextProvider));

	render(<App />);

	screen.getByText('Hello, Mr(s)!');
});

it('should render Greetings if success.', () => {
	MeProvider.mockImplementation(wrapper(ME_DATA, MeContextProvider));

	render(<App />);

	screen.getByText('Hello, Dude Dudovich!');
});
