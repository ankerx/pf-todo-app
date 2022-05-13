import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthAxios from "../Auth/AuthAxios";

function TaskEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    AuthAxios.get(`/task/${id}`)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));

    setNewValue(todo.name);
  }, [todo.name, id]);

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };
  const handleUpdate = () => {
    AuthAxios.put(`/task/${id}`, {
      name: newValue,
    })
      .then((res) => console.log(res.data))
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-96">
      <form className="mt-3 flex flex-col ">
        <label>Name</label>
        <input
          className="bg-white border border-black w-full p-1 mt-1 "
          type="text"
          placeholder="Name of the task"
          onChange={handleChange}
          value={newValue ?? ""}
          required
        />
        <div className="w-full">
          <button
            onClick={handleUpdate}
            className="py-2 px-4 bg-cyan-700 w-full mt-3 text-white"
          >
            Save
          </button>

          <button
            onClick={() => navigate("/")}
            className="py-2 px-4 border border-black w-full mt-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
