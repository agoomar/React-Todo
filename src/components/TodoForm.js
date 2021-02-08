import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  state = {
    stateKey: "",
  };

  handleChanges = (e) => {
    this.setState({
      stateKey: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addActivity(this.state.stateKey);
  };

  render() {
    // console.log(this.state);
    return (
      <form className="addActBut" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="activity"
          value={this.state.stateKey}
          onChange={this.handleChanges}
          placeholder="What do you need to do?"
        />
        <button>Add Activity</button>
      </form>
    );
  }
}

export default TodoForm;