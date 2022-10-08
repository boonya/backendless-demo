import { initialize, mswDecorator } from 'msw-storybook-addon';
import withApollo from './decorators/withApollo'

// Initialize MSW
initialize();

export const decorators = [
  withApollo(),
  // Provide the MSW addon decorator globally
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}