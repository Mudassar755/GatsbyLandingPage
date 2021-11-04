import * as React from "react";
import heroImg from "../images/hero-img.jpg";
import contactLight from "../images/contact-light.svg";
import contactDark from "../images/contact-dark.svg";

import heroImg1 from "../images/hero-img1.png";
import heroImg2 from "../images/hero-img2.png";
import heroImg3 from "../images/hero-img3.png";
import heroImg4 from "../images/hero-img4.png";

import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";
import work4 from "../images/work4.png";

import project1 from "../images/proj1.png";
import project2 from "../images/proj2.png";
import project3 from "../images/proj3.png";

import Layout from "../components/Layout";
import AOS from "aos";

const IndexPage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true,
    });
    AOS.refresh();

    // const degreeToRadian = (angle) => {
    //   return angle * (Math.PI / 180);
    // };

    // const radius = 75;
    // const diameter = radius * 2;

    // const circle = document.querySelector("#circular-text");
    // circle.style.width = `${diameter}px`;
    // circle.style.height = `${diameter}px`;

    // const text = circle.innerText;
    // const characters = text.split("");
    // circle.innerText = null;

    // const startAngle = -90;
    // const endAngle = 270;
    // const angleRange = endAngle - startAngle;

    // const deltaAngle = angleRange / characters.length;
    // let currentAngle = startAngle;

    // characters.forEach((char, index) => {
    //   const charElement = document.createElement("span");
    //   charElement.innerText = char;
    //   const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    //   const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

    //   const transform = `translate(${xPos}px, ${yPos}px)`;
    //   const rotate = `rotate(${index * deltaAngle}deg)`;
    //   charElement.style.transform = `${transform} ${rotate}`;

    //   currentAngle += deltaAngle;
    //   circle.appendChild(charElement);
    // });
  }, []);
  return (
    <div className="full-waypper">
      <section className="full-waypper-area-about full-waypper-area-home">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area">
            <div className="container pt-5">
              <div className="row mb-3" data-aos="fade-up">
                <div className="col-lg-6">
                  <div className="hero_title">
                    <h1>Guillermo Gascon</h1>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="see-more">
                    {/* <div id='circular-text'>contact</div> */}
                    <a href="#" className="contact-btn">
                    <img src={contactLight} alt="Hero Vactor" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row my-3" data-aos="fade-up">
                <div className="col-lg-6">
                  <div className="hero_content">
                    <p>
                      ¡Hola! Soy Guillermo Gascón, SEO afincado en Zaragoza con
                      aspiraciones de vivir frente al mar. Trabajo en desarrollo
                      web y marketing junto a mis dos socios en TheCookies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="social-links text-white">
                    <ul className="text-left">
                      <li className="mt-2">
                        <i class="fab fa-facebook-f"></i> Twitter
                      </li>
                      <li className="mt-2">
                        <i class="fab fa-instagram"></i> Instagram
                      </li>
                      <li className="mt-2">
                        <i class="fab fa-linkedin-in"></i> LinkedIn
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row my-3" data-aos="fade-up">
                <div className="col-lg-7">
                  <div className="hero_image">
                    <div className="hero-img1">
                      <img src={heroImg1} />
                      </div>
                    <div className="hero-img2">
                      <img src={heroImg2} />
                      </div>
                    <div className="hero-img3">
                      <img src={heroImg3} />
                      </div>
                    <div className="hero-img4">
                      <img src={heroImg4} />
                      </div>
                    {/* <img src={heroImg} alt="" /> */}
                  </div>
                </div>
                <div className="col-lg-5 text-center py-lg-5">
                  {/* <div className="logo-icons">
                    <div className="see-more" data-aos="fade-up">
                      <img src={contactLight} alt="Hero Vactor" />
                    </div>
                    <div className="social-links text-white mt-lg-5 pt-lg-5">
                      <ul className="text-left">
                        <li className="mt-2">
                          <i class="fab fa-facebook-f"></i> Twitter
                        </li>
                        <li className="mt-2">
                          <i class="fab fa-instagram"></i> Instagram
                        </li>
                        <li className="mt-2">
                          <i class="fab fa-linkedin-in"></i> LinkedIn
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <div className="hero_content mt-5 text-left px-lg-5">
                    <p className="mt-lg-3">
                      Estratega nato, no concibo que los proyectos en los que
                      trabajo no tengan un horizonte definido. Me gusta trazar
                      un plan y llevarlo a cabo
                    </p>
                    <p className="mt-lg-3">
                      Además, se me da bien estar en medio. Es una cualidad poco
                      común y la aprovecho para gestionar proyectos y procesos
                      permitiendo que todo el trabajo fluya según lo previsto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
        					End Hero Content Area Design
                ================================================ */}
          {/*===============================================
                        Start We identify Area Design
            ================================================ */}
          <section className="work_seaction_area mt-lg-5 pb-sm-1">
            <div className="container">
              <div className="row my-4">
                <div className="col-lg-5" data-aos="fade-right">
                  <div className="work_seaction_title">
                    <h1>Trabajos</h1>
                  </div>
                </div>
                <div className="col-lg-7" data-aos="fade-left">
                  <div className="work_seaction_content">
                    <p>
                      Aquí tiienes algunas de las empresas donde he invertido mi
                      tiempo y los proyectos personales más divertidos donde
                      participo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 works-col">
                  <div className="works px-4 py-3">
                    <div className="workOne" data-aos="fade-right">
                      <img src={work1} alt="" className="w-100" />
                      <h3>
                        <strong>Project One</strong>
                      </h3>
                    </div>
                    <div className="workTwo" data-aos="fade-right">
                      <img src={work2} alt="" className="w-100" />
                      <h3>
                        <strong>Project Two</strong>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 works-col">
                  <div className="works px-4 py-3">
                    <div className="workThree" data-aos="fade-left">
                      <img src={work3} alt="" className="w-100" />
                      <h3>
                        <strong>Project Three</strong>
                      </h3>
                    </div>
                    <div className="workFour" data-aos="fade-left">
                      <img src={work4} alt="" className="w-100" />
                      <h3>
                        <strong>Project Four</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div className="container mt-lg-5">
            <div className="row">
              <div className="col-12 text-center">
                <div className="seemore_image" data-aos="fade-right">
                  <img
                    src={contactDark}
                    alt="cyberscurity Vactor"
                    width="150"
                  />
                </div>
              </div>
            </div>
          </div> */}

          <section className="project_seaction_area mt-lg-5">
            <div className="container">
              <div className="row my-4">
                <div className="col-12">
                  <div className="project_seaction_title" data-aos="fade-up">
                    <h1>Proyectos</h1>
                  </div>
                  <div className="project_h_repeat" data-aos="fade-right">
                    <h1 className="mx-4">Proyectos</h1>
                    <h1 className="mx-4">Proyectos</h1>
                    <h1 className="mx-4">Proyectos</h1>
                    <h1 className="mx-4">Proyectos</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 my-3">
                  <div className="project1" data-aos="fade-up">
                    <img src={project1} alt="" />
                    <h3>Proyectos</h3>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="project2" data-aos="fade-up">
                    <img src={project2} alt="" />
                    <h3>Proyectos</h3>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="project3" data-aos="fade-up">
                    <img src={project3} alt="" />
                    <h3>Proyectos</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mt-lg-5">
            <div className="row">
              {/* Hero Image */}
              <div className="col-12 text-center">
                <div className="seemore_image" data-aos="fade-right">
                <a href="#" className="contact-btn">
                  <img
                    src={contactDark}
                    alt="cyberscurity Vactor"
                    width="150"
                  />
                  </a>
                </div>
              </div>
              {/* Hero Image */}
            </div>
            <hr />
          </div>
        </Layout>
      </section>
    </div>
  );
};

export default IndexPage;
