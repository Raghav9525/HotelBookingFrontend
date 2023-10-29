import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div id="carouselExampleControls" className="carousel slide img-fluid carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("../img/car1.jpg")} className="d-block w-100 img-fluid mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("../img/car2.jpg")} class="d-block w-100 img-fluid mx-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("../img/car3.jpg")} class="d-block w-100 mx-auto" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
