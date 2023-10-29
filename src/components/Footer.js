
import React from 'react'
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {
    return (
        <div className='footer'>
            <footer class="text-center text-lg-start text-white">
                <section class="d-flex justify-content-center justify-content p-4 border-bottom">
        
                    {/* <!-- Right --> */}
                    <div className="d-flex justify-content-center text-dark"> {/* Center-align icons */}
                        <a href="#" className="me-4 text-reset">
                            <FaFacebook />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaTwitter />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaGoogle />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaInstagram />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaGithub />
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4 text-dark">Aapna Hotel</h6>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                 
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4 ">
                                <h6 class="text-uppercase fw-bold mb-4 text-dark">Useful links</h6>
                                <p>
                                    <a href="#!" class="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Room</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Contact</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4 text-dark">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> Darbhanga Bihar</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i>7542061065</p>
                                <p><i class="fas fa-phone me-3"></i>7632966717</p>

                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer