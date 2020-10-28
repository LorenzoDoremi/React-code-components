import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const data = props.location.pathname.split('/');
  var string = "";
  const symbol = ">";

 
  
  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
     
        {data.map((thisParam, index) => {
        
            string = string + thisParam +"/";
            

            
        
          if (  index > 0 &&  (props.constraint == undefined || props.constraint[index-1] ||  index > props.constraint.length)) {
          
            
            return (
              <li>
                <span> {symbol}</span>
                <Link to={string.substr(0, string.length - 1)}>{thisParam} </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default withRouter(Breadcrumb);
