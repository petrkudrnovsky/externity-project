import React from "react";
import "./styles/style.css";
import {articles} from "./articles";
import {Link} from "react-router-dom";

function Domu() {

  class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        url: "",
        test: "hello"
      };
    };
    
    render() {
      return (
        <div className="articles">
          {articles.sort(function(a, b) {
            if(a.title < b.title) {
              return -1;
            };
            if(a.title > b.title) {
              return +1;
            };
            return 0;
          })
          .map((data) => {
            let urlMaker = (url) => {
              let arr = url.toLowerCase()
                .normalize("NFD") //normalizace stringu podle NFD (NFC-default nechává čárky)
                .replace(/[\u0300-\u036f]/g, "") //regex class pro matching U+0300 -> U+036F
                .split(" ")
                .join("-");
              return arr;
            };
            return(
              <Link to={"/blog/"+urlMaker(data.title)}>
              <div className="articleWrapper">
                <img src={data.thumb_image} alt=" " />
                <p>{data.title}</p>
              </div>
              </Link>
            )
          })}
        </div>
      )
    }
  } 

  return (
    <div className="Domu">
      <Articles />
    </div>
  );
}


export default Domu;