import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div>
       <section class="about-us">
        <div class="about-container">
            <h2>Our Products</h2><br/>
            <p>India's Largest selling Maluweld!</p>
            <p>A wide range of products to cater to every demand.</p>
        </div>
    </section>
    <div id="container2">
        <div class="products">
            <div class="box1">
                {/* <img id="boxh" src="images/product-3.jpg"/>  */}
                <img id="boxh" src="images/product-3.jpg" alt="MIG Welding Wire"/>
                <div class="content">
                    <h1>Welding Wire</h1><br/>
                    <span style={{ fontSize: 18, fontStyle: "italic", color: "whitesmoke", fontWeight: "bolder" }}>
  Welding Wire. A flux core wire welding wire is a slim metal rod that is heated with high-intensity
</span>

                </div>
            </div>
            <div class="box1">
                <img id="boxh" src="images/product-1.jpg" alt="Welding Machine Kit"/>
                <div class="content">
                    <h1>MIG welders</h1><br/>
                    <span  style={{fontSize:"18px",fontStyle:"italic",color:"white",fontWeight:"bolder"}}>Welding equipment
                        includes stick welders, tig welders, MIG welders, multi-</span>
                </div>
            </div>
            <div class="box1"> <img id="boxh" src="images/product-4.jpg" alt="UV Protection Welding Sunglass"/>
                <div class="content">
                    <h1>Safety Glasses</h1><br/>
                    <span  style={{fontSize:"18px",fontStyle:"italic",color:"white",fontWeight:"bolder"}}>
                        Safety glasses can be worn to protect the welder's eyes from heat and optical</span>
                </div>
            </div>
            <div class="box1"> <img id="boxh" src="images/product-2.jpg" alt="Portable Welding Kit"/>
                <div class="content">
                    <h1>TIG welders</h1><br/>
                    <span  style={{fontSize:"18px",fontStyle:"italic",color:"white",fontWeight:"bolder"}}>Welding Wire. a
                        flux core wire Welding wire is a slim metal rod that is heated with high-intensity</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product
