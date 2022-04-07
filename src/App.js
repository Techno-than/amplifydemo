import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to deep mentoring session - NASSCOM
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/developer/?pg=gs&sec=rc&developer-center-activities-cards.sort-by=item.additionalFields.startDateTime&developer-center-activities-cards.sort-order=asc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn AWS - Hosting ReactJs web application on AWS using Amplify
        </a>
      </header>
    </div>
  );
}

export default App;
