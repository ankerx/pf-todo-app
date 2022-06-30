interface Props {
  label: string;
  type: string;
  placeholder: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = (props) => {
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
};
