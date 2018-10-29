import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import "./styles.css";
// import "./card.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .then(console.log(this.state))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <h1 className="sideBar__headline">
            Lambda
            <br />
            Notes
          </h1>
          <button className="btn">View Your Notes</button>
          <br />
          <button className="btn">Create New Note</button>
        </div>

        <div className="content">
          <Route exact path="/submit" component={NoteForm} />
          {/* <Route exact path="/" component={Notes} /> */}
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
