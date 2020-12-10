import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { testi } from "./Text.js";
import Breadcrumb from "./Crumb.js";
function ItemDetail({ match, state, itemList, index }) {
  /* id is the page name. like /items/id */
  var id = match.params.id;
  var author = match.params.author;
  var index = match.params.index;

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 1] };
  window.scrollTo(0, 0);


  return (
    <div>
      <motion.div
        className="details"
        animate={{
          opacity: 1,
          transition: { transition, delay: 0.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <h1>{author}</h1>
        <span> {state.x + " " + state.y}</span>
        { /* next and before buttons */ }
        <Link to={itemList[parseFloat(index) - 1]}> Before</Link>
        <Link to={itemList[parseFloat(index)+1]}> Next</Link>
        <p> {testi[index]}</p>
      </motion.div>
      <motion.div
        className="hero-detail"
        initial={{
          x: state.x,
          y: state.y,
          width: state.width,
          height: state.height,
        }}
        animate={{
          y: 40,
          x: 40,
          width: "calc(50vw - 80px",
          height: "calc(100vh - 80px",
          transition: { delay: 0, ...transition },
        }}
      >
        <motion.img
          initial={{
            scale: 1.1,
          }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          src={"/assets/" + id}
        ></motion.img>
      </motion.div>
    </div>
  );
}

export default ItemDetail;
