interface TabProps {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const Tab = ({ isSelected, children, onClick }: TabProps) => {
  return (
    // TODO: Styling for tab component
    <div
      className={`${isSelected && "active-class"}`}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};
