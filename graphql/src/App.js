import './App.css';
import Greetings from './components/Greetings';
import ApolloProvider from './providers/Apollo';
import MeProvider from './providers/Me';

export default function App() {
  return (
    <ApolloProvider>
      <MeProvider>
        <div className="App">
          <header className="App-header">
            <Greetings />
            <a
              className="App-link"
              href="https://studio.apollographql.com/public/github/home?variant=current"
              target="_blank"
              rel="noopener noreferrer"
            >
              👋 Welcome to the GitHub GraphQL API 🐙
            </a>
          </header>
        </div>
      </MeProvider>
    </ApolloProvider>
  );
}
