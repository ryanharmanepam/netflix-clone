interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  name: string;
}

export const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    // TODO: Styling
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest}></input>
    </div>
  );
};
