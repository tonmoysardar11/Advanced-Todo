import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import Nav from "./components/Nav";
import ShowTodo from "./components/ShowTodo";
import CompletedTodo from "./components/CompletedTodo";
import PendingTodo from "./components/PendingTodo";
import TodoState from "./context/TodoState";
import Login from "./components/Login";

function App() {
  return (
    <TodoState>
      <div className="app">
        <>
          <Login />
          <CreateTodo />
          <hr />
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route exact path="/" element={<ShowTodo />} />
              <Route exact path="/completed" element={<CompletedTodo />} />
              <Route exact path="/pending" element={<PendingTodo />} />
            </Routes>
            <hr />
          </BrowserRouter>
        </>
      </div>
    </TodoState>
  );
}

export default App;
