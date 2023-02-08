import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import data from '../../DataList/EventList';
import EventCard from './EventCard';
import './EventContainer.css';
// import image from '../../utils/images/eventlistbg-music.png'

const EventContainer = () =>{
    const id = useParams();
    const[eventData,setEventData]= useState([]);
    const[clubData, setClubData]= useState({})
    // console.log(parseInt(id.name));
    useEffect(() => {
      data?.forEach((item)=>{
        if(item.id===Number(id.name)){
          setEventData(item.events);
          setClubData(item);
        }
      })
    }, [])
    console.log(clubData);
    console.log(clubData.bgImage);
    // const allEventCards = Array(5).fill(<EventCard />);

    return(
        <div className="events-page">
            <div className="events-banner">
              <img src={clubData.bgImage} alt="img"/>
              <div className="event-banner-h1">
                <h1>{clubData.name}</h1>
              </div>
              <p>blah blah</p>
            </div>
            <div className="events-container">
            {eventData?.map((event)=>{
              return(
                <EventCard data={event}/>
              )
            })
            }
            </div>
        </div>
    )
}

export default EventContainer;
