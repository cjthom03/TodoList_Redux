import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todos_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      let newState = merge({}, oldState);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return oldState;
  }
};

export default todosReducer;
