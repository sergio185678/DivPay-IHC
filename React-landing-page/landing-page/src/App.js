import React from "react";
import Header from "./components/Header";
import logoimg from "./images/logo_divpay2.png";

function App() {
  return (
    <div className="App">
      <Header 
      image={logoimg}
      />
    </div>
  );
}

export default App;
