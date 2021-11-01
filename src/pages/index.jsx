import * as React from "react";
// import home_hero from '../assets/images/vactor/home-hero-vactor.png'
// import protect from '../assets/images/icon/protect.png'
// import email from '../assets/images/icon/email.png'
// import internet from '../assets/images/icon/internet.png'
// import cyberscurity from '../assets/images/vactor/cyberscurity.png'
// import solutions_1 from '../assets/images/icon/solutions_1.png'
// import solutions_2 from '../assets/images/icon/solutions_2.png'
// import solutions_3 from '../assets/images/icon/solutions_3.png'
// import solutions_4 from '../assets/images/icon/solutions_4.png'
// import solutions_5 from '../assets/images/icon/solutions_5.png'
// import solutions_6 from '../assets/images/icon/solutions_6.png'
// import solutions_7 from '../assets/images/icon/solutions_7.png'
// import solutions_8 from '../assets/images/icon/solutions_8.png'
// import solutions_9 from '../assets/images/icon/solutions_9.png'
// import contact_vactor from '../assets/images/vactor/contact-vactor.png'

import heroImg from "../images/hero-img.jpg";
import seeMoreWhite from "../images/see-more-white.svg";
import seeMoreBlack from "../images/see-more-black.svg";
import work1 from "../images/work1.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work5.jpg";
import Layout from "../components/Layout";
// import AOS from 'aos';
// import "aos/dist/aos.css";

// markup
const IndexPage = () => {
  //   React.useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //         delay: 50,
  //         once: true
  //     });
  //     AOS.refresh();
  // }, [])
  return (
    <div className="full-waypper">
      <section className="full-waypper-area-about full-waypper-area-home">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area">
            <div className="container">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_content_home" data-aos="fade-up">
                    <h1>Guillermo Gascon</h1>
                    <div className="button_home">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi laudantium placeat iste doloribus assumenda hic
                        mollitia reprehenderit quos nihil, officiis ducimus
                        aspernatur blanditiis consequuntur dolore dignissimos
                      </p>
                    </div>
                    <div className="hero_image">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 text-center">
                  <div className="see-more" data-aos="fade-up">
                    <img src={seeMoreWhite} alt="Hero Vactor" />
                  </div>
                  <div className="social-links text-white mt-5 pt-5">
                    <ul className="text-left">
                      <li className="mt-2">Twitter</li>
                      <li className="mt-2">Instagram</li>
                      <li className="mt-2">LinkedIn</li>
                    </ul>
                  </div>
                  <div className="hero-content mt-5 text-left text-white px-5">
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo, placeat temporibus obcaecati adipisci sit dolorem
                      asperiores reprehenderit tenetur fugit eius, nemo nesciunt
                      officia exercitationem ab ad est aspernatur eum iste.
                    </p>
                    <p className="mt-3">
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
          <section className="work_seaction_area mt-5">
            <div className="container">
              <div className="row my-4">
                <div className="col-lg-5">
                  <div className="work_seaction_title" data-aos="fade-up">
                    <h1>Trabajos</h1>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="work_seaction_content" data-aos="fade-up">
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
                    <div className="workOne">
                      <img src={work1} alt="" className="w-100" />
                      <h3>
                        <strong>The Cookies</strong>
                      </h3>
                    </div>
                    <div className="workTwo">
                      <img src={work3} alt="" className="w-100" />
                      <h3>
                        <strong>The Cookies</strong>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 works-col">
                  <div className="works px-4 py-3">
                    <div className="workThree">
                      <img src={work3} alt="" className="w-100" />
                      <h3>
                        <strong>The Cookies</strong>
                      </h3>
                    </div>
                    <div className="workFour">
                      <img src={work4} alt="" className="w-100" />
                      <h3>
                        <strong>The Cookies</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
                ================================================ */}
          {/*===============================================
                        Start Cybersecurity Solutions Area Design
            ================================================ */}

          <div className="container mt-5">
            <div className="row">
              {/* Hero Image */}
              <div className="col-12 text-center">
                <div className="seemore_image" data-aos="fade-right">
                  <img src={seeMoreBlack} alt="cyberscurity Vactor" width="150" />
                </div>
              </div>
              {/* Hero Image */}
            </div>
          </div>

          <section className="project_seaction_area mt-5">
            <div className="container">
              <div className="row my-4">
                <div className="col-12">
                  <div className="project_seaction_title" data-aos="fade-up">
                    <h1>Proyectos</h1>
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

          <div className="container mt-5">
            <div className="row">
              {/* Hero Image */}
              <div className="col-12 text-center">
                <div className="seemore_image" data-aos="fade-right">
                  <img src={seeMoreBlack} alt="cyberscurity Vactor" width="150" />
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
