import React from 'react'
import seeMore from '../images/see-more-white.svg'

const Footer = () => {
    return (
        <footer class="footer_area">
                <div class="container">
                    <div class="row px-3">
                        <div class="col-lg-3 col-md-3 col-6">
                            <div class="footer_social text-left">
                                <p>GUILLERMO GASCON</p>
                                <input type="email" name="email" placeholder="Enter Email" className="mw-100 " />
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-6">
                        <div class="footer_social text-left">
                                <p>GUILLERMO GASCON</p>
                                <ul className="pl-4">
                                    <li><a href="#">Link One</a></li>
                                    <li><a href="#">Link Two</a></li>
                                    <li><a href="#">Link Three</a></li>
                                    <li><a href="#">Link Fourn</a></li>
                                    <li><a href="#">Link Five</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-6">
                        <div class="footer_social text-left">
                                <p>GUILLERMO GASCON</p>
                                <ul className="pl-4">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i> Link One</a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i> Link Two</a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i> Link Three</a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i> Link Four</a></li>
                                    <li><a href="#"><i class="fab fa-yelp"></i> Link Five</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-6">
                            <div class="text-left">
                                {/* <p>We Accept</p> */}
                                <img src={seeMore} alt="Welcome Vactor" width="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
