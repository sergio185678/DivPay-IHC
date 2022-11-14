import React from "react";
import Header from "./components/Header";
import logoimg from "./images/logo_divpay2.png";
import Testimonios from "./components/Testimonios"
import ilustracion1 from "./images/ilustracion1.svg";
import ilustracion4 from "./images/ilustracion4.svg";
import ilustracion3 from "./images/ilustracion3.svg";
import Servicios from "./components/Nuestros Servicios"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header 
      image={logoimg}
      />
      <Testimonios />
      <Servicios 
      image1={ilustracion1}
      image2={ilustracion4}
      image3={ilustracion3}
      />
      <Footer />
    </div>
  );
}

export default App;
