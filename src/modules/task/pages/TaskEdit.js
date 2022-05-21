import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Input from "../components/Input";
import AuthAxios from "../../../core/api/request";
import { taskApi } from "../api/taskApi";
function TaskEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    taskApi
      .get(id)
      .then((res) => setTodo(res))
      .catch((err) => console.log(err));
    setNewValue(todo.name);
  }, [todo.name, id]);

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };
  const handleUpdate = () => {
    // taskApi
    //   .update(id, newValue)
    //   .then((res) => {
    //     return res;
    //   })
    //   .then(navigate("/"))
    //   .catch((err) => console.log(err));
    AuthAxios.put(`/task/${id}`, {
      name: newValue,
    })
      .then((res) => console.log(res.data))
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-96">
      <Input
        value={newValue ?? ""}
        onChange={handleChange}
        onClick={handleUpdate}
      />
    </div>
  );
}

export default TaskEdit;
