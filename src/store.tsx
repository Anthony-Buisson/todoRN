import {createStore} from 'redux';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function todoListState(
  state = [
    {id: '1', title: 'tache 1', status: 0},
    {id: '2', title: 'tache 2', status: 0},
    {id: '3', title: 'tache 3', status: 0},
    {id: '4', title: 'tache 4', status: 0},
    {id: '5', title: 'tache 5', status: 0},
    {id: '6', title: 'tache 6', status: 0},
    {id: '7', title: 'tache 7', status: 0},
    {id: '8', title: 'tache 8', status: 0},
  ],
  action,
) {
  switch (action.type) {
    case 'ADD_TASK':
      return state.concat([
        {
          id: (1 + state[state.length - 1].id).toString(),
          title: 'nouvelle tâche',
          status: action.status ?? 0,
        },
      ]);
    case 'REMOVE_TASK':
      return state.filter(item => item.id !== action.itemId);
    case 'UPDATE_TASK':
      return newTask =>
        state.map(task => (task.id === newTask.id ? newTask : task));
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(todoListState);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()));
/*
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// 1
store.dispatch({type: 'INCREMENT'});
// 2
store.dispatch({type: 'DECREMENT'});
// 1
*/
export default store;
