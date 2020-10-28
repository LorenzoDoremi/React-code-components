import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const data = Object.values(props.match.params);
  var string = "/";
  const symbol = ">"
  return (
    <div className="breadcrumb">
      <ul>
        <li>
         
          <Link to={string}> Home  </Link>
        </li>

        {data.map((thisParam) => {
          string = string + thisParam.toString() + "/";
          return ( 
              
            <li>
              <span> {symbol}</span>
              <Link to={string}>{thisParam} </Link>
            </li>
            
          
          );
        })}
      </ul>
    </div>
  );
};

export default withRouter(Breadcrumb);

