import Greetings from '.';
import wrapper from '../../../.storybook/decorators/wrapper';
import MeFakeProvider from '../../providers/Me/FakeProvider';
import ME_NONAME_RESPONSE from '../../providers/Me/__response__/noname.json';

export default {title: 'components/Greetings'};

export function Loading() {
	return <Greetings />;
}
Loading.decorators = [
	wrapper({loading: true}, MeFakeProvider),
];

export function ShowName() {
	return <Greetings />;
}
ShowName.decorators = [
	wrapper(null, MeFakeProvider),
];

export function ShowFallbackName() {
	return <Greetings />;
}
ShowFallbackName.decorators = [
	wrapper(ME_NONAME_RESPONSE, MeFakeProvider),
];
