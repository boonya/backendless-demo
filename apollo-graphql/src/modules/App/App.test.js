import App from '.'
import {render, screen} from '@testing-library/react';
import MeProvider from '../../providers/Me';
import MeFakeProvider from '../../providers/Me/FakeProvider';

jest.mock('../../providers/Me');

it('should render Greetings if loading.', () => {
  MeProvider.mockImplementation(({children}) => <MeFakeProvider loading>{children}</MeFakeProvider>);

  render(<App />);

  screen.getByText('Please wait...');
});

it('should render Greetings if error.', () => {
  MeProvider.mockImplementation(({children}) => (
    <MeFakeProvider data={null} error={new Error('Test error')}>
      {children}
    </MeFakeProvider>
  ));

  render(<App />);

  screen.getByText('Hello, Dude!');
});

it('should render Greetings if success.', () => {
  MeProvider.mockImplementation(({children}) => <MeFakeProvider>{children}</MeFakeProvider>);

  render(<App />);

  screen.getByText('Hello, Serhii [boonya] Buinytskyi!');
});
