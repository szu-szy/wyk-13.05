import { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";
import { ProfileProps, ProfileStat } from "./components/Profile";
import { ProfileList } from "./components/ProfileList";
import { SearchForm } from "./components/SearchForm";
import { Form } from "./components/Form";

const mockStats: ProfileStat[] = [
  {
    text: "likes",
    count: 3,
  },
  {
    text: "posts",
    count: 10,
  },
  {
    text: "shared",
    count: 5,
  },
];

// const mockProfile: ProfileProps = {
//   username: "Jan",
//   tag: "Janek123",
//   location: "Białystok",
//   phone: "+48123123123",
//   avatar: "https://www.w3schools.com/howto/img_avatar.png",
//   stats: mockStats,
// };


const generateRandomID = () => `123-${Math.floor(Math.random() * 100000)}`;

const mockProfileList: ProfileProps[] = [
  {
    _id: generateRandomID(),
    username: "Jan",
    tag: "Janek123",
    location: "Białystok",
    phone: "+48123123123",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    stats: mockStats,
    deleteUser: () => {},
  },
  {
    _id: generateRandomID(),
    username: "Andrzej",
    tag: "Andrzejek123",
    location: "Warszawa",
    phone: "+48111111111",
    avatar:
      "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
    stats: mockStats,
    deleteUser: () => {},
  },
  {
    _id: generateRandomID(),
    username: "Pawel",
    tag: "Pablo123",
    location: "Gniezno",
    phone: "+48123000111",
    avatar: "https://www.blexar.com/avatar.png",
    stats: mockStats,
    deleteUser: () => {},
  },
];

function App() {
  const [list, setList] = useState<ProfileProps[]>(mockProfileList);
  const [filteredList, setFilteredList] = useState<ProfileProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const filterListByName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(searchTerm.length < 3) {
      alert('Minimum 3 znaki!');
      return;
    }

    setFilteredList(
      list.filter(({ username }) => username.includes(searchTerm))
    );
    setSearchTerm('');
  }

  const resetList = () => {
    setFilteredList([]);
    setSearchTerm('');
  }

  const deleteUser = (id: string) => setList(prev => prev.filter(({_id}) => _id !== id));

  return (
    <div className="App">
      <Form />
      {/* <SearchForm
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        filterListByName={filterListByName}
        resetList={resetList}
      />
      <h2>Wyszukiwana fraza: {searchTerm}</h2>
      <ProfileList list={list} filteredList={filteredList} deleteUser={deleteUser}/> */}
    </div>
  );
}

export default App;
