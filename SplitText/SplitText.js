import React from "react";
import {  motion } from "framer-motion";

export default function SplitText({ text, initial, animate, exit, duration, speed }) {

  var initialS  = initial != undefined ? initial : { opacity: 0, duration: 0.5};  
  var animateS  = animate != undefined ? animate : { opacity: 1, duration: 0.5}; 
  var exitS  = exit != undefined ? exit : { opacity: 0, duration: 0.5};  
  var durationS = duration != undefined ? duration : 0.5;
  var speedS = speedS != undefined ? duration: 0.01; 
  var word = Array.from(text);

  return word.map((value, index) => {
    return (
      <motion.span className="splitspan"
        initial={initialS}
        animate={{
          ...animateS,
          transition: {
            duration: durationS,
            delay: speedS*index,
            ease: "easeInOut",
          },
        }}
        exit={{
          ...exitS,
          transition: {
            duration: durationS,
            delay: speedS*index,
            ease: "easeInOut",
          },
        }}
      >
        {value}
      </motion.span>
    );
  });
}
