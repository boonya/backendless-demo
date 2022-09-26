import App from '.';
import withApollo, {query} from '../../../.storybook/decorators/withApollo';
import ME_RESPONSE from '../../providers/Me/__response__/successful';

export function Fulfilled() {
  return <App />
}
Fulfilled.parameters = {msw: {handlers: [
  query('FetchMe', ME_RESPONSE),
]}};

export function SlowQuery() {
  return <App />
}
SlowQuery.parameters = {msw: {handlers: [
  query('FetchMe', ME_RESPONSE, {delay: 3000}),
]}};

export function FailedQuery() {
  return <App />
}
FailedQuery.parameters = {msw: {handlers: [
  query('FetchMe', ME_RESPONSE, {error: 500}),
]}};

export default {
  title: 'modules/App',
  decorators: [
    withApollo(),
  ],
};
