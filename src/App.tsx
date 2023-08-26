// @src/App.ts
import { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import Test from "./components/Test";
import { Button } from "react-bootstrap";
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
      <Button variant="danger" onClick={() => setOpenModal(true)}>
        Delete
      </Button>
      {/* Modal for deletion */}
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
