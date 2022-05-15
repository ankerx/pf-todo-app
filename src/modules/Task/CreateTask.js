import { useNavigate } from "react-router-dom";
import AuthAxios from "../Auth/AuthAxios";
function CreateTask({ value, setValue }) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
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
      <form className="mt-3 flex flex-col ">
        <label>Name</label>
        <input
          className="bg-white border border-black w-full p-1 mt-1 "
          type="text"
          placeholder="Name of the task"
          value={value}
          onChange={handleChange}
          required
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
