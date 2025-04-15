import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>
       {/* <!-- About Section --> */}
    <section class="about-us">
        <div class="about-container">
            <h2>Contact Us</h2>
            <p>Need an expert? <br/>You are more than welcomed to leave your contact info and we will be in touch
                shortly.</p>
        </div>
    </section>
    {/* <!-- Contact Cards Section --> */}
    <section class="contact-container">
        <div class="contact-card">
            <img src="images/c1.jpg" alt="" class="contact-image"/>
            <h3>VISIT US</h3>
            <p>Bhawani Welding Pvt. Ltd.<br/>Plot No. 204 & 205, Umiya Industrial Area, Kapsi, Bhandara Road, Nagpur,
                Maharashtra</p>
        </div>
        <div class="contact-card">
            <img src="images/c2.jpg" alt="" class="contact-image"/>
            <h3>CALL US</h3>
            <p>+91 8208811424<br/>+91 9822230800</p>
        </div>
        <div class="contact-card">
            <img src="images/c3.jpg" alt="" class="contact-image"/>
            <h3>EMAIL US</h3>
            <p>info@maluweld.com</p>
        </div>
    </section>

    </div>
  )
}

export default Contact
