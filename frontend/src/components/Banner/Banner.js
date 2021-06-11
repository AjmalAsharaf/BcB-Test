import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div>


            <div id="carouselExampleCaptions" className="carousel slide carousel-fade mainBanner" data-bs-ride="carousel">



                <img src='/images/banner.png' className="d-block w-100 bannerImage img-fluid" alt="..." />
                <div className="carousel-caption text-left d-none d-md-block hello2" style={{ left: '8%', top: '5rem' }}>
                    <button className="hello" >Buy Now 
                    <img src='/images/buyIcon.png' className="imgBuck"></img></button>
                   
                </div>





            </div>

        </div>
    )
}
