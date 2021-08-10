import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./App.css";

const Frontpage = () => {
  // Random color generator for background, buttons and text on the page
  const colors = [
    "#8391B5",
    "#290D11",
    "#0C9ABC",
    "#0E17F4",
    "#97BC89",
    "#6B48F7",
    "#584A35",
    "#669F15",
    "#15FC93",
    "#7C8329",
    "#27D792",
    "#4786C8",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Random color generator for background, buttons and text on the page

  const quotes = [
    {
      quote:
        "No opera plot can be sensible, for people do not sing when they are feeling sensible.",
      author: "W. H. Auden (1907 - 1973)",
    },
    {
      quote:
        "There is no stigma attached to recognizing a bad decision in time to install a better one.",
      author: "Laurence J. Peter",
    },
    { quote: "If you bow at all, bow low.", author: "Chinese Proverb" },
  ];

  const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState([]);

  const divStyle = { backgroundColor: randomColor };
  const divStyle2 = { color: randomColor };

  return (
    <div style={divStyle} className="mainDiv">
      <div id="quote-box">
        <div style={divStyle2} id="text">
          “{randomQuotes.quote}
        </div>
        <div style={divStyle2} id="author">
          {" "}
          - {randomQuotes.author}
        </div>
        <div id="row-box">
          {" "}
          <TwitterIcon
            id="tweet-quote"
            style={divStyle2}
            onClick={() => window.open("twitter.com/intent/tweet", "_blank")}
          >
            <a href="twitter.com/intent/tweet" id="tweet-quote"></a>
          </TwitterIcon>
          <Button
            id="new-quote"
            variant="contained"
            style={divStyle}
            onClick={() => setQuote(randomQuotes)}
          >
            New quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
