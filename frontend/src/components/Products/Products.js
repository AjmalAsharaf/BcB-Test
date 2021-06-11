import React from 'react'
import './Products.css'



export default function MainProducts() {
    
    return (
        <div id='popularProducts'>
            
            <div className='sectionHeader'>
                <h2 className='sectionHead'>Popular Products</h2>
                <p className='viewMore'>VIEW MORE</p>  
            </div>
            <div className='productsRow' id='scrollingContainer'> 
                
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>


            </div>
            
        </div>
    )
}

function Products (){
    return(
        <div className='productCard'>
        <img src='\images\playstation-5-with-dualsense-front-product-shot.png' className='popularProductImage'></img>
       
        <div className='popularProductDescription'>
            <p className='popularProductBrand'>Sony</p>
            <div style={{marginTop:'-1rem',marginRight:'-4px'}}>
                <p className='ppName'>Playstation 5 bundle</p>
                <div className='offerBadge'>
                    35% OFF
                </div>
                <br/>
                <p className='ppPrice'>QAR <span style={{color:'black'}}>1,500.00</span></p>
                <p className='ppOldPrice'>QAR <strike>2,000.00</strike></p>
                
            </div>
        </div>        
    </div>
    )
    
}