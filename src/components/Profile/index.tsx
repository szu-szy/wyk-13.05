import './Profile.scss';
import { useState } from "react";

export type ProfileStat = {
  _id: string;
  text: string;
  count: number;
};

export type ProfileProps = {
  _id?: string;
  username: string;
  tag: string;
  location: string;
  phone: string;
  avatar?: string;
  stats: ProfileStat[];
  deleteUser: (id?: string) => void;
};

export const Profile = ({
  _id,
  username,
  tag,
  location,
  phone,
  avatar,
  stats,
  deleteUser,
}: ProfileProps) => {
  const [isExpanded, setIsExpandend] = useState(false);

  const toggleExpand = () => setIsExpandend((prev) => !prev);
  // const expand = () => setIsExpandend(true);
  // const unexpand = () => setIsExpandend(false);

  // tworzenie zmiennej za pomoca funkcji
  // const statsElements = () => (
  //   stats.map(({ text, count }, index) => (
  //     <li key={`stats-${index}`}>
  //       {`${text}: ${count}`}
  //     </li>
  //   ))
  // )

  return (
    <div className='profile'>
      <button onClick={() => deleteUser(_id)}>Usuń</button>
      <button onClick={toggleExpand}>Show more</button>
      <h2>{username}</h2>
      {isExpanded && (
        <div>
          <h3>Tag: {tag}</h3>
          <h3>Lokalizacja: {location}</h3>
          <a>{phone}</a>
          {stats.length > 0 && (
            <ul>
              {stats.map(({ text, count }, index) => (
                <li key={`stats-${index}`}>
                  {`${text}: ${count}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {avatar ? <img src={avatar} alt="User avatar" /> : <span>No avatar</span>}
    </div>
  );
};
