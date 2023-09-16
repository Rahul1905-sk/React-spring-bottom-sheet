import { useState } from "react";
import Modal from "./components/Modal";
import ModalContent from "./components/ModalContent"; 

function App() {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
       
       <div>
        <h1>Bottom Sheet</h1>
        <button onClick={toggleModal}>{showModal ? "Close":"Open"}</button>
       </div>
       {showModal && <Modal content={<ModalContent/>} toggleModal={toggleModal} />}
    </div>
  
  );
}

export default App;


 