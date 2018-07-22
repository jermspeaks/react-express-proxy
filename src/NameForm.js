import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log('current value: ', this.input.current.value);
    const name = this.input.current.value;

    fetch("/api/name", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
