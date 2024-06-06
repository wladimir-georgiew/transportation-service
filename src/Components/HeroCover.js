import "../styles.css";
import background from "../images/depot_hero_1.jpg";

function App() {
  return (
    <div className="ftco-blocks-cover-1">
      <div
        className="ftco-cover-1 overlay"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-6">
              <h1>Transportations &amp; Logistics</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus dolorem eius eligendi esse quod?
              </p>
              {/* <form action="#">
              <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Your tracking number">
                <input type="submit" className="btn btn-primary text-white px-4" value="Track Now">
              </div>
            </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
