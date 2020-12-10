import React from "react";
import { withRouter } from "react-router";
import ItemDetail from "./Item-Detail.js";
import { ItemList, Item } from "./ItemList.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.itemList = [];

    this.createItemList();
    this.state = {
      x: "",
      y: "",
      title: "",
      width: "",
      height: "",


    };

    this.setDetail = this.setDetail.bind(this);
  }
/* this creates an array for next and before items in the item detail. the objects are strings inside an array */
  createItemList = () => {
    this.itemList = [];
    React.Children.map(this.props.children, (thisArg, index) => {

      if(this.props.match.url != "/") {
        this.itemList.push(
          this.props.match.url +
            "/" +
            thisArg.props.mIndex +
            "/" +
            thisArg.props.h1 +
            "/" +
  
            thisArg.props.src
        );
      }
      else {
        this.itemList.push(
          "" +
            "/" +
            thisArg.props.mIndex +
            "/" +
            thisArg.props.h1 +
            "/" +
  
            thisArg.props.src
        );

      }
      
    });
  };
 /* this selects the current state. Used for animation and passing particular values */
  setDetail = (e, { h1, newIndex }) => {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const offsetX = currentTargetRect.left,
      offsetY = currentTargetRect.top,
      Ewidth = currentTargetRect.width,
      Eheight = currentTargetRect.height;

    this.setState({
      x: offsetX,
      y: offsetY,
      width: Ewidth,
      height: Eheight,
      title: h1,
      offset: window.pageYOffset,
      currentIndex: newIndex,
    });
  };

  render() {
    {
      /* console.log(this.props.match.url); */
    }

    var x = this.props.match.url;
    if(x == "/") {
      x = "";
    }

    return (
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch key={location.pathname} location={location}>
              <Route
                
               exact path={this.props.match.url}
                render={({ match }) => (
                  <ItemList
                    class={this.props.class}  // simple css class 
                    setDetail={this.setDetail} // pass the setstate function
                    itemList={this.itemList} // pass the list of urls
                    offset={this.state.offset} // pass the offset to adjust scrolling
                  >
                    {this.props.children}
                  </ItemList>
                )}
              ></Route>
              <Route
                path={x + "/:index/:author/:id"}
                render={({ match }) => (
                  <ItemDetail
                    url={this.props.match.url}
                    state={this.state} // pass the state values
                    match={match}  // pass the match used for getting info from URL
                    itemList={this.itemList} // pass the list of urls for back and next
                  />
                )}
              ></Route>
            </Switch>
          </AnimatePresence>
        )}
      />
    );
  }
}

export default withRouter(Masonry);
