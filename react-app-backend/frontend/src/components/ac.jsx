// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Ac = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/aacevents')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (

   
    <div>
  <meta charSet="UTF-8" />
  <title>Team AAC</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" type="text/css" href="events.css" />
  <div className="pooji">
    <nav>
      <ul>
         {/* <li><a href="/home">Home</a></li> */}
         {/* <li><a href="/spi">Spirals</a></li> */}
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
    {/* <div style={{float: 'right'}} 
      <img src="https://www.linkpicture.com/q/Web_capture_1-8-2023_183815_www.bing.com-removebg-preview_1.png" width={500} height={600} /> */}
    </div><br />
    <div className="content">
      <span className="title">Technical Club</span>
      <h1>TEAM <span>AAC</span></h1>
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
        <p style={{color: 'black'}}>The Advanced Academic Center (AAC) of GRIET, Hyderabad is an inter-disciplinary research centre. We are committed to excellence in teaching, learning, and research at AAC, and we continue to flourish in this modern age. Focusing mainly on a broad area of research and development, bringing together experts with diverse backgrounds to address aspects of that problem area, along with the continuous advancements in science. 
          <br /><br />
          <br /><br />
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user" /></p>
              <h3>Vishwakarma Award 2018</h3>
              <p />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-check" /></p>
              <h3>Signing an MOU with NRSC</h3>
              <p />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>Several Hackathons winners</h3>
              <p />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>Several Projects</h3>
              <p />
            </div>
          </div>
        </div>
        <section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://thumbs.dreamstime.com/b/entrepreneur-chart-keywords-icons-47724388.jpg" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading">WHAT DO WE OFFER?</h2>
              <p style={{color: 'black'}}>Students are engaged in designing and executing projects with AAC, we organize  workshops and lectures on specialized engineering software and hardware tools. Offering an unparalleled student experience and a generous financial aid program as well. Along with this we also provide mentorship from real time industrial experts as well as Sponsored / Consultancy R&amp;D projects as well. Students at AAC are encouraged to learn scientific and technical skills ,to explore the various fields present and help with society's needs in the future.
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
            <p>“The technology you use impresses no one. The experience you create with it is everything.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'black'}}> SIR/MA'AM
              <br />
              Professor and AAC Coordinator
            </p>
            <p style={{color: 'black'}}>
              <br /><br />
              “Advanced Academic Center (AAC) aspires to be a pre-eminent and inclusive student-focused research unit, preparing young minds in design thinking and innovation for societal problems.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading">Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'black'}}>Some of the best events to look forward to!!</p>
              
                <div >
                  {/* <link rel="stylesheet" href="style.css" /> */}
                  <link rel="stylesheet" href="events.css" />
                    <h2 style={{color:'yellow'}} >AAC Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" style={{width:330}}> 
                                <div class="text" >
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
                    <h1>AAC EXPO 2022</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      This involves promoting solutions to societal concerns through the Expo Live programme and inspiring visitors with concepts for how to address problems and contribute to the advancement of humanity. 
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
                    <h1>AAC LAB INAUGURATION</h1>
                    <p className="animate-text">
                      AAC stands for learning through exploration, experimentation and experience. To create a novel environment to foster scientific temper, innovation and creativity amongst students , the committee set up a Lab in room number 3614 in the Block 3 for conducting conclaves and to carry out research level projects. 
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
                    <h1>DATA ANALYTICS CONCLAVE</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      AAC GRIET had organized a conclave at the GRIET campus on 17th August 2019, the theme of the session being “DATA SCIENCE". The conclave proved to be an impactful platform where an array of inspirational group of people were brought together, led by a data scientist with cutting edge entrepreneurial skills
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
                    <h1>XYZ</h1>
                    <p className="animate-text">
                      XYZ
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
                    <h1>XYZ</h1>
                    <p className="animate-text"> XYZ</p>
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
                    <h1>OTHER</h1>
                    <p className="animate-text"> XYZ</p>
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
          </section></section></section></div></div>

  )
}

export default Ac