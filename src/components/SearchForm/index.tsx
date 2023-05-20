import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

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
  const [currID, setCurrID] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(id) setCurrID(id);
    console.log(id);
  }, [id])

  if(true) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Link to='/form/3'>Idziemy dalej 3</Link>
      <Link to='/form/4'>Idziemy dalej 4</Link>
      <Link to='/form/5'>Idziemy dalej 5</Link>
      <Link to='/form/6'>Idziemy dalej 6</Link>
      <Link to='/form/7'>Idziemy dalej 7</Link>
      <Link to='/form/8'>Idziemy dalej 8</Link>
      <Link to='/form/9'>Idziemy dalej 9</Link>
      <Link to='/form/10'>Idziemy dalej 10</Link>
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
