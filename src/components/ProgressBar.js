import React, {useState, useEffect} from "react";
import { motion, useAnimation } from "framer-motion";

export default function ProgressBar({ wth, str, stp, on }) {
  const controls = useAnimation();
  const [a, setA] = useState(on);

  let st = '';
  useEffect(()=>{
    console.log('rerender');
    st = "0%";
  },[a]);

  if(str) {
    console.log('gram');
    controls.start({
      width: "101%",
      transition: { duration: 30, ease: "linear" }
    });
  }

  if(stp) {
    console.log('slam');
    controls.stop();
  }

  return (
    <div style={{width: '100%', marginTop: '5%'}}>
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
          initial={{ width: '100%' }}
          style={{ backgroundColor: "#1DB954", height: "2px", width: st }}
        />
      </div>
    </div>
  );
}
