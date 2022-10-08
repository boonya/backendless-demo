import Greetings from '.';
import withProvider from '../../../.storybook/decorators/wrapper';
import MeFakeProvider from '../../providers/Me/FakeProvider';
import ME_NONAME_RESPONSE from '../../providers/Me/__response__/noname.json';

export default {title: 'components/Greetings'};

export function Loading() {
	return <Greetings />;
}
Loading.decorators = [
	withProvider(MeFakeProvider, {loading: true}),
];

export function ShowName() {
	return <Greetings />;
}
ShowName.decorators = [
	withProvider(MeFakeProvider),
];

export function ShowFallbackName() {
	return <Greetings />;
}
ShowFallbackName.decorators = [
	withProvider(MeFakeProvider, ME_NONAME_RESPONSE),
];
