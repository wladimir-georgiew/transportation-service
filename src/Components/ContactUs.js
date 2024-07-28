import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="footer-contact">
      <div className="block-heading-1">
              <h2 style={{textAlign: "center"}}>{t("contact")}</h2>
       </div>
      {/* <button style={{placeContent: "center"}} className="btn btn-block btn-primary text-white py-3 px-5" onClick={OpenEmail}>{t("contactbtn")}</button> */}
      
      <div className="icon-items">
        <a href="#" onClick={OpenEmail} className={`inline icons mail-icon`}></a>
        <a href="https://invite.viber.com/?g2=AQAvboKDj0OlTFMTX56h%2BsSUqPdldZOpV%2F1wY0ocNWHdLnYiD0uLRTJCi2wUpmWR" className={`inline icons viber-icon`}></a>
        <a href="https://t.me/+B8eOFUKoVxlhOTU8" className={`inline icons telegram-icon`}></a>
      </div>
    </div>
  );
}

function OpenEmail() {
  window.open(
    "mailto:" +
      "HighwayDrivers032@gmail.com" +
      "?cc=" +
      "" +
      "&subject=" +
      "Order" +
      "&body=" +
      ""
  );
}

export default App;
