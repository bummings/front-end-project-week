import React from "react";

class Notes extends React.Component {
  render() {
    return (
      <div>
        {this.props.notes.map(note => {
          return (
            <div key={note._id} className="card">
              <h1 className="card__title" key={note._id}>
                {note.title}
              </h1>
              <hr className="card__hr" />
              <h3 className="card__text" key={note._id}>
                {note.textBody}
              </h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Notes;
