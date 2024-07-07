import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from '../redux/tasksReducer';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      dispatch(
        addTask({ id: Date.now(), name: taskName, description: taskDescription })
      );
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <div className='data'>
      <form onSubmit={handleAddTask}>
        <input
          className='inputtask'
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          className='inputdesc'
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task Description"
        />
        <button type="submit" className='add'>Add Task</button>
      </form>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <div className='todosdata'>
          <ul className='list'>
            {tasks.map((task) => (
              <li key={task.id} className='todos'>
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  <b className='taskname'>
                    {task.name} : </b>{task.description}
                </span>
                <div>
                  <input
                    className='mark'
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask(task.id))}
                  />
                  <button onClick={() => dispatch(removeTask(task.id))} className='delete'>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
