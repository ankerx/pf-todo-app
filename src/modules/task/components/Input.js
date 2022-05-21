import { useNavigate } from "react-router";
function Input(props) {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate("/");
  };

  return (
    <form className="mt-3 flex flex-col ">
      <label>Name</label>
      <input
        className="bg-white border border-black w-full p-1 mt-1 "
        type="text"
        placeholder="Name of the task"
        value={props.value}
        onChange={props.onChange}
        required
      />

      <div className="w-full">
        <button
          onClick={props.onClick}
          className="py-2 px-4 bg-cyan-700 w-full mt-3 text-white"
        >
          Save
        </button>

        <button
          onClick={onCancel}
          className="py-2 px-4 border border-black w-full mt-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Input;
