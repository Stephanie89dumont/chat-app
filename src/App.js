import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Esther Wood"
        img="https://randomuser.me/api/portraits/women/32.jpg"
        offline
      />
      <Contact
        name="Isobel Steeves"
        img="https://randomuser.me/api/portraits/women/72.jpg"
        online
      />
      <Contact
        name="Bobby Wilson"
        img="https://randomuser.me/api/portraits/men/79.jpg"
        online
      />
    </div>
  );
}

export default App;
