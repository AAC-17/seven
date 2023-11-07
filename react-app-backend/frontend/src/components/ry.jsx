// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Ry = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/rythmevents')
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
            {/* <li><a href="/home">Home</a></li> */}
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
                    <h2 style={{color:'white'}}>Rythms events</h2>

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
  <title>Team Rhythms</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="stylesheet" href="rythms.css" />
  <div className="pooji">
    <nav>
                
    </nav>
    <div style={{float: 'right'}}>
      <img src="https://yt3.googleusercontent.com/cuVWB98M0I5YRYAkUGX3hXDrqcjfwbgs_Y7O0FXrOiwoF0jL8S_4tzUAdnoC6iiL7GK83mkKHg=s900-c-k-c0x00ffffff-no-rj" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">CULTURAL Club</span>
      <h1>TEAM <span>RHYTHMS</span></h1>
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
        <p style={{color: 'black'}}>GRIET has very active and enthusiastic cultural body named as “RHYTHMS “managed by students themselves under the guidance of faculty members.
          <br /><br />
          <br /><br />
        </p><section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?cs=srgb&dl=pexels-annam-w-1047442.jpg&fm=jpg" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading">Our Story</h2>
              <p style={{color: 'black'}}>Since the genesis of Rhythms, new talent has been blooming in our college. Rhythms is an opportunity for students to explore their talents and come up with new objectives. It is amazing to see how Rhythms organizes events with so much passion and perfection. Since its inception, it has been steadily escalating and hope we can reach greater heights in the field of culturals.
                <br /><br />
                It is amazing to see how Rhythms organizes events with so much passion and perfection. Since its inception, it has been steadily escalating and hope we can reach greater heights in the field of culturals.
                <br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading">The Team</h2>
            <br /><br />
            <p>“The acquiring of culture is the development of an avid hunger for knowledge and beauty.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://i.ytimg.com/vi/lFRShqvehuM/maxresdefault.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'black'}}> V Usha Rani Ma'am
              <br />
              Asst.Prof, EEE Dept and Rhythms Faculty Coordinator
            </p>
            <p style={{color: 'black'}}>
              <br /><br />
              ““Art speaks the soul of its culture”, GRIET equally educate its students with the importance of arts and culture in one’s life with association of RHYTHMS club.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading">Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'black'}}>Some of the best events to look forward to!!</p>
               <div >
                    <h2 style={{color:'yellow'}}>Rythms events</h2>

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
                    <h1>PULSE</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      YAYY!!
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
                    <h1>SHLOKA COMPETITION</h1>
                    <p className="animate-text">
                      SHLOKA COMPETITION was held on 7th March for teachers and 
                      staff members which was mainly based on Bhagavad Gita and 
                      Srimad Bhagavatam. Faculty and Staff members participated
                      with enthusiasm and made that day very special.
                      All the lecturers had a memorable day, participating in the 
                      competition.
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
                    <h1>ANNUAL DAY</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      GRIET has celebrated its Annual day on 12th of March 2022.The 
                      exceptional participation by the students and respected faculty members, 
                      made this event a Huge success. Team Rhythmsmesmerized the stage 
                      with classical dance, followed by enriching band performance which
                      enthralled everyone. 
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
                    <h1>CANTEEN EVENT</h1>
                    <p className="animate-text">
                      The Canteen event is most exciting and exhilarating event in
                      GRIET. The dance performances by team Invincibles was worth a
                      while to watch. Musicianship by band Retrieve was extraordinary.
                      Not to mention, the Theatre team gave the audience a delight to
                      the eyes with their catchy expressions and amazing acting.
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
                    <h1>THE 70MM DISCUSSION</h1>
                    <p className="animate-text"> The 70 MM event” is an event organized to showcase the film making
                      skills of the students of GRIET. This event has helped students bring out 
                      their firm autography skills and at the end of the day, The event turned 
                      out to be a blockbuster.</p>
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
                    <h1>SPECTRA 2022</h1>
                    <p className="animate-text"> “SPECTRA 2022” is a colorful and memorable cultural fest that was 
                      organized in GRIET.</p>
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

export default Ry