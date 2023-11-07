import React from 'react';
import { Link } from "react-router-dom";
import './../styles/homes.css'



const Jatin = () => {
  return (

    <div>
  <meta charSet="UTF-8" />
  <title>AAC Final Project</title>
  <link rel="stylesheet" href="main.css" />
  <link rel="stylesheet" type="text/css" href="main.css" />
  <div className="pooji">
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="spirals.html">Spirals</a></li>
        <li><a href="rhythms.html">Rhythms</a></li>
        <li><a href="aac.html">AAC</a></li>
        <li><a href="ecell.html">ECELL</a></li>
        <li><a href="spices.html">Spices</a></li>
        <li><a href="login.html">LOGIN</a></li>
      </ul>
    </nav>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src="https://cdn.sanity.io/images/dqyhuxze/production/ae77420c9c4441df27104fa2570ab1528eef0af9-1079x573.jpg?w=1079&h=573&auto=format" style={{width: '100%', height: 600}} />
      </div>
      <div className="mySlides fade">
        <img src="https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1682599705.png" style={{width: '100%', height: 600}} />
      </div>
      <div className="mySlides fade">
        <img src="https://i.ytimg.com/vi/lFRShqvehuM/maxresdefault.jpg" style={{width: '100%', height: 600}} />
      </div>
    </div>
    <br />
    <br /><br />
    <div style={{textAlign: 'center'}}>
      <span className="dot" /> 
      <span className="dot" /> 
      <span className="dot" /> 
    </div>
  </div>
  <h2 className="heading">Latest Posts</h2>
  <link rel="stylesheet" href="latest.css" />
  <div className="container">
    <div className="post">
      <div className="post_img">
        <img src="https://i.pinimg.com/originals/d8/fd/96/d8fd96796da5cdb79902403d6d863a1e.jpg" alt />
      </div>
      <div className="post_info">
        <div className="post_date">
          <span>02 Jul 23</span>
          <span>Spirals GRIET</span>
        </div>
        <h1 className="post_title">M Akshaya Reddy</h1>
        <p className="post_text">
          Come! Fall in love with the Spirals Carnival
          The Spirals Carnival is on 8th of July 2023. 
        </p>
        <a href="#" className="post_cta">Read More</a>
      </div>
    </div>
    <div className="post">
      <div className="post_img">
        <img src="https://i.pinimg.com/564x/a8/1b/5d/a81b5d45b7e082ae0569aac333fa402c.jpg" alt />
      </div>
      <div className="post_info">
        <div className="post_date">
          <span>02 Jul 23</span>
          <span>Team Spirals</span>
        </div>
        <h1 className="post_title">B Saketh Reddy</h1>
        <p className="post_text">
          Alvida to our General Secretary-Bharadwaj Cheruvu
          A vote of thanks to out General Secretary, Bharadwaj Cheruvu.
        </p>
        <a href="#" className="post_cta">Read More</a>
      </div>
    </div>
  </div>
  <section className="web container" id="about">
    <h2 className="heading" />
    <p className="para"> 
    </p>
    <section className="web container" id="education">
      <h2 className="heading" />
      <p className="para">
      </p>
      <section className="web container" id="accomplishments">
        <h2 className="heading" />
        <p className="para">
        </p>
        <footer className="footer-distributed">
          <div className="footer-right">
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-github" /></a>
          </div>
          <div className="footer-left">
            <p className="footer-links">
              <link rel="stylesheet" href="footer.css" />
              <a className="link-1" href="index.html">  Home </a>
              <a href="privacy.html">  Privacy Policy</a>
              <a href="disclaimer.html">  Disclaimer </a>
              <a href="about.html">  About </a>
              <a href="contactus.html">  Contact Us </a>
            </p>
            <p>©2023 Clubee Website. All rights reserved.</p>
          </div>
        </footer>
      </section></section></section></div>

  )}
export default Jatin