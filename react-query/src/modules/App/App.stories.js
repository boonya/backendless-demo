import App from '.';
import {query} from '../../../.storybook/decorators/withApollo';
import ME_RESPONSE_VALIDATION_ERROR from '../../providers/Me/__response__/ValidationError.json';
import ME_RESPONSE from '../../providers/Me/__response__/successful.json';
import {expect} from '@storybook/jest';
import {within} from '@storybook/testing-library';

export default {component: App};

export function Fulfilled() {
	return <App />;
}
Fulfilled.parameters = {msw: {handlers: [
	query('FetchMe', ME_RESPONSE),
]}};
Fulfilled.play = async ({canvasElement}) => {
	const screen = within(canvasElement);

	await screen.findByText('Hello, Dude Dudovich!');

	const link = screen.getByRole('link', {name: /Welcome to the GitHub GraphQL API/u});
	await expect(link).toHaveAttribute('href', 'https://studio.apollographql.com/public/github/home?variant=current');
	await expect(link).toHaveAttribute('target', '_blank');
};

export function SlowQuery() {
	return <App />;
}
SlowQuery.parameters = {msw: {handlers: [
	query('FetchMe', ME_RESPONSE, {delay: 3000}),
]}};
Fulfilled.play = async ({canvasElement}) => {
	const screen = within(canvasElement);

	screen.getByRole('progressbar', {name: 'Please wait'});

	const link = screen.getByRole('link', {name: /Welcome to the GitHub GraphQL API/u});
	await expect(link).toHaveAttribute('href', 'https://studio.apollographql.com/public/github/home?variant=current');
	await expect(link).toHaveAttribute('target', '_blank');
};

export function FailedQuery() {
	return <App />;
}
FailedQuery.parameters = {msw: {handlers: [
	query('FetchMe', ME_RESPONSE_VALIDATION_ERROR),
]}};
