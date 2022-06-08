import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Input } from "../components/Input";
import { taskApi } from "../api/taskApi";
function CreateTask() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>)  => {
    event.preventDefault()
    try {
      const res = await taskApi.create(value)
      console.log(res)
      navigate("/")
      setValue("");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="w-96">
      <Input
        onClick={handleSubmit}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default CreateTask;
