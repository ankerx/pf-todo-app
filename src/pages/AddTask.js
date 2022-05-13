import CreateTask from "../modules/Task/CreateTask";

function AddTask({ setValue, value }) {
  return (
    <div className="w-full flex justify-center">
      <CreateTask value={value} setValue={setValue} />
    </div>
  );
}

export default AddTask;
