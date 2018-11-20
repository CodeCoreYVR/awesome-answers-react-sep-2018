import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionNewPage from "./QuestionNewPage";
import QuestionShowPage from "./QuestionShowPage";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";

import { User, Session } from "../requests";

// When react-router-dom, you must wrap your root component
// inside of of the <BrowserRouter> component.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => this.setState({ currentUser: null }));
  }

  getUser() {
    User.current().then(currentUser => {
      if (currentUser.id) {
        // When creating object you can easily create property
        // where its name is the same as a variable assigned to it
        // by only writing the name of variable inside the object's
        // braces.

        // this.setState({ currentUser: currentUser });
        // 👇 syntax sugar for 👆
        this.setState({ currentUser, loading: false });
      }
    });
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { currentUser } = this.state;

    if (this.state.loading) {
      return (
        <div className="App">
          <main>
            <h1>Loading...</h1>
          </main>
        </div>
      );
    }

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route
              path="/session/new"
              exact
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
            <Route path="/questions/new" exact component={QuestionNewPage} />
            <Route
              path="/questions/:id"
              exact={true}
              component={QuestionShowPage}
            />
            <Route path="/questions" exact component={QuestionIndexPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
