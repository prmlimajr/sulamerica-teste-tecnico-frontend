import { AppProvider } from "./hooks";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";

export function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
}

