import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthAxios from "../../../core/api/request";
import { taskApi } from "../api/taskApi";
function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    taskApi
      .getAllTasks()
      .then((res) => setTodos(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = (id) => {
    taskApi
      .delete(id)
      .then((res) => {
        return res;
      })
      .then(setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center justify-center w-2/4 mt-5">
      <div className="flex items-center mb-2">
        <h2 className="font-bold mr-4 text-2xl">Tasks</h2>
        <button className="py-1 px-3 cursor-pointer bg-cyan-600 text-white">
          <Link to="/addTask">Add</Link>
        </button>
      </div>

      <div className="flex justify-between w-full border border-y-gray-300 ">
        <p className="">Name</p>
        <p>Actions</p>
      </div>

      {todos.length > 0 &&
        todos.map((el) => (
          <div
            key={el._id}
            className="flex justify-between w-full border border-y-gray-300 items-center"
          >
            <p>{el.name}</p>
            <div className="text-white">
              <button className="bg-cyan-700 py-1 px-2 mr-2">
                <Link to={`edit/${el._id}`}>Edit</Link>
              </button>
              <button
                className="bg-red-500 py-1 px-2"
                onClick={() => {
                  handleDelete(el._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
