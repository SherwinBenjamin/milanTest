import React from "react";
import './EventCard.css'

const EventCard = ({data}) =>{
    {if(data.id%2){
        return(
            <div className="event-card">
            <div className="event-info">
                <h3>{data.eventName}</h3>
            </div>
            <div className="event-card-img">
                <div className="img-overlay-odd">.</div>
            </div>
        </div>
    )}
    else{
        return(
            <div className="event-card">
            <div className="event-card-img even">
                <div className="img-overlay-even">.</div>
            </div>
            <div className="event-info">
                <h3>{data.eventName}</h3>
            </div>
        </div>
    )}
    }
}

export default EventCard;
