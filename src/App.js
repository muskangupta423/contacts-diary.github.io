import { BrowserRouter as Router } from 'react-router-dom';
import RouteContainer from './containers/Routes/RouteContainer';
import './scss/main.scss';

function App() {
  return (
    <>
      <Router>
        <RouteContainer/>
      </Router>
    </>
  );
}

export default App;
