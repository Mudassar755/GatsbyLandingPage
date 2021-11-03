import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
// import logo from '../assets/images/logo/logo.png'

const Navbar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../assets/js/main.js";
    document.body.appendChild(script);
  });
  return (
    <header class="header_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo">
              <Link to="/">
                {/* <img src={logo} /> */}
                GUILLERMO G.
              </Link>
              {!sideMenuOpen && (
                <button
                  class="nav-bars bg-transparent border-0"
                  onClick={() => setSideMenuOpen(true)}
                >
                  <i class="fas fa-bars"></i>
                </button>
              )}
            </div>
          </div>
          <div class="col-lg-9">
            {/* -- Main Menu -- */}
            <div class="menu_area">
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Sober mi</Link>
                </li>
                <li>
                  <Link to="/">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {sideMenuOpen && (
          <div className="sideMenu" data-aos="fade-left">
            <div className="row">
              <div className="col">
                <div class="side_menu_area">
                  <button
                    class="nav-close bg-transparent border-0"
                    onClick={() => setSideMenuOpen(false)}
                  >
                    <i class="fas fa-times 2x"></i>
                  </button>
                  <ul>
                    <li className="mt-2">
                      <Link to="/">Inicio</Link>
                    </li>
                    <li className="mt-2">
                      <Link to="/">Sober mi</Link>
                    </li>
                    <li className="mt-2">
                      <Link to="/">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
