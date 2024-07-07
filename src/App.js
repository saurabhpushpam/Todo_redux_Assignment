import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  useEffect(() => {
    console.log('Todo list updated');
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1 className='head'>Todo List</h1>
          <TodoList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
