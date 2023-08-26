import React from "react";
import { UserContext } from "./UserProvider";

export default function UserConsumer() {
  // return (
  //   <UserContext.Consumer>
  //     {(value: string) => <h1>{value}</h1>}
  //   </UserContext.Consumer>
  // );
  const value = React.useContext(UserContext);
  return <h1>{value}</h1>;
}
