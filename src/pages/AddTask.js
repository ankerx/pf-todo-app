import CreateTask from "../components/CreateTask";

function AddTask({ token, setValue, value }) {
  return (
    <div className="w-full flex justify-center">
      <CreateTask token={token} value={value} setValue={setValue} />
    </div>
  );
}

export default AddTask;
