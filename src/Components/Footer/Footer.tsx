import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container fixed-width center">
          <div className="col1">
            <div className="row1">
              <div className="footer-section">
                <h3>Shop</h3>
                <ul>
                  <li>
                    <Link to="#">iPhone</Link>
                  </li>
                  <li>
                    <Link to="#">Mac</Link>
                  </li>
                  <li>
                    <Link to="#">iPad</Link>
                  </li>
                  <li>
                    <Link to="#">Apple Watch</Link>
                  </li>
                  <li>
                    <Link to="#">AirPods</Link>
                  </li>
                  <li>
                    <Link to="#">Accessories</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="#">Apple Music</Link>
                  </li>
                  <li>
                    <Link to="#">Apple TV+</Link>
                  </li>
                  <li>
                    <Link to="#">Apple Arcade</Link>
                  </li>
                  <li>
                    <Link to="#">Apple News+</Link>
                  </li>
                  <li>
                    <Link to="#">iCloud</Link>
                  </li>
                  <li>
                    <Link to="#">Apple Pay</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>About Apple</h3>
                <ul>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Events</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Jobs</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Sustainability</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link to="#">Get Help</Link>
                  </li>
                  <li>
                    <Link to="#">Apple Support</Link>
                  </li>
                  <li>
                    <Link to="#">Warranty & Repairs</Link>
                  </li>
                  <li>
                    <Link to="#">Order Status</Link>
                  </li>
                  <li>
                    <Link to="#">Returns & Refunds</Link>
                  </li>
                  <li>
                    <Link to="#">Legal</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row2">
              <div className="footer-section">
                <h3>Education</h3>
                <ul>
                  <li>
                    <Link to="#">Apple Education</Link>
                  </li>
                  <li>
                    <Link to="#">Teachers</Link>
                  </li>
                  <li>
                    <Link to="#">Students</Link>
                  </li>
                  <li>
                    <Link to="#">Parents</Link>
                  </li>
                  <li>
                    <Link to="#">Higher Education</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>For Business</h3>
                <ul>
                  <li>
                    <Link to="#">Apple Business</Link>
                  </li>
                  <li>
                    <Link to="#">Small Business</Link>
                  </li>
                  <li>
                    <Link to="#">Enterprise</Link>
                  </li>
                  <li>
                    <Link to="#">Developer</Link>
                  </li>
                  <li>
                    <Link to="#">IT</Link>
                  </li>
                  <li>
                    <Link to="#">Government</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Developers</h3>
                <ul>
                  <li>
                    {" "}
                    <Link to="#">App Store</Link>
                  </li>

                  <li>
                    <Link to="#">Mac App Store</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Apple Developer</Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="#">Design</Link>
                  </li>
                  <li>
                    <Link to="#">Marketing & Sales</Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="#">Resources</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Values</h3>
                <ul>
                  <li>
                    {" "}
                    <Link to="#">Privacy</Link>
                  </li>
                  <li>
                    <Link to="#">Security</Link>
                  </li>
                  <li>
                    <Link to="#">Accessibility</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Environment</Link>
                  </li>
                  <li>
                    <Link to="#">Diversity & Inclusion</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Supplier Responsibility</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col2">
            <div className="footer-copyright">
              <p>&copy; 2024 Apple Inc. All rights reserved.</p>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
