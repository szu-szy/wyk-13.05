import { ChangeEvent, FormEvent, useState } from "react";
import { ProfileProps } from "../Profile";

type FormProps = {
  addUser: (user: ProfileProps) => void;
}

export const Form = ({addUser}: FormProps) => {
  const [formState, setFormState] = useState<ProfileProps>({
    username: "",
    tag: "",
    location: "",
    phone: "",
    avatar: "",
    stats: [
      {
        _id: 'stat-like',
        text: "likes",
        count: 0,
      },
      {
        _id: 'stat-posts',
        text: "posts",
        count: 0,
      },
      {
        _id: 'stat-shared',
        text: "shared",
        count: 0,
      },
    ],
    deleteUser: () => {},
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username } = formState;

    if(username.length < 3) {
      alert('podaj wartosci');
      return;
    }
    addUser(formState);
    setFormState({
      username: "",
      tag: "",
      location: "",
      phone: "",
      avatar: "",
      stats: [
        {
          _id: 'stat-like',
          text: "likes",
          count: 0,
        },
        {
          _id: 'stat-posts',
          text: "posts",
          count: 0,
        },
        {
          _id: 'stat-shared',
          text: "shared",
          count: 0,
        },],
      deleteUser: () => {},
    });
  };

  const handleChangeStat = (e: ChangeEvent<HTMLInputElement>, id: string) => setFormState((prev) => ({
    ...prev,
    stats: [
      ...prev.stats.map(({_id, text, count}) => {
        if(_id !== id) return {
          _id,
          text,
          count
        }

        return {
          _id,
          text,
          count: parseInt(e.target.value),
        }
      })
    ]
  }))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Nazwa:
            <input
              id="username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="tag">
            Tag:
            <input
              id="tag"
              name="tag"
              type="text"
              value={formState.tag}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="location">
            Location:
            <input
              id="location"
              name="location"
              type="text"
              value={formState.location}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Telefon:
            <input
              id="phone"
              name="phone"
              type="text"
              value={formState.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        {formState.stats.map(({ _id, text, count }, index) => (
          <div key={`stat-${index}`}>
            <label htmlFor={`stat-id-${index}`}>
              {text}:
              <input
                id={`stat-id-${index}`}
                name="stat"
                type="number"
                value={count}
                onChange={(e) => handleChangeStat(e, _id)}
              />
            </label>
          </div>
        ))}
        <button type="submit">Wyslij</button>
      </form>
    </div>
  );
};
