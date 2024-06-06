import "../../styles.css";

function App() {
  return (
    <div className="site-section bg-light" id="pricing-section">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-md-7">
              <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                <h2>Pricing</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
              <div className="pricing">
                <h3 className="text-center text-black">Basic</h3>
                <div className="price text-center mb-4 ">
                  <span><span>$47</span> / year</span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">

                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li className="remove">Lorem ipsum dolor sit amet</li>
                  <li className="remove">Consectetur adipisicing elit</li>
                  <li className="remove">Dolorum esse odio quas architecto sint</li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">Buy Now</a>
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing">
                <h3 className="text-center text-black">Premium</h3>
                <div className="price text-center mb-4 ">
                  <span><span>$200</span> / year</span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">

                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li className="remove">Dolorum esse odio quas architecto sint</li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-primary btn-md text-white">Buy Now</a>
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="pricing">
                <h3 className="text-center text-black">Professional</h3>
                <div className="price text-center mb-4 ">
                  <span><span>$750</span> / year</span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">

                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li>Dolorum esse odio quas architecto sint</li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">Buy Now</a>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
  );
}

export default App;
