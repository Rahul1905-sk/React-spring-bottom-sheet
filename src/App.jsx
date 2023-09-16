import { useState } from "react"; 
import ModalContent from "./components/ModalContent"; 
import BottomSheet from "./components/BottomSheet";

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
       {showModal && <BottomSheet content={<ModalContent/>} toggleModal={toggleModal} />}
    </div>
  
  );
}

export default App;


 