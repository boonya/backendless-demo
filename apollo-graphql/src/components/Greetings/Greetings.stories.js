import Greetings from '.';
import wrapper from '../../../.storybook/decorators/wrapper';
import MeContextProvider from '../../providers/Me/ContextProvider';
import ME_DATA from '../../providers/Me/__data__/successful';

export default {title: 'components/Greetings'};

export function Loading() {
	return <Greetings />;
}
Loading.decorators = [
	wrapper({loading: true}, MeContextProvider),
];

export function ShowName() {
	return <Greetings />;
}
ShowName.decorators = [
	wrapper(ME_DATA, MeContextProvider),
];

export function ShowFallbackName() {
	return <Greetings />;
}
ShowFallbackName.decorators = [
	wrapper(null, MeContextProvider),
];
