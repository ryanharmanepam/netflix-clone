import { Button, Input } from "..";

export const SearchForm = () => {
  const onSearch = () => {
    // TODO: Finalise search action w/ api call / filter
  };

  return (
    <div>
      <Input />
      <Button onClick={() => onSearch()}>Search</Button>
    </div>
  );
};
