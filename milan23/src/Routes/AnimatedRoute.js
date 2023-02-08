import React from "react";
import { Route, Routes } from "react-router-dom";

// import EventListPage from "../components/event/EventContainer";
import EventContainer from "../components/event/EventContainer";

import Login from "../pages/login/Login";

import Event from "../pages/event/Event";
import EventListPage from "../components/event/EventListPage";
import Music from "../pages/music/Music";

import Home from "../pages/home/home";
import ComingSoon from "../pages/comingSoon/ComingSoon";

function AnimatedRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />

        <Route path="/:name" element={<EventListPage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>


        <Route path="/:name" element={<EventContainer />} />
        </Routes>

      {/* <Routes >
          <Route path="/event" element={<Event />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/music/" element={<EventListPage/>}/>
          <Route path="/music/:id" element={<Music/>}/>
        </Routes> */}
        
    </div>
  );
}

export default AnimatedRoute;
