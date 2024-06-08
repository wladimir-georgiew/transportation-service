import logo from "./logo.svg";
import "./App.css";
import TopBar from './Components/TopBar.js';
import NavBar from './Components/NavBar.js';
import HeroCover from './Components/HeroCover.js';
import ContactUs from './Components/ContactUs.js';
import MainContent from './Components/MainContent.js';
import LanguageSelector from './Components/LanguageSelector.js';
import LanguageSelectorHeader from './Components/LanguageSelectorHeader.js';
import "./styles.css";

import "./i18n";

// Import the external CSS files
// import 'https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap';
// import './fonts/flaticon/font/flaticon.css';
// import './fonts/icomoon/style.css';
 import './css/bootstrap.min.css';
// import './css/jquery.fancybox.min.css';
// import './css/owl.carousel.min.css';
// import './css/owl.theme.default.min.css';
// import './css/aos.css';

function App() {
  return (
    <div className="App">
      <div className="site-wrap" id="home-section">
        <TopBar />
        <LanguageSelectorHeader/>
        {/* <LanguageSelector/> */}
        {/* <NavBar /> */}
        <HeroCover />
        <MainContent />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
