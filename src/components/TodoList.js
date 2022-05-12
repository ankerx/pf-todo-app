import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const URL = "http://localhost:8080/task";
  const token = sessionStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // console.log(todos);
  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [todos]);

  const handleDelete = (id) => {
    axios
      .delete(`${URL}/${id}`, config)
      .then((res) => console.log("Task deleted", res));
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
        todos.map((el, index) => (
          <div
            key={index}
            className="flex justify-between w-full border border-y-gray-300"
          >
            <p>{el.name}</p>
            <div>
              <Link to={`edit/${el._id}`}>Edit </Link>
              <button
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
