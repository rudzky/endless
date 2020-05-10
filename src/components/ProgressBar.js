import React, {useState, useEffect} from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

export default function ProgressBar({ wth, str, stp, on, zero}) {
  
  const x = useMotionValue(0);
  const [prev, setPrev] = useState(10);

  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{

    console.log(controls);
    controls.set({width: "0%"});
    controls.start({
      width: "100%",
      transition: { duration: 30}
    });

    //console.log('zmieniono parametr');
    
  },[on]);

  if(str) {
    controls.start({
      width: "100%",
      transition: { duration: 30, ease: "linear" }
    });
  }
  if(stp) {
    controls.stop();
  }

  const variants = {
    open: { width: "100%", transition: {duration: 30, ease: "linear"}},
    closed: { width: "0%", transition: { duration: 0, ease: "linear" }},
  };

  return (
      <div style={{width: "100%", marginTop: "5%"}}>
        <div
          style={{
            width: wth,
            height: "2px",
            background: "#FFF",
            padding: "0px",
            display: "flex"
          }}
        >
          <motion.div
            animate={controls}
            variants={variants}
            // initial={{ width: x.get() }}
            //exit={{ width: "0%" }}
            style={{ width: zero, backgroundColor: "#1DB954", height: "2px" }}
          />
        </div>
        <p>{x.get()}</p>
      </div>
  );
}
