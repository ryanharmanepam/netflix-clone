interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
