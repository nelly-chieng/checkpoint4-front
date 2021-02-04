import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Event from './components/Event';
import EventPage from './components/EventPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Event} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/events/:id" component={EventPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
