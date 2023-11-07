// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Sp = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/spices')
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
        
            {/* <div >
                <div >
                    <h2 style={{color:'white'}}>Spices Events</h2>

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
                </div>
            </div> */}
    </div>   
    <div>
  <meta charSet="UTF-8" />
  <title>Team SPICES</title>
  <link rel="stylesheet" href="spices.css" />
  <link rel="stylesheet" type="text/css" href="spices.css" />
  <div className="pooji">
    
    <div style={{float: 'right'}}>
      <img src="https://www.linkpicture.com/q/Web-capture_1-8-2023_19213_www.griet.ac.in.jpeg" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">Cooking Club</span>
      <h1>TEAM <span>SPICES</span></h1>
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
        <p style={{color: 'black'}}>Spices, a concept unique to engineering, gives a rare opportunity of to the students to experiment 
          with their culinary skills. 
          Its just not the competition about the state and the flavour but it tries to bring out the presentation 
          talent of the student.  
          <br /><br />
          <br /><br />
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user" /></p>
              <h3>100+</h3>
              <p>Participants</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-check" /></p>
              <h3>33+</h3>
              <p>Teams </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>xyz</h3>
              <p>xyz</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-coffee" /></p>
              <h3>xyz</h3>
              <p>xyz</p>
            </div>
          </div>
        </div>
        <section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading">Our Story</h2>
              <p style={{color: 'black'}}>This competition held annually and prize are awarded to the winners, who are selected by a panel 
                of judges. The judges take into consideration not only the taste, but also the nutritious values of the 
                recipe and the way the students present the dishes.
                <br /><br />
                Nearly 100 participants (including students &amp; faculty) have joined hands together to make this event 
                a huge success. Around 33 teams have showcased the recipe, which have been prepared on spot in 
                a given stipulated time. The participation of students and faculty from various departments is really 
                appreciable.
                <br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading">The Team</h2>
            <br /><br />
            <p>“A recipe has no soul. You as the cook must bring soul to the recipe.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'black'}}> Mrs. Bh. 
              Saroja Rani Ma'am
              <br />
              Professor and Spices Coordinator
            </p>
            <p style={{color: 'black'}}>
              <br /><br />
              “To provide culinary skills among faculty and students and make 
              them energetic force of the society, the Spices coordinator Mrs. Bh. 
              Saroja Rani was entrusted with the task of conducting this program.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading">Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'lightblue'}}>Some of the best events to look forward to!!</p>
<div >
                <div >
                    <h2 style={{color:'yellow'}}>Spices Events</h2>

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
            </div>





              {/* <div className="wrap">
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      xyz 
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text">
                      xyz
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      xyz
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
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text">
                      xyz
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text"> xyz</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text"> xyz</p>
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
export default Sp