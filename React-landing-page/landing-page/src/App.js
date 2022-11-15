import React from "react";
import Header from "./components/Header";
import logoimg from "./images/logo_divpay2.png";
import Testimonios from "./components/Testimonios"
import ilustracion1 from "./images/ilustracion1.svg";
import ilustracion4 from "./images/ilustracion4.svg";
import ilustracion3 from "./images/ilustracion3.svg";
import Servicios from "./components/Nuestros Servicios";
import Footer from "./components/Footer";
import Calculadora from "./components/Calculadora";
import cal_imagen1 from "./images/flecha.png";
import cal_imagen2 from "./images/flecha-hacia-abajo.png";
import ComoFunciona from "./components/ComoFunciona";
import com_imagen from "./images/ilustracion2.svg";
import QuienesSomos from "./components/QuienesSomos";
import profile1 from "./images/renzo.PNG";
import profile2 from "./images/sergio.PNG";
import profile3 from "./images/jak.PNG";
import profile4 from "./images/jhair.PNG";

function App() {
  return (
    <div className="App">
      <Header 
      image={logoimg}
      />
      <Calculadora
      image1={cal_imagen1}
      image2={cal_imagen2}
      />
      <ComoFunciona
      image={com_imagen} 
      />
      <QuienesSomos 
      pfp1={profile1}
      pfp2={profile2}
      pfp3={profile3}
      pfp4={profile4}
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
