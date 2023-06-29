import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Proteced from "./components/Proteced";
import Layout from "./components/Layout";
import Articles from "./components/Articles";
import { Button } from "react-bootstrap";
import Auth from "./components/Auth";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello ReactJS Course</h1>
      <Link to="/" className="me-2">
        Dashboard
      </Link>
      <Link to="/protected" className="me-2">
        Proteced
      </Link>
      <Button variant="primary" onClick={() => navigate("/protected")}>
        Go to protected
      </Button>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/protected"
            element={
              <Auth>
                <Proteced />
              </Auth>
            }
          />
          <Route path="/articles/:id" element={<Articles />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
