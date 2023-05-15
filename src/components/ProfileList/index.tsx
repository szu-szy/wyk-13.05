import "./ProfileList.scss";
import { Profile, ProfileProps } from "../Profile";

type ProfileListProps = {
  list: ProfileProps[];
  filteredList: ProfileProps[];
  deleteUser: (id?: string) => void;
};

export const ProfileList = ({ list, filteredList, deleteUser }: ProfileListProps) => {
  return (
    <ul className="profile-list">
      {filteredList.length > 0
        ? filteredList.map((item, index) => <Profile key={`filter-item-${index}`} {...{...item, deleteUser}} />)
        : list.map((item, index) => <Profile key={`item-${index}`} {...{...item, deleteUser}} />)}
    </ul>
  );
};
