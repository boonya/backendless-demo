import Greetings from '.';
import wrapper from '../../../.storybook/decorators/wrapper';
import MeContextProvider from '../../providers/Me/ContextProvider';
import ERROR_DATA from '../../providers/Me/__data__/ValidationError';
import SUCCESSFUL_DATA from '../../providers/Me/__data__/successful';
import {within} from '@storybook/testing-library';

export default {component: Greetings};

export function ShowName() {
	return <Greetings />;
}
ShowName.decorators = [
	wrapper(SUCCESSFUL_DATA, MeContextProvider),
];
ShowName.play = async ({canvasElement}) => {
	const screen = within(canvasElement);
	screen.getByText('Hello, Dude Dudovich!');
};

export function Loading() {
	return <Greetings />;
}
Loading.decorators = [
	wrapper({loading: true}, MeContextProvider),
];
Loading.play = async ({canvasElement}) => {
	const screen = within(canvasElement);
	screen.getByRole('progressbar', {name: 'Please wait'});
};

export function ShowFallbackName() {
	return <Greetings />;
}
ShowFallbackName.decorators = [
	wrapper(ERROR_DATA, MeContextProvider),
];
ShowFallbackName.play = async ({canvasElement}) => {
	const screen = within(canvasElement);
	screen.getByText('Hello, Mr(s)!');
};
