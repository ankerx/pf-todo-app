import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import AuthAxios from "../../../core/api/request";
import { taskApi } from "../api/taskApi";
function CreateTask() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    // taskApi
    //   .create(value)
    //   .then((res) => {
    //     return res
    //   })
    //   .then(navigate("/"))
    //   .catch((err) => console.log(err));
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
