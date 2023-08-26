import React from "react";
import UserConsumer from "./UserConsumer";

export const UserContext = React.createContext('');

export default function App() {
  return (
    <UserContext.Provider value="ReactJS">
      <UserConsumer />
    </UserContext.Provider>
  )
}
