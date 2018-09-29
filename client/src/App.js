import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import EventDetail from './pages/EventDetail/EventDetail';
import CreateEvent from './pages/createEvent/createEvent';
import Home from "./pages/Home/Home";
import { ListedEvents } from "./pages/ListedEvents/ListedEvents";
import LocationEventPage from './pages/LocationEventPage/LocationEventPage';


class App extends Component {

  render() {
    return (
      <div>
          <Router>
            <div>
              
              <Switch>
                <Route exact path = "/" component = {LandingPage} />
                <Route exact path = "/listedevents" component = {ListedEvents} />
                <Route path = "/eventdetail/:id" component = {EventDetail} />
                <Route exact path = "/home" component = {Home} />
                <Route exact path = "/:citystate/:category" component={LocationEventPage} />
                <Route exact path = "/create" component = {CreateEvent} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
