import React from 'react'
import './about.css'
import AboutImage from '../../assets/about_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie,faTruckFast,faUserClock,faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function About() {

    const faBusinessTimeIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id ="about">
        <div className="container">
            <div className="title_heading">
                <h3>We Provide Storage Remarkable Ideas!</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium r</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessTimeIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
            <div className="about_box_detail">
                <div className="about_col">
                    <div className="about_image">
                        <img src = {AboutImage} alt = "about"></img>
                    </div>
                    <div className="image_info_box">
                        <h6 className="image_info_title">GET A PRICE QUOTE TODAY</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Repudiandae voluptate omnis harum at impedit ma</p>
                        <a href ="/">{faPhoneIcon}<span>9123456780</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business Skills that will increase your earning</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum vel ea vero eius dolore conse
                    ctetur ipsum laudantium quam quia delectus? Ducimus provident doloremque consequuntur et commodi, excepturi esse quis facere!</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis optio quis vero perspiciatis deserunt</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open your business online</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis optio quis vero perspiciatis deserunt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};
