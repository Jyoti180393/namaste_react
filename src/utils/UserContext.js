import { createContext } from "react";

const UserContext = createContext({
  userLogged: "JP",
  setUserLogged: () => {},
});

export default UserContext;
