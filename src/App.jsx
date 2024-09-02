import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ChatArea from "./components/ChatArea";

const App = () => {
  const [idOther, setIdother] = useState();

  const montreID = (e) => {
    console.log(e);
    setIdother(e);
  };

  // Exemple de messages

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <div id="contact" className="w-1/4 bg-gray-100">
          <ContactList montreID={montreID} />
        </div>
        <div id="chat" className="w-2/3 bg-white">
          <ChatArea idOther={idOther} />
        </div>
      </div>
    </div>
  );
};

export default App;
