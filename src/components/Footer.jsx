import React from 'react'
import seeMore from '../images/see-more-white.svg'

const Footer = () => {
    return (
        <footer class="footer_area">
                <div class="container">
                    <div class="row px-3">
                        <div class="col-lg-3">
                            <div class="footer_social text-left">
                                <p>GUILLERMO GASCON</p>
                                <input type="email" name="email" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                        <div class="footer_social text-left">
                                <p>GUILLERMO GASCON</p>
                                <ul>
                                    <li><a href="#">Link One<i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#">Link Two<i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#">Link Three<i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#">Link Four<i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#">Link Five<i class="fab fa-yelp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                        <div class="footer_social text-left">
                                <p>GUILLERMO GASCON</p>
                                <ul>
                                    <li><a href="#">Link One<i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#">Link Two<i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#">Link Three<i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#">Link Four<i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#">Link Five<i class="fab fa-yelp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
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
