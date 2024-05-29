import { CardQr } from "./components/cardQR/cardQr"
import './app.css';

import imgQR from "./components/cardQR/image-qr-code.png";

function App() {

  return (
    <>
    <header role="banner"></header>
      <CardQr 
        imgQr={imgQR} 
        titleQr="Improve your front-end skills by building projects"
        textQr="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </>
  )
} 

export default App
