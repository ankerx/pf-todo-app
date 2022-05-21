import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../../core/components/Input";
import AuthAxios from "../../auth/AuthAxios";
function CreateTask() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    AuthAxios.post("/task", {
      name: value,
    })
      .then((res) => console.log(res.data))
      .then(navigate("/"))
      .catch((err) => console.log(err));

    setValue("");
  };

  return (
    <div className="w-96">
      <Input
        onClick={handleSubmit}
        value={value}
        onChange={handleChange}
        setValue={setValue}
      />
    </div>
  );
}

export default CreateTask;
