import React from "react";
import "./styles/style.css";
import {articles} from "./articles";
import {Link} from "react-router-dom";

function Detail() {
  
  class Detail extends React.Component {
    constructor(props) {
      super(props);
    };

    render() {
      return(
        <div className="article">
          {articles.map((data) => {
              let urlMaker = (url) => {
                let arr = url.toLowerCase()
                    .normalize("NFD") //normalizace stringu podle NFD (NFC-default, nechává čárky)
                    .replace(/[\u0300-\u036f]/g, "") //regex class pro matching U+0300 -> U+036F
                    .split(" ")
                    .join("-");
                  return arr;
              };
              if("/blog/"+urlMaker(data.title) === window.location.pathname) {
                return(
                  <div className="whole-article">
                    <div className="article-heading" style={{backgroundImage: "url("+data.thumb_image+")"}}>
                      <h1>{data.title}</h1>
                    </div>
                    <div className="article-content">
                      <p>{data.content}</p>
                    </div>
                  </div>
                )
              };
            })
          }
        </div>
      )
    }
  } 
  
  return (
    <div className="Detail">
      <Link to="/" style={{textDecoration: "none"}}><span className="goBackBtn">&lt;&lt;&lt;</span></Link>
      <Detail />
    </div>
  );
}

export default Detail;