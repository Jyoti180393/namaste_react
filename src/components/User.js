import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  const { name, location } = props;

  return (
    <div className="user-container">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>
        Count : {count}, {count2}
      </h4>
    </div>
  );
};

export default User;
