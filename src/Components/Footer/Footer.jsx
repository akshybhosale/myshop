import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram.png";
import pinterest from "../Assets/pinterest.png";
import whatsapp from "../Assets/whatsapp.png";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";



function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>Shooper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
      <div className="footer-icon-container">
      <a id="github" href="https://github.com/akshybhosale" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" /></a>
        </div>
        <div className="footer-icon-container">
        <a id="linkedin" href="https://www.linkedin.com/in/akshay-bhosale-480a6b189/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" /></a>
        </div>
        <div className="footer-icon-container">
        <a id="instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" /> </a>
        </div>
        <div className="footer-icon-container">
        <a id="pinterest" href="https://in.pinterest.com/" target="_blank" rel="noreferrer">
          <img src={pinterest} alt="pinterest" /> </a>
        </div>
        <div className="footer-icon-container">
        <a id="whatsapp" href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2k23 - All Right Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
