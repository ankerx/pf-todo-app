import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Input } from "../components/Input";
import { taskApi } from "../api/taskApi";
import { Todo } from "../../../Interfaces";
const TaskEdit: FC = () => {
  type Params = {
    id: string
  }
  const navigate = useNavigate();

  const { id }  = useParams<Params>()
  const [todo, setTodo] = useState<Todo>({name:""});
  const [newValue, setNewValue] = useState<string>("");
  console.log(typeof id)
  useEffect(() => {
    taskApi
      .get(id)
      .then((res) => setTodo(res))
      .catch((err) => console.log(err));
    setNewValue(todo.name);
  }, [todo.name, id]);
  console.log(todo)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  };
  const handleUpdate = async () => {
    try {
      const res = await taskApi.update(id,newValue)
      navigate("/")
      return res
    } catch (error) {
      console.log(error)
    }
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
