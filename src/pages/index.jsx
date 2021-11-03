import * as React from "react";
import heroImg from "../images/hero-img.jpg";
import seeMoreWhite from "../images/see-more-white.svg";
import seeMoreBlack from "../images/see-more-black.svg";
import work1 from "../images/work1.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work5.jpg";
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
                <div className="col-lg-6" >
                  <div className="hero_title">
                    <h1>Guillermo Gascon</h1>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div className="see-more">
                  {/* <div id='circular-text'>contact</div> */}
                    <img src={seeMoreWhite} alt="Hero Vactor" />
                  </div>
                </div>
              </div>
              <div className="row my-3" data-aos="fade-up">
                <div className="col-lg-6">
                  <div className="hero_content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi laudantium placeat iste doloribus assumenda hic
                      mollitia reprehenderit quos nihil, officiis ducimus
                      aspernatur blanditiis consequuntur dolore dignissimos
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
                <div className="col-lg-6">
                  <div className="hero_image">
                    <img src={heroImg} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  {/* <div className="logo-icons">
                    <div className="see-more" data-aos="fade-up">
                      <img src={seeMoreWhite} alt="Hero Vactor" />
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo, placeat temporibus obcaecati adipisci sit dolorem
                      asperiores reprehenderit tenetur fugit eius, nemo nesciunt
                      officia exercitationem ab ad est aspernatur eum iste.
                    </p>
                    <p className="mt-lg-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo, placeat temporibus obcaecati adipisci sit dolorem
                      asperiores reprehenderit tenetur fugit eius, nemo nesciunt
                      officia exercitationem ab ad est aspernatur eum iste.
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
                  <div className="work_seaction_title" >
                    <h1>Trabajos</h1>
                  </div>
                </div>
                <div className="col-lg-7" data-aos="fade-left">
                  <div className="work_seaction_content">
                    <p>
                      We identify, detect, protect and defend against
                      Cybersecurity Attacks.
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
                      <img src={work3} alt="" className="w-100" />
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
                    <div className="workFour"data-aos="fade-left" >
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
                    src={seeMoreBlack}
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
                    <img src={work3} alt="" />
                    <h3>Proyectos</h3>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="project2" data-aos="fade-up">
                    <img src={work3} alt="" />
                    <h3>Proyectos</h3>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="project3" data-aos="fade-up">
                    <img src={work3} alt="" />
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
                  <img
                    src={seeMoreBlack}
                    alt="cyberscurity Vactor"
                    width="150"
                  />
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
