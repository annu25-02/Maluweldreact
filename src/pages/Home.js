import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
       <main className='mainHomeImg'>
        <div class="container" >
            <div class="text-section">
                <h1>MANUFACTURER OF ALL
                    <span>TYPES OF WELDING</span>
                    ELECTRODES AND WIRES
                </h1>
                <span class="index-head">India's Largest selling Maluweld!<br/>
                    A wide range of products to cater every demand
                </span>
                <a href="contact_us.html" class="btn">CONTACT US</a>
            </div>
            <div class="image-section">
                <img src="images/home-imag-side.jpeg" alt="Metalwork"/>
            </div>
        </div>

        <div id="card-container">
            <div class="feature-item">
                <h2>10+ YEARS EXPERIENCE</h2><br/>
                <p>Delivering quality services and satisfaction to our clients from the past 10+ years.</p>
            </div>
            <div class="feature-item">
                <h2>CERTIFIED COMPANY</h2><br/>
                <p>Malu Weld is an ISO 9001 certified company equipped with the best Quality Management.</p>
            </div>
            <div class="feature-item">
                <h2>DISTRIBUTION NETWORK</h2><br/>
                <p>Maluweld products are distributed across India and in various countries across the world.</p>
            </div>
            <div class="feature-item">
                <h2>EXPERT TEAM</h2><br/>
                <p>Our team is filled with people having a wide range of experience in the welding field.</p>
            </div>
        </div>

        <section class="expertise">
            <h1>OUR EXPERTISE</h1>
            <div class="expertise-container">
                <div class="expertise-item">
                    <img src="images/b1.jpg" alt=""/>
                    <h3>WE ARE PROFESSIONAL ORGANISATION</h3><br/>
                    <p>We make professional quality welding consumables for a wide range of materials.</p>
                </div>
                <div class="expertise-item">
                    <img src="images/p1.jpg" alt=""/>
                    <h3>WE ARE TRUSTED TEAM MEMBERS</h3><br/>
                    <p>Wealth of experience and a broad range of products earn us the trust of clients.</p>
                </div>
                <div class="expertise-item">
                    <img src="images/h1.jpg" alt=""/>
                    <h3>WE ARE EXPERT PRODUCTION TEAM</h3><br/>
                    <p>Our expert production team makes the finest quality products.</p>
                </div>
            </div>
        </section>

        <section class="clients-grid">
            <div class="client">
                <img src="images/jain.jpg" alt=""/>
            </div>
            <div class="client">
                <img src="images/grism industri ltd.jpg" alt=""/>
            </div>
            <div class="client">
                <img src="images/bajaj.jpg" alt=""/>
            </div>
            <div class="client">
                <img src="images/beml.jpg" alt=""/>
            </div>
            <div class="client">
                <img src="images/aditya birala.jpg" alt=""/>
            </div>
            <div class="client">
                <img src="images/diwanka.jpg" alt=""/>
            </div>
        </section>

    </main>
    </div>
  )
}

export default Home
