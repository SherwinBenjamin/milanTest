import React  from "react";
import "./CategoryBox.css"
// import {motion, useScroll, useTransform, MotionValue } from "framer-motion"


// eslint-disable-next-line react/prop-types
function CategoryBox({color,name}) {


  // function useParallax(value: MotionValue<number>, distance: number) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }

  //   const ref = useRef(null);
  //   const { scrollYProgress } = useScroll({ target: ref });
  //   const y = useParallax(scrollYProgress, 400);



  return (
   <section >
    
    <div className="categoryBox " 
    // ref={ref}         // this is each tile as a box
     style={{ backgroundColor: `${color}` }}>
      <p className="categoryNameP">#{name}</p>
    </div>
    {/* <motion.h2 className="categoryName" style={{y}}>#{name}</motion.h2> */}
   </section>

  );
}

export default CategoryBox;

