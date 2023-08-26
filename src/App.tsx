// @src/App.ts
import { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import Test from "./components/Test";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  // Manage state of Delete Modal toggle.
  const [openModal, setOpenModal] = useState<boolean>(false);
  // Handle delete comment.
  const handleDelete = async () => {
    // do something here, example: call delete API.
    console.log("Deleted.");
  };
  return (
    <div className="App">
      <Button variant="danger" className="me-2" onClick={() => setOpenModal(true)}>
        Delete
      </Button>

      <Button variant="primary" onClick={() => setOpenModal(true)}>
        Create
      </Button>

      <ModalComponent
        isOpen={openModal}
        setOn={setOpenModal}
        title={`Delete`}
        promptText={<Test />}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
