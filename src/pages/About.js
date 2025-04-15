import React from 'react'
import "./About.css"


function About() {
  return (
    <>
    
     <div className="video-background">
        <video autoPlay muted loop>
            <source src="images/videomp4.mp4" type="video/mp4" />
        </video>
    </div>

    <section className="about-us" >
        <div className="about-container">
            <h2><b>ABOUT US</b></h2><br />
            <div className="separator"></div>
            <p>India's Largest selling Maluweld!</p>
            <p>A wide range of products to cater every demand.</p>
        </div>
    </section>


    <section className="background-section">
        <div className="content-box">
            <h2 align="center"><b>What is Malu Weld</b></h2><br /><br />
            <p>
                Malu Weld is an ISO 9001 certified company equipped with best Quality Management.
                Malu Electrodes has been serving the Indian industry with the finest range of welding
                consumables since 2001. Maluweld products are distributed across India and in various
                countries across the world. We manufacture and export welding electrodes and wires.
            </p>
            <p>
                The company seeks to develop new, high-quality product families faster, with the primary
                focus on long-term benefits. Delivering quality services and satisfaction to our clients
                from the past 10+ years, our team is filled with people having a wide range of experience
                in the welding field.
            </p>
        </div>
    </section>
    <main>
        <div className="Misa-Amane">
            <div className="Naomi">OUR MISSION</div>
            <div className="Princess "></div>
            <span className="Sayu">
                Our Mission is to be globally known as a
                trustworthy partner to the core industry.
                We will earn our customers enthusiasm through
                continuous improvement driven by the integrity,
                teamwork, and innovation of our people. </span>
        </div>
    </main>

    <section className="clients-grid">
        <div className="client">
            <img src="images/jain.jpg" alt="Jain Irrigation" />
        </div>
        <div className="client">
            <img src="images/grism industri ltd.jpg" alt="Grasim Industries" />
        </div>
        <div className="client">
            <img src="images/bajaj.jpg" alt="Bajaj Electricals" />
        </div>
        <div className="client">
            <img src="images/beml.jpg" alt="BEML" />
        </div>
        <div className="client">
            <img src="images/aditya birala.jpg" alt="Aditya Birla Group" />
        </div>
        <div className="client">
            <img src="images/diwanka.jpg" alt="Diwanka Group" />
        </div>
    </section>
    </>
  )
}

export default About