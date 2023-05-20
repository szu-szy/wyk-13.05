import { ChangeEvent, FormEvent, useState } from "react";

type SearchProductFormProps = {
  handleSearchList: (searchTerm: string) => void;
};

export const SearchProductForm = ({
  handleSearchList,
}: SearchProductFormProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchList(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Szukaj</button>
    </form>
  );
};
