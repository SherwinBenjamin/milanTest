import "./categories.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {motion } from "framer-motion"
import  data  from "../../DataList/EventList";
import CategoryBox from "../../components/category/CategoryBox";

function Event() {             // wrapper for categories box
  // eslint-disable-next-line no-unused-vars
  const [categoryData, setCategoryData] = useState(data);
  // const [isOpen, setIsOpen] = useState("flase");


 

  return (
      <div className="categories y mandatory-scroll-snapping always-stop">
        {categoryData?.map((elem) => {
          return (
            <div>



            <motion.div key={elem.id}
            // initial={{
            //   opacity:0,
            //   translateX:i%2===0?50:50,
            //   // translateY:-100,
            // }}
            // animate={{opacity:1,
            //   translateX:0,
            //   translateY:0,
            // }}

            // transition={{duration :0.4,delay:i*0.3}}
            
            >
              <Link to={`/${elem.id}`} style={{textDecoration:"none"}}>
                <CategoryBox
                  color={elem.color}
                  name={elem.name}
                  
                />
              </Link>
            </motion.div>
            </div>

          );
        })}
      </div>
  );
}

export default Event;
