import App from './modules/App';
import ApiProvider from './providers/API';
import ThemeProvider from './providers/Theme';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApiProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ApiProvider>
	</React.StrictMode>
);
