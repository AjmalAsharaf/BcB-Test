import React,{Fragment} from 'react'

import Navbar from './components/Navbar/Navbar'
import MainProducts from './components/Products/Products';
import Banner from './components/Banner/Banner'
import BlueBanner from './components/BlueBanner/BlueBanner'
import Footer from './components/Footer/Footer'

function Home() {
    return (
        <Fragment>
       
          <Navbar />
          <BlueBanner/>
          <Banner/>
          <MainProducts/>
          <Footer />


    
       
          
      
          </Fragment>
    )
}

export default Home
