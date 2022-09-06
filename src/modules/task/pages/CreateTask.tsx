import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Input } from "../components/Input";
import { taskApi } from "../api/taskApi";
function CreateTask() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    try {
      const res = await taskApi.create(value);
      console.log(res);
      navigate("/");
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-96">
      <Input onClick={handleSubmit} value={value} onChange={handleChange} />
      {error && <p> Input can't be empty! </p>}
    </div>
  );
}

export default CreateTask;
