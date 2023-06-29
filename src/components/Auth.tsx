import { Navigate } from "react-router-dom";

function Auth({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Auth;
