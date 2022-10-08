import App from '.';
import wrapper from '../../../test/decorators/wrapper';
import {makeQueryResult} from '../../../test/utils/apollo';
import MeProvider from '../../providers/Me';
import MeFakeProvider from '../../providers/Me/FakeProvider';
import ME_RESPONSE_ERROR from '../../providers/Me/__response__/ValidationError.json';
import ME_RESPONSE from '../../providers/Me/__response__/successful.json';
import {render, screen} from '@testing-library/react';

jest.mock('../../providers/Me');

it('should render Greetings if loading.', () => {
	MeProvider.mockImplementation(wrapper(makeQueryResult({loading: true}), MeFakeProvider));

	render(<App />);

	screen.getByText('Please wait...');
});

it('should render Greetings if error.', () => {
	MeProvider.mockImplementation(wrapper(makeQueryResult(ME_RESPONSE_ERROR), MeFakeProvider));

	render(<App />);

	screen.getByText('Hello, Mr(s)!');
});

it('should render Greetings if success.', () => {
	MeProvider.mockImplementation(wrapper(makeQueryResult(ME_RESPONSE), MeFakeProvider));

	render(<App />);

	screen.getByText('Hello, Dude Dudovich!');
});
