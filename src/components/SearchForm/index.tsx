import { ChangeEvent, FormEvent } from "react";

type SearchFormProps = {
  searchTerm: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  filterListByName: (e: FormEvent<HTMLFormElement>) => void;
  resetList: () => void;
};

export const SearchForm = ({
  searchTerm,
  handleSearch,
  filterListByName,
  resetList,
}: SearchFormProps) => {
  return (
    <>
      <form onSubmit={filterListByName}>
        <input
          type="text"
          placeholder="Type user name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit" disabled={searchTerm.length < 3}>
          Szukaj
        </button>
      </form>
      <button onClick={resetList}>Reset</button>
    </>
  );
};
