import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
        <div class="footer-container">
            <div class="footer-section company-info">
                <div class="footer-logo">
                    <a href="index.html"><img src="images/logo-mohit.jpg" alt="logo" width="240px" height="60px"/></a>
                    {/* <!-- <div class="malu">
                        <h3>MaluWeld</h3>
                        <p>Innovative Welding Solutions for Every Industry</p>
                    </div> --> */}
                </div>
            </div>
            <div class="footer-section quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about_us.html">About Us</a></li>
                    <li><a href="product_us.html">Products</a></li>
                    <li><a href="contact_us.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section contact-details">
                <h3>Contact Us</h3>
                <ul>
                    <li><i class="fas fa-phone"></i>Phone: +91 8208811424</li>
                    <li><i class="fas fa-mobile-alt"></i>Mobile: +91 9822230800</li>
                    <li><i class="fas fa-envelope"></i>Email: info@maluweld.com</li>
                    <li><i class="fas fa-map-marker-alt"></i>Address: Bhawani Welding Pvt. Ltd.,</li>
                    <li>Plot No. 204 & 205, Umiya Industrial Area,</li>
                    <li>Kapsi, Bhandara Road, Nagpur, Maharashtra</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>All Rights Reserved. Designed by ♥ PSK TECHNOLOGIES PVT. LTD.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
