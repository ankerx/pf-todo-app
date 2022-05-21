function Input(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        className="bg-white border border-black "
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </>
  );
}

export default Input;
