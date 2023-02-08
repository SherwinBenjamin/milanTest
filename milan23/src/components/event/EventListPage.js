import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../../DataList/EventList";
import "./eventStyles.css";

function EventListPage() {
  // this is page inside category box , which will show all the events
  const id = useParams();
  const [eventData, setEventData] = useState({});
  const [listData, setListData] = useState([]);
  // console.log(parseInt(id.name));
  console.log(id);
  useEffect(() => {
    data?.forEach((item) => {
      if (item.id === Number(id.name)) {
        setEventData(item);
        setListData(item.events);
      }
    });
  }, []);
  console.log(eventData);
  console.log("list", listData);

  // eslint-disable-next-line
  // console.log(eventData.events[0].title);

  return (
    <div className="eventsdata">
      {/* <h1>events</h1> */}
      {console.log("hi", eventData.events)}
      {listData.map((elem) => (
        <div>
          <div>
            <h1 className="title"> {elem.title}</h1>
          </div>

          <div className="content">
            <h2 className="description">{elem.description}</h2>
            <div className="top">
              <h3>Team size: {elem.teamsize}</h3>
              <h3>Time Limit : {elem.timelimit}</h3>
              <h3>Mode: {elem.mode}</h3>
            </div>
            <div className="judgment">
              <h3>Judgement Criteria :</h3>
              <p>{elem.judgingcriteria}</p>
            </div>

            <h3>General Rules :</h3>
            {elem.rules.map((ruleItem) => (
              <p>{ruleItem}</p>
            ))}

            <div className="note">
              {" "}
              <h3>Note : </h3> {elem.note}
            </div>
            <div className="contact">
              <h3>Contact:</h3>
              {elem.contact.map((contactitem) => (
                <div className="items">
                  {contactitem.name} : {contactitem.contact}
                </div>
              ))}
            </div>

            {/* <div className="register">
              <a href="./index" className="btn">
                Register for this Event!
              </a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventListPage;
