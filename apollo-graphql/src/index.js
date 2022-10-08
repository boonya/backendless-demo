import App from './modules/App';
import ApolloProvider from './providers/Apollo';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
