import Greetings from '.';
import {useMe} from '../../providers/Me/ContextProvider';
import {render, screen} from '@testing-library/react';
import ME_DATA from '../../providers/Me/__data__/successful';

jest.mock('../../providers/Me/ContextProvider');

function renderComponent() {
  return render(<Greetings />);
}

it('should render progressbar.', () => {
  useMe.mockReturnValue({loading: true});

  renderComponent();

  expect(screen.queryByText(/Hello/u)).not.toBeInTheDocument();
  screen.getByRole('progressbar');
});

it('should render user name.', () => {
  useMe.mockReturnValue({data: ME_DATA});

  renderComponent();

  screen.getByText('Hello, Dude Dudovich!');
});

it('should render "Dude" as a fallback value.', () => {
  useMe.mockReturnValue({});

  renderComponent();

  screen.getByText('Hello, Mr(s)!');
});
