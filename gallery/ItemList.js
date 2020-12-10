import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Breadcrumb from "./Crumb.js";
export class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
    this.itemList = this.props.itemList;
  }
  componentDidMount() {
    window.scrollTo(0, this.props.offset);
  }

  render() {
    return (
      <motion.div className={this.props.class}>
        {React.Children.map(this.props.children, (thisArg, index) => {
          console.log(this.itemList[index]);
          return (
            <Item
              index={index}
              setDetail={this.props.setDetail}
              image={thisArg.props.src}
              url={this.itemList[index]}
              h1={thisArg.props.h1}
              
            ></Item>
          );
        })}
      </motion.div>
    );
  }
}

export function Item({ setDetail, h1, image, url, index }) {
  return (
    <motion.div
      className="masonry-item"
      onClick={(e) => {
        setDetail(e, { h1,  url });
        e.target.nextSibling.style.zIndex = "-1";
       
      }}
    >
      <Link to={url}>
        <motion.img
          src={"/assets/" + image}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 * index },
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          className="fader"
        ></motion.div>
        <div>{/* children */}</div>
      </Link>
    </motion.div>
  );
}

/** this generates all blocks inside the masonry. */

/** the onClick function is used to change state and hack some CSS into the clicked item to make it not disappear like the others
 *
 *
 * the Link handles sate
 * the fader mimics the opacity going to 0.
 *
 */
