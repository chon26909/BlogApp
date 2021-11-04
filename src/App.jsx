import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Fragment } from "react";

//components
import Navbar from './components/Navbar';

//pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/me" component={Profile} />
      </Router>
    </div>
  );
}

export default App;