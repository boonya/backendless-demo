import './App.css';
import Greetings from '../../components/Greetings';
import MeProvider from '../../providers/Me';

export default function App() {
	return (
		<MeProvider>
			<div className="App">
				<header className="App-header">
					<Greetings />
					<a
						className="App-link"
						href="https://docs.github.com/en/rest/quickstart"
						target="_blank"
						rel="noopener noreferrer"
					>
						👋 Welcome to the GitHub Rest API 🐙
					</a>
				</header>
			</div>
		</MeProvider>
	);
}
