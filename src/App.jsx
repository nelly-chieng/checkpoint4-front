import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Event from './components/Event';
import EventPage from './components/EventPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Dates from './components/Dates';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Event} />
            <Route path="/dates" component={Dates} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/event/:id" component={EventPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
