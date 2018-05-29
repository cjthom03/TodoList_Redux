import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };

    this.updateState = this.updateState.bind(this);
  }

  updateState(key, event) {
    this.setState({[key]: event.currentTarget.value});
  }

  render() {
    return (
      <form>
        <label>Title
          <input onChange={(e) => this.updateState('title', e)} value={this.state.title}/>
        </label>

        <label>Body
          <textarea onChange={(e) => this.updateState('body', e)} value={this.state.body}></textarea>
        </label>

        <button >Add Todo Item</button>
      </form>
    );
  }
}

export default TodoForm;
