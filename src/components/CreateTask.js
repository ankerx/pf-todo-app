import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateTask({ token, value, setValue }) {
  const navigate = useNavigate();
  const URL = "http://localhost:8080/task";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (e) => {
    axios
      .post(
        URL,
        {
          name: value,
        },
        config
      )
      .then((res) => console.log(res.data))
      .then(navigate("/"))
      .catch((err) => console.log(err));

    setValue("");
  };

  return (
    <div className="w-96">
      <form className="mt-3 flex flex-col ">
        <label>Name</label>
        <input
          className="bg-white border border-black w-full p-1 mt-1 "
          type="text"
          placeholder="Name of the task"
          value={value}
          onChange={handleChange}
        />
        <div className="w-full">
          <button
            onClick={handleSubmit}
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

export default CreateTask;
