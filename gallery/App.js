import React, { Component } from "react";
import Masonry from "./Masonry.js";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Breadcrumb from "./Crumb.js";
import Users from "./User.js";
import { AnimatePresence, motion } from "framer-motion";
class App extends React.Component {

    componentDidMount() {
        this.setState();
    }

   
  render() {
  
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/masonry">Masonry</Link>
              </li>
           
            </ul>
          </nav>
        </div>
        
        <Route render={({location }) => (
          <>
           <Switch>
       
       <Route exact path="/">
         
        
           </Route>
         
           <Route  path="/masonry">
           <Masonry class={"masonry"} vertical={true} >
               <p src="pic1.jpg" h1="Frank Owo" mIndex="0"></p>
               <p src="pic2.jpg" h1="Angela Higgins" mIndex="1"></p>
               <p src="pic3.jpg" h1="Gottfreid" mIndex="2"> </p>
               <p src="pic4.jpg" h1="Alex Chen" mIndex="3"> </p>
               <p src="pic5.jpg" h1="Fank kohhol" mIndex="4"> </p>
               <p src="pic6.jpg" h1="Elise Dietrich" mIndex="5"></p>
               <p src="pic7.jpg" h1="Cristina Wu " mIndex="6"></p>
               <p src="pic3.jpg" h1="Cristina Wu " mIndex="7"></p>
             </Masonry>
        
          
           </Route>
        


          
           
         
         </Switch>
       
          </>
        )} />
       
      
      </Router>
    );
  }
}

export default App;
