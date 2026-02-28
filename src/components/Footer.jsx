import "./Footer.css";

function Footer() {
  return (
    <footer className="asw-footer">
      <div className="footer-top">
        <div className="footer-col">
          <h6>ABOUT</h6>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>

        <div className="footer-col">
          <h6>HELP</h6>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>

        <div className="footer-col">
          <h6>POLICY</h6>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Security</p>
        </div>

        <div className="footer-col">
          <h6>SOCIAL</h6>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 AswHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;