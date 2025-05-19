import React from 'react';
import './home.css';
import BannerImage from '../../assets/banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

function Home() {

    //Menu Icon
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldHalvedIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />
    
  return (
    <>
    <section id = "home">
        <div className="banner-image"></div>
        <div className="container">
            <div className="banner-outer">
               <div className="col" >
               <h3 className="title">
                    WE PROMOTE YOUR <span>BUSINESS</span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut quo nesciunt commodi ea dicta ab voluptate debitis,
                autem ratione aliquam ex officia nihil</p>
                <div className="btn-wrapper">
                    <a href="/" className="btn">Get Started</a>
                </div>
               </div>
               <div className="col">
                <div className="sub-banner-image">
                    <img src ={BannerImage} alt ="Banner_Image"></img>
                </div>
                <div className="banner-style-1">
                    {faChartIcon}
                    <h4>Business Analysis</h4>
                </div>
                <div className="banner-style-1 banner-style-2">
                    {faShieldHalvedIcon}
                    <h4>99.9% Success </h4>
                </div>
                <div className="banner-style-1 banner-style-3">
                    {faChartAreaIcon}
                    <h4>Strategy</h4>
                </div>
               </div>
            </div>
        </div>
    
    </section>
    </>
  )
}

export default Home;
