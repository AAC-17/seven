// import React from 'react';
// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Ec = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/ecell')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (
<>
    <div>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="events.css"/>
    
    <div class="pooji">
            <nav>
            <ul>
            {/* <li><a href="/mainevents">Home</a></li> */}
            <li><a href="/mainevents">Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi">Spirals</a></li>
                          <li><a href="/ry">Rythms</a></li>
                          <li><a href="/ac">AAC</a></li>
                          <li><a href="/ec">ECell</a></li>
                          <li><a href="/sp">Spices</a></li>
                          <li><a href="/login">Login</a></li>
            </ul>
               
            </nav>
        </div>
        
            <div >
                {/* <div >
                    <h2 style={{color:'white'}}>ECell Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile"> 
                                <div class="text">
                                    <p class="animate-text">{event.eventname}</p>
                                    <p class="animate-text"> {event.eventdesc}</p>
                                    <p class="animate-text">{event.eventdate}</p>
                                    <p class="animate-text">{event.eventtype}</p>
                                </div>
                        </div>        
                            ))} 
                </div> */}
            </div>
    </div>  
     <div>
  <meta charSet="UTF-8" />
  <title>Team E-CELL</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="pooji">
    
    <div style={{float: 'right'}}>
      <img src="https://www.linkpicture.com/q/Web_capture_30-7-2023_224545_www.google.co.in-removebg-preview-1.png" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">Entrepreneurship Club</span>
      <h1>TEAM <span>E-CELL</span></h1>
      <p>
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
      </p>
      {/* <section className="web container" id="about"> */}
        <h2 className="heading">About the Club</h2>
        <br /><br />
        <p style={{color: 'white'}}>Ideate. Collaborate. Create. Everything an entrepreneur needs in one place. E-Cell makes your entrepreneurial journey better than you can imagine. 
          <br /><br />
          <br /><br />
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user" /></p>
              <h3>29+</h3>
              <p>Start-Ups have inucubated in our college</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-check" /></p>
              <h3>45+</h3>
              <p>Students and Faculty combined are associated with E-Cell </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>4+</h3>
              <p>Years of experience in running Entrepreneurship Development Cell</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-coffee" /></p>
              <h3>10+</h3>
              <p>Awards have been awarded to us for various activites.</p>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n     .* {\n       box-sizing: border-box;\n     }\n     \n     .column {\n       float: left;\n       width: 25%;\n       padding: 0 5px;\n     }\n     \n     .row {margin: 0 -5px;}\n     \n     .row:after {\n       content: \"\";\n       display: table;\n       clear: both;\n     }\n     \n     @media screen and (max-width: 600px) {\n       .column {\n         width: 100%;\n         display: block;\n         margin-bottom: 10px;\n       }\n     }\n     \n     .card {\n       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n       padding: 16px;\n       text-align: center;\n       background-color: #444;\n       color: white;\n     }\n     \n     .fa {font-size:50px;}\n     " }} />
        <section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://thumbs.dreamstime.com/b/entrepreneur-chart-keywords-icons-47724388.jpg" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading">Our Story</h2>
              <p style={{color: 'black'}}>E-Cell GRIET was founded in the year 2019 with the vision to develop a conducive environment for students to explore new avenues through innovation and imagination and thereby develop products and services relevant to society.
                <br /><br />
                There are 20 startups generated in the college so far. We are the only Student Body in GRIET whose main motive is to create more entrepreneurs and help them grow in their startup endeavors.
                We have also conducted several events promoting entrepreneurship thereby creating more awareness about the same.
                <br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading">The Team</h2>
            <br /><br />
            <p>“Entrepreneurship is living a few years of your life like most people won't so you can spend the rest of your life like most people cant.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'black'}}> Mrs. Indira Ma’am
              <br />
              Professor and E-Cell Coordinator
            </p>
            <p style={{color: 'black'}}>
              <br /><br />
              “E-Cell was first started by our Dean EDC, Mrs. Indira who is continously working in providing entrepreneurs with facilty in college itself so that they grow in their venture from a young age and gain experience in their field.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading">Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'black'}}>Some of the best events to look forward to!!</p>

              <div >
                    <h2 style={{color:'yellow'}}>ECell Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" style={{width:330}}> 
                                <div class="text">
                                    <p class="animate-text">{event.eventname}</p>
                                    <p class="animate-text"> {event.eventdesc}</p>
                                    <p class="animate-text">{event.eventdate}</p>
                                    <p class="animate-text">{event.eventtype}</p>
                                </div>
                        </div>        
                            ))} 
                </div>
              {/* <div className="wrap">
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>E-TALKS</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      The event aimed 
                      at introducing successful entrepreneurs and their journeys to the 
                      students of GRIET. They share their knowledge 
                      and wisdom and motivate the students to be brave and embark on 
                      their journey to explore their career paths. 
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://garden.spoonflower.com/c/12742058/p/f/l/2GhbfK8w0-DtVsY0WdJbd9XuNeWBYk5-ob62wGjvX95LVwsrWtoc7Tw/Solid%20pastel%20yellow.jpg" />
                  <div className="text">
                    <h1>MARKETING GENIX</h1>
                    <p className="animate-text">
                      Sell your P.E.N' was the latest event conducted by E-cell Student Body of 
                      GRIET. The event was envisioned with the main focus being to increase the student's knowledge 
                      on Brand and Product marketing while also giving the students a basic view of how pitching 
                      works. 
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://plainbackground.com/plain1024/779ecb.png" />
                  <div className="text">
                    <h1>IPL AUCTION</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      IPL Auction is one of the Flagship Events conducted by E-Cell every year. It has been inspired by the original IPL auction. The main aim of this event is to instill entrepreneurial qualities like decision making, managing time, managing money, and many other qualities among college students!
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap">
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-green-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>IDEA COMPETITION</h1>
                    <p className="animate-text">
                      The Idea Competition is designed to facilitate the development of great ideas and help those ideas find fulfillment. Ideas will be judged publically and by a jury of professionals.
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>PANEL DISCUSSION</h1>
                    <p className="animate-text"> Entrepreneurs from various fields come together to share their views on various topics related to Entrepreneurship</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://cdn.crispedge.com/ff964f.png" />
                  <div className="text">
                    <h1>E-SUMMIT</h1>
                    <p className="animate-text"> FLAGSHIP EVENT OF E-CELL</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
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
          </section></section></section></div></div></div>
</>
  )
}



export default Ec