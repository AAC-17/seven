// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Rythms = () => {

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

    <div>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="events.css"/>
    
    <div class="pooji">
            <nav>
            <ul>
            <li><a href="/home">Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spirals">Spirals</a></li>
                          <li><a href="/rythms">Rythms</a></li>
                          <li><a href="/aac">AAC</a></li>
                          <li><a href="/ecell">ECell</a></li>
                          <li><a href="/spices">Spices</a></li>
                          <li><a href="/eventsummary">Events</a></li>
                          <li><a href="/event">New Event</a></li>
            </ul>
               
            </nav>
        </div>
        
            <div >
                <div >
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
                </div>
            </div>
    </div>   
  )
}

export default Rythms