import "../../styles.css";
import background from "../../images/depot_delivery_1.jpg";

function App() {
  return (
    <div className="block__73694 site-section border-top" id="why-us-section">
    <div className="container">
      <div className="row d-flex no-gutters align-items-stretch">

        <div className="col-12 col-lg-6 block__73422 order-lg-2" style={{ backgroundImage: `url(${background})` }} data-aos="fade-left" data-aos-delay="">
        </div>



        <div className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right" data-aos-delay="">
          <h2 className="mb-4 text-black">Why Depot</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam error aliquid, dolores animi obcaecati quisquam accusamus soluta?</p>

          <ul className="ul-check primary list-unstyled mt-5">
            <li>Cargo express</li>
            <li>Secure Services</li>
            <li>Secure Warehouseing</li>
            <li>Cost savings</li>
            <li>Proven by great companies</li>
          </ul>

        </div>

      </div>
    </div>
  </div>
  );
}

export default App;
