import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Input from "../../../core/components/Input";
import AuthAxios from "../../auth/AuthAxios";

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
      <Input
        value={newValue ?? ""}
        onChange={handleChange}
        onClick={handleUpdate}
      />
    </div>
  );
}

export default TaskEdit;
