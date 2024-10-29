import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './screens/Home'

function App() {
  return (
    <Router className="Flex">
      <div>
        <nav>
          <ul className="List">
            <li className="Objects">
              <Link className="Link" to="/">Home</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;