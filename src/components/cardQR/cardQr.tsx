import './style.css';

interface PropsCardQr{
  imgQr?: string;
  titleQr: string;
  textQr: string;
}

export const CardQr: React.FC<PropsCardQr> = ({ imgQr, titleQr, textQr }) =>{
  return(
    <>
      <div role='contentinfo' className="cardQr">
        <img className="imgQR" src={imgQr} alt="QR code" />
        <div className="textQR">
          <h1>{titleQr}</h1>
          <p>{textQr}</p>
        </div>
      </div>
    </>
  )
}