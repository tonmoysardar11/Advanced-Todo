import './App.css';
import {Routes, Route, HashRouter } from 'react-router-dom';
import CreateTodo from './components/CreateTodo';
import Nav from './components/Nav';
import ShowTodo from './components/ShowTodo';
import CompletedTodo from './components/CompletedTodo';
import PendingTodo from './components/PendingTodo';
import TodoState from './context/TodoState';

function App() {
  return (
    <TodoState>
    <div className="app">
      <CreateTodo/>
      <hr />
      <HashRouter>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<ShowTodo/>}/>
        <Route exact path='/completed' element={<CompletedTodo/>}/>
        <Route exact path='/pending' element={<PendingTodo/>}/>
      </Routes>
      <hr />
      </HashRouter>


    </div>
    </TodoState>
  );
}

export default App;
