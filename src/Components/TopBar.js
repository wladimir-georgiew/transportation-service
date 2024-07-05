function App() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="mx-md-2 d-inline-block"></span>
            <a href="#" onClick={OpenEmail} className="">
              <span className="mr-2  icon-phone"></span>{" "}
              <span className="d-md-inline-block">Email</span>
            </a>
            
            <div className="float-right">
              <a href="https://invite.viber.com/?g2=AQAvboKDj0OlTFMTX56h%2BsSUqPdldZOpV%2F1wY0ocNWHdLnYiD0uLRTJCi2wUpmWR" className="">
                <span className="mr-2  icon-viber"></span>{" "}
                <span className="d-md-inline-block">Viber</span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="https://t.me/+B8eOFUKoVxlhOTU8" className="">
                <span className="mr-2  icon-telegram"></span>{" "}
                <span className="d-md-inline-block">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpenEmail()
{
  window.open("mailto:"+"HighwayDrivers032@gmail.com"+'?cc='+""+'&subject='+"Order"+'&body='+"");
}

export default App;
