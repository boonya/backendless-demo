import App from './modules/App';
import ApolloProvider from './providers/Apollo';
import ThemeProvider from './providers/Theme';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</React.StrictMode>
);
