import "./Footer.css";

function Footer() {
  return (
      <div className="footer">
          <div className="footerNav">
              {/*unordered list*/}
              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">Our Team</a></li>
              </ul>
          </div>
          <div className="horizontal-line"></div>
          <div className="footer-facts">
              <p> Arnes Elektronik tager forbehold for korrektur- og trykfejl samt spris- og afgiftsændringer.</p>
              <p> Der gøres opmærksom på ingen bestilling er benindende før Arnes Elektronik har sendt bindende faktura.</p>

          </div>
          <div className="horizontal-line"></div>
          <div className="footer-copyright">
              <p>copyright &copy;2024 Arnes Elektronik, designed by <span>VORES GRUPPE</span> </p>
          </div>
      </div>
  );
}

export default Footer;
