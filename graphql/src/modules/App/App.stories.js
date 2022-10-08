import App from '.';
import {query} from '../../../.storybook/decorators/withApollo';
import ME_RESPONSE from '../../providers/Me/__response__/successful';
import ME_RESPONSE_VALIDATION_ERROR from '../../providers/Me/__response__/ValidationError';

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
  query('FetchMe', ME_RESPONSE_VALIDATION_ERROR),
]}};

export default {title: 'modules/App'};
