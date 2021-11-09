import React from "react";
import contact from "../images/contact-light.svg";

const Footer = () => {
  return (
    <footer class="footer_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-6" data-aos="fade-up">
            <div class="footer_social text-left">
              <p>GUILLERMO GASCON</p>
              <form className="position-relative">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="mw-100 "
              />
              <button className="position-absolute submit-btn"><i class="fas fa-long-arrow-alt-right"></i></button>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-6" data-aos="fade-up">
            <div class="footer_social text-left pl-3">
              <p>Tema Legal</p>
              <ul>
                <li>
                  <a href="#">Politica privacidad</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-6" data-aos="fade-up">
            <div class="footer_social text-left pl-3">
              <p>Categorias</p>
              <ul>
                <li>
                  <a href="#">Podcast de SEO</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Canal YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-6" data-aos="fade-up">
            <div class="footer_social text-left">
              <p>Social Media</p>
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i> Linkedin
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                {/* <li><a href="#"><i class="fab fa-facebook-f"></i> Linkedin</a></li>
                                    <li><a href="#"><i class="fab fa-yelp"></i> Link Five</a></li> */}
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-12" data-aos="fade-up">
            <div class="footer-logo">
              {/* <p>We Accept</p> */}
              <a href="#" className="contact-btn">
                <img src={contact} alt="Welcome Vactor" width="100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
