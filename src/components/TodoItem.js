import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
      return {
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        backgroundColor: '#f4f4f4',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button></p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  padding: '5px 9px',
  borderRadius: '50%',
  border: 'none',
  background: '#ff0000',
  color: '$fff',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem
