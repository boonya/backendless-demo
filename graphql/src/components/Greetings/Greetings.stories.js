import Greetings from '.';
import ME_NONAME_RESPONSE from '../../providers/Me/__response__/noname';
import MeFakeProvider from '../../providers/Me/FakeProvider';
import withProvider from '../../../.storybook/decorators/withProvider';

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
  withProvider(MeFakeProvider, {data: ME_NONAME_RESPONSE}),
];

export default {title: 'components/Greetings'};
