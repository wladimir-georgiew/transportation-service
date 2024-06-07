function App() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="#" className="">
              <span className="mr-2  icon-envelope-open-o"></span>{" "}
              <span className="d-none d-md-inline-block">info@yourdomain.com</span>
            </a>
            <span className="mx-md-2 d-inline-block"></span>
            <a href="#" className="">
              <span className="mr-2  icon-phone"></span>{" "}
              <span className="d-none d-md-inline-block">1+ (234) 5678 9101</span>
            </a>

            <div className="float-right">
              <a href="#" className="">
                <span className="mr-2  icon-twitter"></span>{" "}
                <span className="d-none d-md-inline-block">Twitter</span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#" className="">
                <span className="mr-2  icon-facebook"></span>{" "}
                <span className="d-none d-md-inline-block">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
